from app import db


class Person(db.Model):
  __tablename__ = 'Person'

  name = db.Column(db.String())
  email = db.Column(db.String())
  password = db.Column(db.String())
  personid = db.Column(db.Integer, primary_key=True)

  def __init__(self, name, email, password):
    self.name = name
    self.email = email
    self.password = password
