from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)



@app.route('/api/v1/audioAnalysis', methods=["POST"])
def audioExtract():
    audio_file = request.files['audioFile']
    # Process the audio file here
    return 'Audio file uploaded successfully!'