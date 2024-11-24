from fastapi import APIRouter, HTTPException
from app.utils.embeddings import search_candidates

router = APIRouter()

@router.get("/")
async def search_candidates_route(query: str, top_k: int = 3):
    """
    Search for candidates based on recruiter query.
    """
    try:
        results = await search_candidates(query, top_k)
        return {"query": query, "results": results}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
