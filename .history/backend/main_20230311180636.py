from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Index Page'

@app.route('/api')
def hello():
    return '<p> Displayed here <p>'