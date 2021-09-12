import requests

cookie = {'steamLoginSecure': '76561198981362836%7C%7CB12D17788C3E8FAF00F4445FD86F3D2D587B4B20','sessionId': 'e720a1da5ffb5f7f45f82668'}
params = {'country': 'au', 'currency': 1, 'appid': 730, 'market_hash_name': 'Falchion%20Case'}
#data = requests.get('http://steamcommunity.com/market/pricehistory', params=params)
data = requests.get('http://steamcommunity.com/market/pricehistory/?country=au&currency=1&appid=730&market_hash_name=Falchion%20Case', cookies=cookie);


#print('http://steamcommunity.com/market/pricehistory', params=params)
print(data.text)