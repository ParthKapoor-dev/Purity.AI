from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from app.routes import resume, search

# Load environment variables
load_dotenv()

# Initialize FastAPI
app = FastAPI()

# MongoDB Client
mongo_client = AsyncIOMotorClient(os.getenv("MONGO_URI"))
db = mongo_client[os.getenv("DB_NAME")]

# Attach routes
app.include_router(resume.router, prefix="/api/resume", tags=["Resume Parsing"])
app.include_router(search.router, prefix="/api/search", tags=["Candidate Search"])
