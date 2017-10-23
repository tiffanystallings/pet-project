from flask import Flask

import os

app = Flask(__name__)


@app.route('/')
@app.route('/welcome')
def showLanding():
	return 'This is the landing page!'

if __name__ == '__main__':
	app.secret_key = 'some_secret_key'
	port = int(os.environ.get('PORT', 5000))
	app.debug = True
	app.run(host='0.0.0.0', port=port)