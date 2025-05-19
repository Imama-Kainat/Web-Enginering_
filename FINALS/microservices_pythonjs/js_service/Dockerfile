FROM node:18
WORKDIR /app
COPY . .
RUN npm install express mongoose
EXPOSE 3001
CMD ["node", "server.js"]