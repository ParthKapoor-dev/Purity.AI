from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from app.routes import resume, search
from fastapi.middleware.cors import CORSMiddleware


# Load environment variables
load_dotenv()

# Initialize FastAPI
app = FastAPI()

# Configure CORS
origins = [
    "http://localhost:3000",  # Frontend origin (replace with your frontend's URL)
    "http://127.0.0.1:8000",  # Your API's URL if it's accessed locally
    # You can add other origins as needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows only the specified origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers (you can restrict if needed)
)

# MongoDB Client
mongo_client = AsyncIOMotorClient(os.getenv("MONGO_URI"))
db = mongo_client[os.getenv("DB_NAME")]

# Attach routes
app.include_router(resume.router, prefix="/api/resume", tags=["Resume Parsing"])
app.include_router(search.router, prefix="/api/search", tags=["Candidate Search"])
