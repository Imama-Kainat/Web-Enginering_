FROM node:18

WORKDIR /app

COPY . .

# Install both required dependencies
RUN npm install express http-proxy-middleware

EXPOSE 3000

CMD ["node", "index.js"]
