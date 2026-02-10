# CONCEPT: Containerization (FSD Electives)
# We use 'alpine' because it is small, barren, and harsh.
FROM node:18-alpine

# CONCEPT: Security / Environment
# We set the working directory to 'void'.
WORKDIR /void

# CONCEPT: Dependency Management
COPY package*.json ./
RUN npm install --omit=dev

# TRAP: The Immutable Codebase
COPY . .

# CONCEPT: Network Exposure (Port 5050)
EXPOSE 5050

# TRAP: The Command
# We do not "start". We only "exist".
CMD ["node", "index.js"]