import re
import csv
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import math
plt.close("all")

days = []
predictedValues = []
filename = "skinHistory.txt"
def readFile(filename):
	counter = 1
	f = open("skinHistory.txt")
	string = re.findall("\[(.*?)\]", f.read())
	#print(x)
	for i in string:
		#print(i)
		x = i.split(',')
		dayParts = x[0].split()
		if dayParts[0][1:] == "Jan":
			month = "1"
		if dayParts[0][1:] == "Feb":
			month = "2"
		if dayParts[0][1:] == "Mar":
			month = "3"
		if dayParts[0][1:] == "Apr":
			month = "4"
		if dayParts[0][1:] == "May":
			month = "5"
		if dayParts[0][1:] == "Jun":
			month = "6"
		if dayParts[0][1:] == "Jul":
			month = "7"
		if dayParts[0][1:] == "Aug":
			month = "8"
		if dayParts[0][1:] == "Sep":
			month = "9"
		if dayParts[0][1:] == "Oct":
			month = "10"
		if dayParts[0][1:] == "Nov":
			month = "11"
		if dayParts[0][1:] == "Dec":
			month = "12"

		day = dayParts[1]
		year = dayParts[2]
		date = day+"/"+month+"/"+year 
		price =float(x[1])
		amount = x[2][1:-1]
		days.append([counter,date,price,amount,0,0,0,0])
		counter+=1
def makeAverages(days):
	for i in range(0, len(days)):
		total = 0
		if(i<=7):
			num = i;
			j=0;
			while(j<num):
				total += days[i][2]
				j+=1
			#ask about this one
			avg = total/(days[i][0])
			days[i][4]=avg
		elif((i+8)>len(days)):
			for l in range(i,len(days)):
				total +=days[l][2]
			avg = total/(len(days)-days[i][0]+1)
			days[i][4] =avg
		else:
			for k in range(1,8):
				total += days[i-k][2]
				total += days[i+k][2]
			total += days[i][2]
			avg = total/15
			days[i][4] = avg
def makeAverages30(days):
	
	for i in range(0, len(days)):
		total = 0
		if(i<=15):
			num = i;
			j=0;
			while(j<num):
				total += days[i][2]
				j+=1
			#Ask about this one
			avg = total/(days[i][0]+1)
			days[i][5]=avg
		elif((i+16)>len(days)):
			for l in range(i,len(days)):
				total +=days[l][2]
			avg = total/(len(days)-days[i][0]+1)
			days[i][5] =avg
		else:
			count = 1
			for k in range(1,16):
				total += days[i-k][2]
				total += days[i+k][2]
			total += days[i][2]
			avg = total/31
			days[i][5] = avg
def writeFile(days):
	with open('skinsData.csv', mode='w',newline = '') as skins_file:
		skins_writer = csv.writer(skins_file, delimiter=',', quotechar=' ', quoting=csv.QUOTE_MINIMAL)
		skins_writer.writerow(["Number","Date","Price","Amount","15DayAverage","31DayAverage","Trend","predictionValues"])
		for i in days:
			skins_writer.writerow([i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7]])

def makeGraph():
	fig, ax = plt.subplots()
	fig1, ax1 = plt.subplots()
	fig2, ax2 = plt.subplots()
	df1 = pd.read_csv("skinsData.csv")
	# df2 = pd.read_csv("skinsData.csv")
	# df3 = pd.read_csv("skinsData.csv")
	#type(df)
	# pd.set_option("display.max.columns", None)
	# print(df.head())
	#df1.plot("Date","Price")
	df1.plot("Date","Price", ax = ax)
	df1.plot("Date","15DayAverage", ax = ax)
	df1.plot("Date","31DayAverage", ax = ax)
	df1.plot("Date","Price",ax = ax1)
	df1.plot("Date","Trend",ax = ax1)
	#df1.iloc[::int(len(days)/10)*10, :].plot("Date","31DayAverage", ax = ax2)
	df1.iloc[::int(len(days)/10), :].plot("Date","31DayAverage", ax = ax2)
	plt.title("Trend Graph")
	plt.show()

def trendFunction():
	days[0][6] = days[5][5]
	for i in range(1,len(days)):
		days[i][6] = 0.9*days[i-1][6]+0.1*days[i][2]

def predictionGraph():
	interval = int(len(days)/10)
	for i in range(1,11):
		for j in range((i-1)*interval,i*interval):
			days[j][7] = days[i*interval][5]
	for i in range(interval*10,len(days)):
		days[interval*10+i][7] = days[10*interval][5]


readFile(filename)
makeAverages(days)
makeAverages30(days)
trendFunction()
#predictionGraph()
writeFile(days)
makeGraph()
# class dayData:
# 	def __init__(self,day,month,year,price,amount):
# 		self.day = day
# 		self.month = month
# 		self.year = year
# 		self.price = price
# 		self.amount = amount



	#days.append(dayData())
	#print(x[1])
	# day = i.split(",")[0].split(":")[0]
	# price = i.split(",")[1].strip()
	# amount = i.split(",")[2].strip()
	#print(price)

		#days.append()


