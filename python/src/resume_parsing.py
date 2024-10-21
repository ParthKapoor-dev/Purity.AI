import spacy
import pdfplumber

def extract_text_from_pdf(file_path):
    text = ""
    with pdfplumber.open(file_path) as pdf:
        for page in pdf.pages:
            text += page.extract_text() + "\n"
    return text

nlp = spacy.load("en_core_web_sm")

def extract_entities(text):
    doc = nlp(text)
    entities = {"skills": [], "job_titles": [], "experience": []}
    
    for ent in doc.ents:
        if ent.label_ == "ORG":
            entities["job_titles"].append(ent.text)
        elif ent.label_ == "DATE":
            entities["experience"].append(ent.text)
        # Add more custom extraction rules here
    return entities
