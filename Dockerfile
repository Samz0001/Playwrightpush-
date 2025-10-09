# ✅ Use official Playwright image (includes Node, npm, browsers)
FROM mcr.microsoft.com/playwright:v1.48.2-jammy

# Set working directory
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the project files
COPY . .

# Install all Playwright browsers + dependencies
RUN npx playwright install --with-deps

# Optional: expose HTML report
EXPOSE 9323

# Run Playwright tests automatically when container starts
CMD ["npx", "playwright", "test", "--reporter=html"]

######