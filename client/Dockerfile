# FROM node:latest

# # Set up environment
# ENV TERM=xterm-256color
# ENV PROJECT_NAME api
# ENV PROJECT_ROOT /opt/api

# # Install dependencies
# RUN mkdir -p /tmp/$PROJECT_NAME
# ADD package.json /tmp/$PROJECT_NAME/package.json
# RUN cd /tmp/$PROJECT_NAME/ && npm install
# RUN mkdir -p $PROJECT_ROOT
# RUN cp -a /tmp/$PROJECT_NAME/node_modules $PROJECT_ROOT
# RUN npm install -g sequelize-cli

# # Create app directory
# WORKDIR $PROJECT_ROOT

# # Bundle app source
# COPY . $PROJECT_ROOT
# ARG environment
# COPY ./constants.js.${environment:-local} $PROJECT_ROOT/src/config/constants.js
# COPY ./version.yaml $PROJECT_ROOT/public/version.yaml

# CMD npm start

# EXPOSE 3000

#################################

 
# FROM node:10-alpine

# RUN npm install webpack -g

# ENV PROJECT_ROOT /opt/api

# # Create app directory
# WORKDIR $PROJECT_ROOT

# # Bundle app source
# COPY . $PROJECT_ROOT

# RUN ["npm", "install"]
# EXPOSE 3000
# RUN ["npm", "run", "build"]


###################################

# Use a lighter version of Node as a parent image
FROM node:10-alpine
# Set the working directory to /client
WORKDIR /client
# install dependencies
RUN npm install
# Copy the current directory contents into the container at /client
COPY . /client
# Make port 3000 available to the world outside this container
EXPOSE 3000
# Run the app when the container launches
CMD ["npm", "start"]
