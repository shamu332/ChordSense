from flask import Flask, request
from flask_cors import CORS
import util as util
import numpy as np
import librosa as lr
from flask import send_file
import os

import audio
import matplotlib.pyplot as plt

from sklearn import svm
from sklearn.metrics import accuracy_score, confusion_matrix, ConfusionMatrixDisplay
from sklearn.model_selection import train_test_split


app = Flask(__name__)
CORS(app)



# '''
# Returns array where row is a frame that include frequency intensities for each mel band
# '''

@app.route('/api/v1/audioAnalysis', methods=["POST"])
def load():
    file = request.files['file']
    
    pred = routine(file)

    filename = "cute-beavers.png"  # Filename of the image file
    dir_path = os.path.dirname(os.path.realpath(__file__))  # Absolute path of the app directory
    file_path = os.path.join(dir_path, filename)  # Absolute path of the image file
    return pred

def load_model():
    if (os.path.exists('pianoX.npy') and os.path.exists('pianoY.npy')):
        print("Loaded from cache!")
        X = np.load("pianoX.npy")
        Y = np.load("pianoY.npy")
        return X, Y
    
    print("Reading audio files!")
    X = []
    Y = []
    # group files by chord
    for f in os.listdir('./piano_triads'):
        path = os.path.join('./piano_triads', f)

        chord, _ = os.path.splitext(f)
        chord = chord.split('_')
        chord = chord[0] + '-' + chord[1]

        X.append(audio.extract_chroma(path))
        Y.append(chord)

    np.save('pianoX.npy', X)
    np.save('pianoY.npy', Y)
    return X, Y

def routine(file):
    ## ML Begins
    X, Y = load_data()
    X_train, X_valid, Y_train, Y_valid = train_test_split(X, Y, test_size=0.80, random_state=0)

    # Train a SVM
    clf = svm.SVC(kernel='linear', C=8)
    clf.fit(X_train, Y_train)

    X_valid = audio.extract_chroma(file)

    # Evaluate the SVM on the test data
    Y_pred = clf.predict(X_valid)

    return Y_pred


def demo_routine():
    ## ML Begins
    X, Y = load_data()
    X_train, X_valid, Y_train, Y_valid = train_test_split(X, Y, test_size=0.33, random_state=0)

    # Train a SVM
    clf = svm.SVC(kernel='linear', C=8)
    clf.fit(X_train, Y_train)

    # Evaluate the SVM on the test data
    Y_pred = clf.predict(X_valid)

    return Y_pred

## STATS
# print(accuracy_score(Y_valid, Y_pred))
# fig, ax = plt.subplots(figsize=(20, 35))
# cm = ConfusionMatrixDisplay.from_predictions(Y_valid, Y_pred, display_labels=clf.classes_, ax=ax, colorbar=False)
# plt.savefig('cmatrix.png')