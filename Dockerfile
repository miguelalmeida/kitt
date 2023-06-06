# Base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
# RUN npm ci
RUN npm install -g ionic
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the Ionic app
RUN npm run build

# Expose the port for the Ionic app
EXPOSE 8100

# Set the default command to start the Ionic app
CMD [ "npm", "run", "serve" ]
