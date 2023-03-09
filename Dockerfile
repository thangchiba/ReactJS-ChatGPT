# Start with a small image of Node.js
FROM node:lts-alpine

# Create and set the working directory for the app
WORKDIR /app

# Copy package.json and package-lock.json into the container and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Copy the environment file into the container
COPY .env ./

# Build the React app for production
RUN npm run build

# Expose port 3000 so the app can be accessed from outside the container
EXPOSE 3000

# Set the command to start the app
CMD ["npm", "start"]