# Needs to be updated
FROM node:boron
#create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY app/ /usr/src/app/
EXPOSE 8080
RUN npm install
CMD ["npm", "start"]
