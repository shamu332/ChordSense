from flask import Flask

app = Flask(__name__)

@app.route('/api/v1/audioAnalysis')
def audioGet():
    return {"Hello": "World"}