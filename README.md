# Purity AI - Hiring Automation Platform

Purity AI is an AI-driven hiring automation platform designed to streamline recruitment by evaluating candidates based on their resumes, experience, and answers to specific questionnaires. Recruiters can query the system for candidates that meet specific job requirements, and AI ranks suitable matches. The platform leverages Next.js/React.js for the full-stack web framework and Python for AI processing.

## Features

- **Candidate Profile Management**: Candidates can create accounts and upload resumes associated with their unique user ID.
- **Automated Resume Parsing**: Extracts key information (e.g., name, skills, experiences, projects) using AI.
- **Recruiter Search**: Allows recruiters to query candidates based on specific criteria. Results return a ranked list of user IDs for matching candidates.
- **AI-Powered Matching**: Uses semantic embeddings to compare recruiter queries with candidate profiles.
- **Automatic Notifications**: Monthly reminders for candidates to update their profiles.

## Technologies Used

- **Frontend**: Next.js, React.js
- **Backend**: Python (FastAPI), REST API
- **Database**: MongoDB (for candidate data)
- **AI Libraries**: spaCy (resume parsing), Sentence Transformers (semantic search), Pandas
- **Hosting and Deployment**: Docker (for containerization), Vercel/AWS (production deployment)

---

## Getting Started

### Prerequisites

- Node.js and npm
- Python 3.x and pip
- MongoDB instance (local or cloud, e.g., MongoDB Atlas)
- Docker (optional, for containerized development)

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/purity-ai.git
   cd purity-ai
   ```

2. **Set Up the Frontend**

   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

3. **Set Up the Backend**

   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Create a virtual environment:
     ```bash
     python3 -m venv env
     source env/bin/activate  # For Unix-based systems
     ```
   - Install dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Start the backend server:
     ```bash
     uvicorn app.main:app --reload
     ```

4. **Configure Environment Variables**

   Create a `.env` file in the `backend` directory with the following variables:

   ```dotenv
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net
   DB_NAME=purity_ai
   ```

   Replace `<username>` and `<password>` with your MongoDB credentials.

---

## Usage

### Candidate Workflow

1. Candidates sign up via the frontend.
2. They upload their resume (handled by the frontend and stored via Cloudinary).
3. Resumes are sent to the backend for parsing and storage in MongoDB.

### Recruiter Workflow

1. Recruiters query the system for candidates matching specific job criteria (e.g., "React developer with 3+ years of experience").
2. The backend uses semantic similarity to rank candidates and returns a list of matching user IDs.

---

## Project Structure

```plaintext
purity-ai/
├── frontend/                  # Next.js app for frontend
│   └── ...                    # UI components, pages, and styles
├── backend/                   # Python backend for AI processing
│   ├── app/                   # Main application code
│   │   ├── main.py            # FastAPI app entry point
│   │   ├── routes/            # API routes
│   │   │   ├── resume.py      # Resume upload and parsing endpoint
│   │   │   ├── search.py      # Candidate search endpoint
│   │   ├── models/            # Database models
│   │   │   ├── candidate.py   # MongoDB operations
│   │   ├── utils/             # Utility functions
│   │   │   ├── resume_parser.py # Resume parsing logic
│   │   │   ├── embeddings.py  # Semantic similarity logic
│   ├── requirements.txt       # Python dependencies
│   └── .env                   # Environment variables
└── README.md                  # Project documentation
```

---

## Backend API Endpoints

### 1. **Parse and Store Resume**

**Endpoint**: `POST /api/resume/`  
**Request Body**:
```json
{
    "userId": "user123",
    "resume_url": "https://example.com/path/to/resume.pdf"
}
```
**Response**:
```json
{
    "message": "Resume parsed and stored successfully",
    "candidate_id": "64fb876e5a1e9c001cb9d8c5"
}
```

---

### 2. **Search Candidates**

**Endpoint**: `GET /api/search/`  
**Query Parameters**:
- `query` (string): The recruiter’s search criteria.
- `top_k` (integer): Number of top candidates to return (optional, defaults to 3).

**Response**:
```json
{
    "query": "React developer",
    "userIds": ["user123", "user456"]
}
```

---

## AI Functionality

- **Resume Parsing**:
  - Extracts name, email, phone number, skills, experiences, and projects using `spaCy` and custom logic.
- **Semantic Search**:
  - Uses `Sentence Transformers` to compute embeddings for recruiter queries and candidate data for similarity ranking.

---

## Contributing

We welcome contributions! Follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit changes and push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
4. Open a pull request in the main repository.

---

## License

This project is licensed under the MIT License.

---

## Contact

For questions or suggestions, please reach out to [Your Email](mailto:your-email@example.com).

---

Let me know if you need further customization or clarification!