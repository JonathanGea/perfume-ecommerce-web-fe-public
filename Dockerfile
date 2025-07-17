# Stage 1: Build aplikasi Angular
FROM node:20.19.0 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

# Tambahkan log untuk melihat struktur direktori
RUN npm run build -- --configuration production && ls -la dist && ls -la dist/*

# Stage 2: Serve aplikasi dengan Node.js
FROM node:20.19.0-alpine

WORKDIR /app

# Buat package.json untuk server
RUN echo '{"name":"angular-server","version":"1.0.0","dependencies":{"express":"^4.18.2","compression":"^1.7.4"}}' > package.json

# Install dependencies untuk server
RUN npm install

# Copy build output dari stage sebelumnya - PASTIKAN PATH INI BENAR
# Untuk Angular 17+:
# COPY --from=build /app/dist/YOUR_PROJECT_NAME/browser /app/public
# Untuk Angular 15/16:
# COPY --from=build /app/dist/YOUR_PROJECT_NAME /app/public
# Untuk Angular versi lama:
# COPY --from=build /app/dist /app/public

# Gunakan wildcard untuk fleksibilitas (jika ragu dengan struktur)
COPY --from=build /app/dist/fe-public/browser /app/public
RUN find /app -type f -name "index.html" | xargs -I{} cp -r $(dirname {}) /app/public

# Copy server.js
COPY server.js /app/server.js

# Tambahkan debugging sebelum menjalankan server
CMD ["sh", "-c", "ls -la /app && ls -la /app/public || true && node server.js"]