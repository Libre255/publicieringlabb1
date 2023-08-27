FROM node:alpine AS development
WORKDIR /frontendapp
COPY ./package.json /frontendapp
RUN npm i
COPY . .
CMD ["npm", "start"]