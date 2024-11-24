from sentence_transformers import SentenceTransformer, util
from app.models.candidate import get_all_candidates , get_user_ids

# Load model
model = SentenceTransformer("all-MiniLM-L6-v2")

async def search_candidates(query: str, top_k: int = 3):
    """
    Search candidates based on semantic similarity with a query.
    """
    
    # Import db here to avoid circular import
    from app.main import db  # Importing db inside the function
    
    candidates = await get_all_candidates(db)
    
    candidates = [custom_jsonable_encoder(candidate) for candidate in candidates]

    
    if not candidates:
        return []  # If no candidates, return an empty list

    # If top_k is greater than the number of candidates, limit top_k to the available candidates
    top_k = min(top_k, len(candidates))

    # Create candidate corpus
    def create_candidate_corpus(candidate):
        return f"""
        Name: {candidate['name']}
        Skills: {', '.join(candidate['skills'])}
        Experiences: {' '.join(candidate['experiences'])}
        Projects: {' '.join(candidate['projects'])}
        """

    candidate_corpus = [create_candidate_corpus(candidate) for candidate in candidates]
    candidate_embeddings = model.encode(candidate_corpus, convert_to_tensor=True)

    # Query embedding and similarity
    query_embedding = model.encode(query, convert_to_tensor=True)
    similarities = util.pytorch_cos_sim(query_embedding, candidate_embeddings)[0]

    # Get the top-k most similar candidates
    top_results = similarities.topk(k=top_k)

    # Get candidate ObjectIds
    candidate_ids = [candidates[idx.item()]["_id"] for idx in top_results[1]]

    # Fetch userIds for the matching candidates
    user_ids = await get_user_ids(db, candidate_ids)

    return user_ids


from fastapi.encoders import jsonable_encoder
from bson import ObjectId

# Custom encoder function
def custom_jsonable_encoder(obj):
    if isinstance(obj, ObjectId):
        return str(obj)  # Convert ObjectId to string
    return jsonable_encoder(obj)  # Use FastAPI's default encoder for other types
