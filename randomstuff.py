import yfinance as yf
import pandas as pd
from sklearn import svm
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from matplotlib import pyplot as plt

msft = yf.Ticker("MSFT")

msftHistory = msft.history('7d')['Close']
print(msftHistory)