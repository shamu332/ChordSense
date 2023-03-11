from requests import request
from flask import Flask

app = Flask(__name__)

@app.route('/api/v1/audioAnalysis', methods=["POST"])
def audioExtract():
    filetouse = request.form['file']
    file_name = request.form['fileName']
    print(filetouse + '\n')
    print(file_name + '\n')