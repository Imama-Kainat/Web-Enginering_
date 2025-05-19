FROM PYTHON:3.10
WORKDIR /app
COPY . .
RUN  pip install fastapi pymongo uvicorn

EXPOSE 3002
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "3002"]