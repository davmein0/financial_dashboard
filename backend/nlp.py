import os
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI

# Get API key from config.env
load_dotenv(dotenv_path="config.env")
API_KEY = os.getenv("GEMINI_API_KEY")
print(API_KEY)

# Initialize Langchain with the Gemini API key
llm = ChatGoogleGenerativeAI(api_key=API_KEY, model = "gemini-1.5-flash", temperature=0.2)

# Confirm connection
status = llm.check_connection()
print("Connection to Gemini:", status)