from flask import Flask
from flask import render_template

import os

app = Flask(__name__)


@app.route('/')
@app.route('/welcome')
def showLanding():
	return render_template('index.html')


@app.route('/login')
def showLogin():
	return 'This is the login page!'


@app.route('/adoptions')
def showAdoptions():
	return 'This is the adoptions page!'


@app.route('/<int:user_id>/profile')
def showProfile(user_id):
	return 'This is the profile for user # ' + str(user_id)


@app.route('/<int:user_id>/pets')
def showPets(user_id):
	return 'This is the pets page for user # ' + str(user_id)


if __name__ == '__main__':
	app.secret_key = 'some_secret_key'
	port = int(os.environ.get('PORT', 5000))
	app.debug = True
	app.run(host='0.0.0.0', port=port)