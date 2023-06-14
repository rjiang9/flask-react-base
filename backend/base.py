from flask import Flask

api = Flask(__name__)

@api.route('/')
def my_home():
    return 'HOME page landed' 

@api.route('/profile')
def my_profile():
    return {
            "name": 'changeli jiang',
            "about_me": 'I am hiking on weekends'
            }
