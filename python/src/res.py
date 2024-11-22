file_name = "/home/parth/code/dev/nextjs/purity_ai/python/src/test_resume.pdf"

from pyresparser import ResumeParser

data = ResumeParser("/path/to/resume/file").get_extracted_data()

print(data)
