from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Index Page'

@app.route('http://127.0.0.1:5000/hello')
def hello():
    return 'Hello, World'