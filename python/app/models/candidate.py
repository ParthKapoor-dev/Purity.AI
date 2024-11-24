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


async def get_user_ids(db: AsyncIOMotorDatabase, candidate_ids: list):
    """
    Fetch only the userId for candidates matching the search criteria.
    """
    pipeline = [
        {"$match": {"_id": {"$in": candidate_ids}}},
        {"$project": {"_id": 0, "userId": 1}},  # Exclude _id and include only userId
    ]
    result = await db["candidates"].aggregate(pipeline).to_list(length=len(candidate_ids))
    return [doc["userId"] for doc in result]
