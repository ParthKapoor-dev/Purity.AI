from fastapi import APIRouter, HTTPException
import os
import uuid
import requests
from app.utils.resume_parser import parse_resume
from app.models.candidate import insert_candidate

router = APIRouter()

@router.post("/")
async def parse_and_store_resume(userId : str , resume_url: str):
    """
    Parse a resume from a given URL and store parsed data in MongoDB.
    """
    try:
        # Download the resume from the provided URL
        response = requests.get(resume_url)
        if response.status_code != 200:
            raise HTTPException(status_code=400, detail="Unable to download resume from the provided URL.")

        # Save the downloaded file to a temporary location
        temp_file_name = f"/tmp/{uuid.uuid4().hex}.pdf"
        with open(temp_file_name, "wb") as temp_file:
            temp_file.write(response.content)

        # Parse the resume
        parsed_data = parse_resume(temp_file_name)
        if "error" in parsed_data:
            raise HTTPException(status_code=400, detail=parsed_data["error"])

        parsed_data["userId"] = userId

        # Import db here to avoid circular import
        from app.main import db  # Importing db inside the function

        # Store parsed data in MongoDB (pass `db` from main.py to insert_candidate)
        candidate_id = await insert_candidate(db, parsed_data)

        # Clean up temporary file
        os.remove(temp_file_name)

        return {"message": "Resume parsed and stored successfully", "candidate_id": candidate_id}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
