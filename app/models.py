from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine

Base = declarative_base()

class User(Base):
	__tablename__ = 'user'
	id = Column(Integer, primary_key=True)
	email = Column(String(250), nullable=False)
	name = Column(String(80), nullable=False)
	username = Column(String(80), nullable=False)


class Pet(Base):
	__tablename__ = 'pet'
	id = Column(Integer, primary_key=True)
	name = Column(String(80), nullable=False)
	user_id = Column(Integer, ForeignKey('user.id'))
	user = relationship(User)
	gender = Column(String(10))
	species = Column(String(10))
	genus = Column(String(10))
	level = Column(Integer)
	image = Column(String(80))

	engine = create_engine('sqlite:///aneemos.db')
	Base.metadata.create_all(engine)