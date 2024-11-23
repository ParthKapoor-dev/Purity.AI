# Purity AI - Hiring Automation Platform

Purity AI is an AI-driven hiring automation platform designed to streamline recruitment by evaluating candidates based on their resumes, experience, and answers to specific questionnaires. With the help of AI, recruiters can search for candidates based on specific job requirements and receive ranked results of suitable matches. This project leverages Next.js/React.js for the full-stack web framework and Python for AI processing.

## Features

- **Candidate Profile Management**: Candidates can create an account, upload their resume, and answer a questionnaire.
- **Automated Resume Parsing**: Extracts key information from resumes using an Applicant Tracking System (ATS).
- **Questionnaire-Based Evaluation**: Allows candidates to complete aptitude and experience-based questionnaires.
- **Recruiter Search**: Recruiters can query candidates based on job-specific criteria and experience, with ranked results based on candidate suitability.
- **Automatic Notifications**: Monthly or periodic reminders for candidates to update their profiles.

## Technologies Used

- **Frontend**: Next.js, React
- **Backend**: Python (AI processing), REST API endpoints
- **Database**: TBD (e.g., PostgreSQL, MongoDB)
- **AI/ML Libraries**: scikit-learn, spaCy (for resume parsing), Pandas
- **Hosting and Deployment**: Docker (for containerization), Vercel/Heroku/AWS (for production deployment)

## Getting Started

### Prerequisites

- Node.js and npm
- Python 3.x and pip
- Virtual environment setup (recommended)
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
   - Start the backend server (update port configurations if necessary):
     ```bash
     python app.py
     ```

4. **Environment Variables**

   Create a `.env` file in both `frontend` and `backend` directories with the necessary environment variables. A sample of required variables can be found in `.env.example` (add as needed based on your configuration).

## Usage

- **Candidate Workflow**: Candidates can create an account, upload a resume, and complete a questionnaire. They’ll receive periodic reminders to update their information.
- **Recruiter Workflow**: Recruiters can use a chat-like interface to enter specific job requirements. Purity AI will process the query and return ranked candidates based on fit.

## Project Structure

```plaintext
purity-ai/
├── frontend/                  # Next.js app for frontend
│   └── ...                    # UI components, pages, and styles
├── backend/                   # Python backend for AI processing
│   ├── env/                   # Virtual environment (not tracked in Git)
│   ├── app.py                 # Main backend server file
│   ├── model/                 # Folder for AI models and resume parsing
│   └── requirements.txt       # Python dependencies
└── README.md                  # Project documentation
```

## AI Functionality

- **Resume Parsing**: Uses spaCy to extract skills, experiences, and key phrases from resumes.
- **Candidate Ranking**: Based on a scoring algorithm using scikit-learn, candidates are ranked on a query-specific basis.

## Contributing

We welcome contributions! Please follow the steps below:

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

## License

This project is licensed under the MIT License.

## Contact

For questions or suggestions, please reach out to [Your Email](mailto:your-email@example.com).
