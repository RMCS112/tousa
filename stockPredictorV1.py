import yfinance as yf
import pandas as pd
from sklearn import svm
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from matplotlib import pyplot as plt

msft = yf.Ticker("MSFT")

msftHistory = msft.history('120d')['Close']

bestAccuracy = -0.1
for i in range (3):
    for j in range(10000):
        halfIndex = int(len(msftHistory)/2)
        X_train, X_test, y_train, y_test = train_test_split(msftHistory[0:halfIndex],msftHistory[halfIndex:])


        model = LinearRegression()
        model.fit(X_train.values.reshape(-1,1), y_train.values)

        predictions = model.predict(X_test.values.reshape(-1,1))

        correctPreds = 0

        for pred in predictions:

            # enumerate instead

            i = list(predictions).index(pred)
            if pred < y_test.iloc[i]+5 and pred > y_test.iloc[i]-5 :
                correctPreds += 1

        accuracy = correctPreds/len(list(predictions))

        if accuracy > bestAccuracy:
            bestModel = model
            bestAccuracy = accuracy

    print(f"\n|\n\n\n\n\n\n|\n\nClose preds: {bestAccuracy}")

    plt.plot(range(len(list(X_test.values))), predictions, color = 'r')
    plt.plot(range(len(list(X_test.values))), y_test, color = 'g')
    plt.show()

    nextDay = bestModel.predict(msft.history('1d')['Close'].values.reshape(-1,1))
    print(f'\n\n{nextDay}')