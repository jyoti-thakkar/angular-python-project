from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from flask_sqlalchemy import SQLAlchemy
import json
import models

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://postgres:Postgres@12345@localhost:5432/MyDatabase"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)




@app.route("/", methods=['GET', 'POST'])
def angular():

  if request.method == 'POST':
    print("post method")
    username = request.form.get('name')
    email = request.form.get('email')
    password = request.form.get('password')

    person = models.Person(username, email, password)
    db.session.add(person)
    db.session.commit()
    return jsonify({'text': 'Hello World!'})



if __name__ == '__main__':
  app.run(debug=True)
