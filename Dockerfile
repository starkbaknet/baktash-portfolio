# Use Node.js as base image
FROM node AS builder
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the app
COPY . .

# Build Next.js app
RUN npm run build

# Production image
FROM node
WORKDIR /app

# Copy built app from builder stage
COPY --from=builder /app ./

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "run", "start"]
