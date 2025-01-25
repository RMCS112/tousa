tickers = pd.read_html(
    'https://en.wikipedia.org/wiki/List_of_S%26P_500_companies')[0]

'''
sp500 = []
for ticker in tickers.Symbol:
    sp500.append(ticker)
'''

model = svm.SVR()
model.fit(list(trainHistory), list(resultHistory))
predictions = model.predict(list(testHistory))