from flask import Flask, request, jsonify
from pydub import AudioSegment
import io
import os

app = Flask(__name__)

# Define the directory to save uploaded files
UPLOAD_FOLDER = 'main'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/upload', methods=['POST'])
def upload_audio():
    if 'file' not in request.files:
        response = jsonify({"error": "No file part in the request"})
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response, 400

    file = request.files['file']

    if file.filename == '':
        response = jsonify({"error": "No file selected for uploading"})
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response, 400

    if file and file.filename.endswith('.wav'):
        # Save the file as 'newupload.wav'
        file_path = os.path.join(UPLOAD_FOLDER, 'newupload.wav')
        file.save(file_path)  # Save the file to the server

        response = jsonify({"message": "File uploaded successfully", "file_path": file_path})
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response, 200
    else:
        response = jsonify({"error": "Invalid file format. Please upload a .wav file"})
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response, 400

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=4000)