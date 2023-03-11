from requests import request
from flask import Flask

app = Flask(__name__)

@app.route('/api/v1/audioAnalysis', methods=["POST"])
def audioExtract():
    file_name = request.form['fileName']
    print(file_name + '\n')