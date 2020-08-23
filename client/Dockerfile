
FROM node:12-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD npm start
EXPOSE 3000

# docker container run -p 8080:3000 huureenarts:latest