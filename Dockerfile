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

# Install Express untuk server sederhana
RUN npm install -g express compression

# Copy build output dari stage sebelumnya
COPY --from=build /app/dist/[nama-folder-output-angular] /app/public

# Copy server.js
COPY server.js /app/server.js

EXPOSE 8080

CMD ["node", "server.js"]