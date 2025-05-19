from fastapi import FastAPI
from pymongo import MongoClient

app=FastAPI()
client=MongoClient("mongodb://localhost:27017")
db=client.pythondb

app.get("/predict")
def predict():
    return {"result":"positive"}
