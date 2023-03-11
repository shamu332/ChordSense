from flask import Flask

app = Flask(__name__)

@app.route("http:/127.0.0.1:5000/api/v1/audioAnalysis")
def hello_world():
    return "<p>Hello, World!</p>"