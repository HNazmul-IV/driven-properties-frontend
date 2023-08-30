# Use an existing Node.js image as a base
FROM node:16

# Set the working directory in the container to /app
WORKDIR /app

RUN npm i svelte
# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the files to the container
COPY . .

RUN rm -rf /app/node_modules/vite/dist/client/client.mjs
COPY client.mjs /app/node_modules/vite/dist/client
# Specify the command to run when the container starts
CMD [ "npm", "run", "dev", "--", "--host"]
