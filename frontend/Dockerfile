FROM oven/bun:1-alpine AS development

WORKDIR /app

# Copy package files
COPY package.json bun.lockb* ./

# Install dependencies
RUN bun install

# Copy source code
COPY . .

# Expose port
EXPOSE 5173

# Default command (can be overridden in docker-compose)
CMD ["bun", "run", "dev", "--host"]

# Production build stage - Use Node.js for better Vite compatibility
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .

RUN npm run build

# Production serve stage
FROM nginx:alpine AS production

# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Add healthcheck
RUN apk add --no-cache wget

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
