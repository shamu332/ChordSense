import util
import numpy as np
import librosa as lr

'''
Returns array where row is a frame that include frequency intensities for each mel band
'''
def extract_frequency(file):
    y, sr = lr.load(file)

    y, _ = lr.effects.trim(y)

    S = lr.feature.melspectrogram(y=y, sr=sr, n_mels=256)
    S_db = lr.amplitude_to_db(S, ref=np.max)

    S_db = S_db.T
    S_db = lr.util.normalize(S_db, axis=1)

    S_db_a = np.mean(S_db, axis=0)

    ## DEBUG
    # util.raw(y_trimmed)
    # util.spec(S_db)
    
    return S_db_a, sr

def extract_chroma(file):
    # Load audio file (or alternatively, you can use librosa to load audio from a file)
    y, sr = lr.load(file)

    y, _ = lr.effects.trim(y)

    # Extract chroma features
    chroma = lr.feature.chroma_stft(y=y, sr=sr)

    # Transpose chroma matrix to match the format used by scikit-learn and other libraries
    chroma = chroma.T

    # Normalize chroma features (optional)
    chroma = lr.util.normalize(chroma, axis=0)

    # Print shape of chroma matrix (number of frames x number of chroma bands)
    chroma_a = np.mean(chroma, axis=0)
    return chroma_a

'''
Returns frequency bands of a mel-spectrogram
Useful for headers
'''
def frequencies(S, sr):
    return lr.core.mel_frequencies(n_mels=S.shape[0], fmin=0, fmax=sr/2)

# S, sr = load("./piano_triads/A_dim_2_0.wav")

# # Access the frequencies of n_mels
# frequencies = frequencies(S, sr)