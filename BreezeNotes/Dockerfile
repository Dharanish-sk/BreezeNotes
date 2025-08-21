# use an official node runtime as a parent image

FROM node:22-alpine

# set the working directory in the container
WORKDIR /app

#copy package.json and package-lock.json to the working directory
COPY package*.json  .

# install dependencies
RUN npm install 

# # Copy Prisma schema before generating client
# COPY prisma ./prisma

# # Generate Prisma client
# RUN npx prisma generate


# Copy the rest if application code 

COPY . . 

# Expose the port the app runs on
EXPOSE 5000


# Start with npm script (regenerates client + runs migrations + starts server)
CMD ["npm", "./src/server.js"]

