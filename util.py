import librosa as lr
import matplotlib.pyplot as plt
import pandas as pd

def spectrogram(S_db):
    fig, ax = plt.subplots(figsize=(15,5))
    img = lr.display.specshow(S_db, x_axis="time", y_axis="log", ax=ax)
    fig.colorbar(img, ax=ax, format=f'%0.2f')
    plt.show()

def raw(y):
    pd.Series(y).plot(figsize=(10,5))
    plt.show()