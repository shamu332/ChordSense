from flask import Flask, request
from flask_cors import CORS
import util as util
import numpy as np
import librosa

app = Flask(__name__)
CORS(app)



@app.route('/api/v1/audioAnalysis', methods=["POST"])
# '''
# Returns array where row is a frame that include frequency intensities for each mel band
# '''
def load():
    y, sr = librosa.load(request.file)

    y_trimmed, _ = librosa.effects.trim(y)

    S = librosa.feature.melspectrogram(y=y, sr=sr, n_mels=256)
    S_db = librosa.amplitude_to_db(S, ref=np.max)
    S_db = librosa.util.normalize(S_db, axis=1)
    ## DEBUG
    # util.raw(y_trimmed)
    # util.spec(S_db)
    
    S_db_a = np.mean(S_db.T, axis=0)
    return S_db_a, sr

'''
Returns frequency bands of a mel-spectrogram
Useful for headers
'''
def frequencies(S, sr):
    return librosa.core.mel_frequencies(n_mels=S.shape[0], fmin=0, fmax=sr/2)

# S, sr = load("./piano_triads/A_dim_2_0.wav")

# # Access the frequencies of n_mels
# frequencies = frequencies(S, sr)