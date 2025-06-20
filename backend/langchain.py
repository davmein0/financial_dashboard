import os
from dotenv import load_dotenv
from langchain import Langchain

# Get API key from config.env
load_dotenv()
API_KEY = os.getenv("GEMINI_API_KEY")

# Initialize Langchain with the Gemini API key
lc = Langchain(api_key=API_KEY)

# Confirm connection
status = lc.check_connection()
print("Connection to Gemini:", status)