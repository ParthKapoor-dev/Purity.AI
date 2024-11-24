import pdfplumber
import re
from nltk.corpus import stopwords
import phonenumbers
import spacy
# file_name = "/home/parth/code/dev/nextjs/purity_ai/python/src/test_resume.pdf"


# Load SpaCy model
nlp = spacy.load("en_core_web_sm")

def parse_resume(file_path: str):
    """
    Parse a resume from a PDF file.
    """
    try:
        with pdfplumber.open(file_path) as pdf:
            text = "\n".join([page.extract_text() for page in pdf.pages])

        # Extract details
        name = extract_name(text)
        email = extract_email(text)
        phone_number = extract_phone_number(text)
        skills = extract_skills(text)
        experiences = extract_experiences(text)
        projects = extract_projects(text)

        return {
            "name": name,
            "email": email,
            "phone_number": phone_number,
            "skills": skills,
            "experiences": experiences,
            "projects": projects,
        }

    except Exception as e:
        return {"error": str(e)}

# Helper functions here (extract_name, extract_email, extract_phone_number, etc.)




# Extract text from PDF
def extract_text_from_pdf(file_path):
    text = ""
    with pdfplumber.open(file_path) as pdf:
        for page in pdf.pages:
            text += page.extract_text()
    return text

# Extract name
def extract_name(text):
    doc = nlp(text)
    for ent in doc.ents:
        if ent.label_ == "PERSON":
            return ent.text
    return None

# Extract email
def extract_email(text):
    email_pattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
    emails = re.findall(email_pattern, text)
    return emails[0] if emails else None

# Extract phone number
def extract_phone_number(text):
    for match in phonenumbers.PhoneNumberMatcher(text, "IN"):  # "IN" for India
        return phonenumbers.format_number(match.number, phonenumbers.PhoneNumberFormat.INTERNATIONAL)
    return None

# Extract skills
def extract_skills(text):
    skills_section = text.split("Technical Skills")[-1]
    skills = re.findall(r"[a-zA-Z\+\#]+", skills_section)
    return list(set(skills))

# Extract experience
def extract_experiences(text):
    experiences = []
    experience_section = text.split("Experience")[-1].split("Projects")[0]
    experience_items = experience_section.strip().split("\n\n")
    for item in experience_items:
        experiences.append(item.strip())
    return experiences

# Extract projects
def extract_projects(text):
    projects = []
    project_section = text.split("Projects")[-1].split("Technical Skills")[0]
    project_items = project_section.strip().split("\n\n")
    for item in project_items:
        projects.append(item.strip())
    return projects

# Main parser function
def parse_resume(file_path):
    text = extract_text_from_pdf(file_path)
    if not text:
        return {"error": "Unable to extract text from the file"}
    
    return {
        "name": extract_name(text),
        "email": extract_email(text),
        "phone_number": extract_phone_number(text),
        "skills": extract_skills(text),
        "experiences": extract_experiences(text),
        "projects": extract_projects(text),
    }
