# Stage 1: Build aplikasi Angular
FROM node:20.19.0 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Stage 2: Serve aplikasi dengan Node.js
FROM node:20.19.0-alpine

WORKDIR /app

# Copy package.json server
COPY server/package.json ./
RUN npm install

# Copy build output dari stage sebelumnya
COPY --from=build /app/dist/fe-public /app/public

# Copy server.js
COPY server.js ./

EXPOSE 8080

CMD ["node", "server.js"]