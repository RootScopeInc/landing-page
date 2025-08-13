# Stage 1: Build React App
FROM node:22.6-alpine AS builder

# Set working directory
WORKDIR /app

# Accept build arguments
ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the entire project
COPY . .

# Build the project
RUN npm run build

# Stage 2: Serve Built App Using socialengine/nginx-spa
FROM socialengine/nginx-spa:latest

# Set working directory
WORKDIR /app

# Copy built React app from builder stage
COPY --from=builder /app/.next /app

# Expose port 80 for serving the frontend
EXPOSE 80
