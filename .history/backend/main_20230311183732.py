from flask import Flask, request


app = Flask(__name__)

@app.route('/api/v1/audioAnalysis', methods=["POST"])
def audioExtract():
    audio_file = request.files['audioFile']
    # Process the audio file here
    return 'Audio file uploaded successfully!'