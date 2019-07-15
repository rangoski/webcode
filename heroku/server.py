import flask
import sys
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import pandas as pd
import datacommons
import plotly
import plotly.plotly as py
import plotly.figure_factory as ff
import numpy as np
import csv
import math
import json

app = flask.Flask(__name__)

@app.route('/')
def hello():
    return "Hello World!"

@app.route('/data',methods=("GET","POST"))
def hello_get():
	name = ''
	if flask.request.method == 'POST':
		if 'name' in flask.request.json:
			name = flask.request.json['name']

	# if (name != 'noload'):
	# 	plotly.tools.set_credentials_file(username='cvvlahakis', api_key='jHHC0OnEpmjMlSR4HJUW')
	# 	df_sample = pd.read_csv('./ob2.csv')

	# 	# with open('./ob.csv') as csv_file:
	# 	# 		csv_reader = csv.reader(csv_file, delimiter=",")
	# 	# 		f = open('ob2.csv', 'w')
	# 	# 		for i, row in enumerate(csv_reader):
	# 	# 			final_row = row
	# 	# 			if i == 0:
	# 	# 				final_row.append('FIPS')
	# 	# 			else:
	# 	# 				state = row[0]
	# 	# 				county = row[1]
	# 	# 				with open('./US_FIPS_Codes.csv') as csv_file2:
	# 	# 					csv_reader2 = csv.reader(csv_file2, delimiter=",")
	# 	# 					for j, row2 in enumerate(csv_reader2):
	# 	# 						state2 = row2[0]
	# 	# 						county2 = row2[1]
	# 	# 						if (state == state2):
	# 	# 							if (county == county2):
	# 	# 								final_row.append(str(row2[2] + row2[3]))
	# 	# 			if (final_row[1]):
	# 	# 				output = ''
	# 	# 				for x in final_row:
	# 	# 					output += x + ','
	# 	# 				output = output[:-1]
	# 	# 				output += '\n'
	# 	# 				f.write(output)

	# 	colorscale = ["#f7fbff","#ebf3fb","#deebf7","#d2e3f3","#c6dbef","#b3d2e9","#9ecae1",
	# 	              "#85bcdb","#6baed6","#57a0ce","#4292c6","#3082be","#2171b5","#1361a9",
	# 	              "#08519c","#0b4083","#08306b"]
	# 	endpts = list(np.linspace(1, 12, len(colorscale) - 1))
	# 	fips = df_sample['FIPS'].tolist()
	# 	values = df_sample['Female obesity prevalence, 2011* (%)'].tolist()
	# 	fips2 = []
	# 	values2 = []
	# 	for i, x in enumerate(fips):
	# 		if (not math.isnan(x)):
	# 			fips2.append(int(x))
	# 			if (not math.isnan(values[i])):
	# 				values2.append(int(values[i]))
	# 	fips = fips2
	# 	values = values2

	# 	fig = ff.create_choropleth(
	# 	    fips=fips, values=values,
	# 	    show_hover=True, centroid_marker={'opacity': 0},
	# 	    asp=2.9, title='Female obesity prevalence, 2011 (%)',
	# 	    legend_title='% Female obesity prevalence, 2011'
	# 	)
	# 	py.plot(fig, filename='choropleth_california_and_surr_states_outlines23')

	# Create the DataCommons client
	dc = datacommons.Client()

	data = dc.read_dataframe('cdc_cities-81872570')
	
	# Prevalence of obesity
	data = dc.get_populations(pd_table=data,
	                          seed_col_name='City',
	                          new_col_name='Person/Obesity',
	                          population_type='Person',
	                          max_rows=500,
	                          unhealthyBehavior='CDC_Obesity')
	data = dc.get_observations(pd_table=data,
	                           seed_col_name='Person/Obesity',
	                           new_col_name='Obesity',
	                           observation_date='2015',
	                           measured_property='prevalence',
	                           max_rows=500)

	# Prevalence of adult smokers
	data = dc.get_populations(pd_table=data,
	                          seed_col_name='City',
	                          new_col_name='Person/Smoking',
	                          population_type='Person',
	                          max_rows=500,
	                          unhealthyBehavior='CDC_Smoking')

	data = dc.get_observations(pd_table=data,
	                           seed_col_name='Person/Smoking',
	                           new_col_name='Smoking',
	                           observation_date='2015',
	                           measured_property='prevalence',
	                           max_rows=500)

	#NoPhysicalActivity
	data = dc.get_populations(pd_table=data,
	                          seed_col_name='City',
	                          new_col_name='Person/NoPhysicalActivity',
	                          population_type='Person',
	                          max_rows=500,
	                          unhealthyBehavior='CDC_NoPhysicalActivity')

	data = dc.get_observations(pd_table=data,
	                           seed_col_name='Person/NoPhysicalActivity',
	                           new_col_name='NoPhysicalActivity',
	                           observation_date='2015',
	                           measured_property='prevalence',
	                           max_rows=500)

	# All population
	data = dc.get_populations(pd_table=data,
	                          seed_col_name='City',
	                          new_col_name='Person/Total',
	                          population_type='Person',
	                          max_rows=500)

	# Population count
	data = dc.get_observations(pd_table=data,
	                           seed_col_name='Person/Total',
	                           new_col_name='Population',
	                           observation_date='2015',
	                           measured_property='count',
	                           max_rows=500)

	print(data.head(5))

	obesity = data['Obesity'].to_numpy()[1:].tolist()
	for _position, _value in enumerate(obesity):
		try:
			_new_value = float(_value)
		except ValueError:
			_new_value = 0.0
		obesity[_position] = _new_value

	smoking = data['Smoking'].to_numpy()[1:].tolist()
	for _position, _value in enumerate(smoking):
		try:
			_new_value = float(_value)
		except ValueError:
			_new_value = 0.0
		smoking[_position] = _new_value

	physical = data['NoPhysicalActivity'].to_numpy()[1:].tolist()
	for _position, _value in enumerate(physical):
		try:
			_new_value = float(_value)
		except ValueError:
			_new_value = 0.0
		physical[_position] = _new_value

	cities = data['CityName'].to_numpy()[1:].tolist()
	for _position, _value in enumerate(cities):
		try:
			_new_value = str(_value)
		except ValueError:
			_new_value = ''
		cities[_position] = _new_value

	count = data['Population'].to_numpy()[1:].tolist()
	for _position, _value in enumerate(count):
		try:
			_new_value = float(_value)
		except ValueError:
			_new_value = ''
		count[_position] = _new_value

	res = json.dumps(obesity) + '*' + json.dumps(smoking) + '*' + json.dumps(physical) + '*' + json.dumps(cities) + '*' + json.dumps(count)
	return res

if __name__ == '__main__':
    app.run()