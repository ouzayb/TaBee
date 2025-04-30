# 1️⃣ Build Stage: Install Dependencies & Build
FROM node:18 AS build
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# Copy source files and build
COPY . .
RUN npm run build

# 2️⃣ Runtime Stage: Serve with Node.js
FROM node:18-alpine
WORKDIR /app

# Copy built Next.js app from build stage
COPY --from=build /app ./

# Expose port 3000 (Next.js default)
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "start"]
