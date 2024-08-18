from pydub import AudioSegment

# You can perform further operations on the audio_segment here
import sounddevice as sd
from scipy.io.wavfile import write
import torch
import torchaudio
from transformers import Wav2Vec2ForCTC, Wav2Vec2Processor
import numpy as np
from pydub import AudioSegment
import requests
import json
import spacy
import csv

# Load environment variables from .env file
load_dotenv()

# Access the HF_TOKEN and SECRET_KEY
hf_token = os.getenv("HF_TOKEN")
secret_key = os.getenv("SECRET_KEY")

# Use hf_token for authentication if needed

# Load the model and processor
model_name = "facebook/wav2vec2-base-960h"
processor = Wav2Vec2Processor.from_pretrained(model_name)
model = Wav2Vec2ForCTC.from_pretrained(model_name)

# Load your uploaded audio file using pydub
file_name = 'processed_audio.wav'
audio = AudioSegment.from_wav(file_name)

# Convert pydub audio to numpy array
speech_array = np.array(audio.get_array_of_samples(), dtype=np.float32)
sampling_rate = audio.frame_rate

# Normalize the audio array
speech_array = speech_array / np.iinfo(np.int16).max

# Ensure the audio is mono
if audio.channels > 1:
    speech_array = speech_array.reshape((-1, audio.channels)).mean(axis=1)

# Resample to 16000 Hz if necessary
if sampling_rate != 16000:
    from scipy.signal import resample
    speech_array = resample(speech_array, int(16000 * len(speech_array) / sampling_rate))
    sampling_rate = 16000

# Process the audio file
input_values = processor(speech_array, sampling_rate=sampling_rate, return_tensors="pt").input_values

# Perform the transcription
with torch.no_grad():
    logits = model(input_values).logits

# Decode the predicted ids to text
predicted_ids = torch.argmax(logits, dim=-1)
transcription = processor.decode(predicted_ids[0])

print("Transcription: ", transcription)
# Example API request (use your own request method and URL as necessary)
url = "http://localhost:11434/api/generate"
data = {
    "model": "gemma2:latest",
    "prompt": transcription + " - correct this if there are spelling errors return only the corrected text",
    "stream": False
}

response = requests.post(url, json=data)

# Parse the JSON response
response_json = response.json()

# Extract the relevant response content (ignore the metadata)
model_response = response_json.get("response", "No response found")

# Print the cleaned response
print("Model Response:", model_response)

model_response = transcription

# Load the small English model in spaCy
nlp = spacy.load("en_core_web_sm")

transcription = "This is not okay"

# Define the "okay" words lexicon
okay_words = set([
    "okay", "all right", "working", "good", "fine", "no issues",
    "everything is okay", "all clear", "no problem", "in order",
    "smooth", "operational", "functioning", "on track", "intact", 
    "secure", "stable", "sound"
])

# Define a simple negation lexicon
negation_words = set(["not", "no", "never", "none", "nobody", "nothing"])

# Process the transcription with spaCy
doc = nlp(transcription.lower())

# Tokenize the transcription and check for negation and okay words
tokens = [token.text for token in doc]
contains_okay_word = any(word in okay_words for word in tokens)
contains_negation = any(word in negation_words for word in tokens)


# Analyze the response based on lexicons
if contains_negation and contains_okay_word:
    analysis_result = "The statement might be negative despite containing 'okay' words."
    label = 1
elif contains_okay_word:
    analysis_result = "The statement is positive."
    label = 0
else:
    analysis_result = "The statement is negative or unclear."
    label = 1

# Print the analysis result
print("Analysis Result:", analysis_result)
print(label)

import os
from dotenv import load_dotenv





import psycopg2
from psycopg2 import sql

# Database connection credentials
connection_params = {
    "user": "postgres.keqffvaytvbaqniavqtg",
    "host": "aws-0-us-east-1.pooler.supabase.com",
    "database": "postgres",
    "password": "9ChJhmA5BIkZUvr1",
    "port": 6543,  # Default port for Supabase Postgres
    "sslmode": "require"
}

try:
    # Establish a connection to the PostgreSQL database
    connection = psycopg2.connect(**connection_params)

    # Create a cursor object to interact with the database
    cursor = connection.cursor()

    # Example query
    cursor.execute("SELECT NOW();")

    # Fetch and print the result of the query
    result = cursor.fetchone()
    print("Current Time:", result)

except Exception as e:
    print("Error connecting to the database:", e)

finally:
    # Always close the cursor and connection to free up resources
    if cursor:
        cursor.close()
    if connection:
        connection.close()