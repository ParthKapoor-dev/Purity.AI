from motor.motor_asyncio import AsyncIOMotorDatabase

async def insert_candidate(db: AsyncIOMotorDatabase, candidate_data: dict):
    """
    Insert candidate data into MongoDB.
    """
    
    # print(candidate_data)
    
    result = await db["candidates"].insert_one(candidate_data)
    return str(result.inserted_id)

async def get_all_candidates(db: AsyncIOMotorDatabase):
    """
    Fetch all candidates from MongoDB and convert ObjectId to string.
    """
    candidates_cursor = db["candidates"].find()
    candidates = await candidates_cursor.to_list(1000)

    # Convert ObjectId to string for all candidates
    for candidate in candidates:
        candidate["_id"] = str(candidate["_id"])  # Convert the _id field to string

    return candidates


from bson import ObjectId
from fastapi.encoders import jsonable_encoder

from bson import ObjectId

async def get_users_by_ids(db: AsyncIOMotorDatabase, user_ids):
    """
    Fetch user details from the User model based on an array of userIds.
    """
    try:
        # Ensure that user_ids are being converted correctly to ObjectId
        object_ids = [ObjectId(user_id) for user_id in user_ids if ObjectId.is_valid(user_id)]
        
        print("object ids " , object_ids)

        if not object_ids:
            print("No valid ObjectIds found.")
            return []

        # Query the User collection
        users = await db["User"].find({"_id": {"$in": object_ids}}).to_list(None)
        
        print("users before" , users)
        
        return [custom_jsonable_encoder(user) for user in users]
    except Exception as e:
        print(f"Error fetching users: {e}")
        return []

    
def custom_jsonable_encoder(obj):
    if isinstance(obj, ObjectId):
        return str(obj)  # Convert ObjectId to string
    # Handle other types
    if isinstance(obj, dict):
        return {key: custom_jsonable_encoder(value) for key, value in obj.items()}
    elif isinstance(obj, list):
        return [custom_jsonable_encoder(item) for item in obj]
    return obj  # Default case for other types
