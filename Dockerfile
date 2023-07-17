# Use a base image with Node.js and necessary build tools
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the entire app directory to the container
COPY . .

# Set the necessary environment variables
ENV NODE_ENV=production

# Build your React Native app
RUN yarn run build

# Expose the necessary ports
EXPOSE 3000

# Start your React Native app
CMD ["yarn", "start"]
