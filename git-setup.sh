#!/bin/bash

# BrandSpec Git Setup Script for vonroflo account
# Usage: ./git-setup.sh <repository-name>

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 BrandSpec Git Setup Script${NC}"
echo "=================================="

# Check if repository name is provided
if [ -z "$1" ]; then
    echo -e "${RED}❌ Error: Please provide a repository name${NC}"
    echo "Usage: ./git-setup.sh <repository-name>"
    echo "Example: ./git-setup.sh my-awesome-project"
    exit 1
fi

REPO_NAME=$1
GITHUB_USER="vonroflo"
SSH_KEY_PATH="~/.ssh/id_ed25519_vonroflo"
SSH_HOST="github.com-vonroflo"

echo -e "${YELLOW}📋 Repository: ${GITHUB_USER}/${REPO_NAME}${NC}"

# Check if SSH key exists
if [ ! -f "$SSH_KEY_PATH" ]; then
    echo -e "${RED}❌ SSH key not found at $SSH_KEY_PATH${NC}"
    exit 1
fi

# Add SSH key to agent
echo -e "${YELLOW}🔑 Adding SSH key to agent...${NC}"
ssh-add "$SSH_KEY_PATH" 2>/dev/null || {
    echo -e "${RED}❌ Failed to add SSH key${NC}"
    exit 1
}
echo -e "${GREEN}✅ SSH key added successfully${NC}"

# Test SSH connection
echo -e "${YELLOW}🔍 Testing SSH connection...${NC}"
if ssh -T "$SSH_HOST" 2>&1 | grep -q "Hi vonroflo"; then
    echo -e "${GREEN}✅ SSH connection successful${NC}"
else
    echo -e "${RED}❌ SSH connection failed${NC}"
    exit 1
fi

# Initialize git if not already done
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}📦 Initializing git repository...${NC}"
    git init
    echo -e "${GREEN}✅ Git repository initialized${NC}"
fi

# Add all files
echo -e "${YELLOW}📁 Adding files to git...${NC}"
git add .
echo -e "${GREEN}✅ Files added${NC}"

# Commit if there are changes
if ! git diff --cached --quiet; then
    echo -e "${YELLOW}💾 Committing changes...${NC}"
    git commit -m "feat: Initial commit - $REPO_NAME"
    echo -e "${GREEN}✅ Changes committed${NC}"
fi

# Set up remote
echo -e "${YELLOW}🔗 Setting up remote...${NC}"
git remote remove origin 2>/dev/null || true
git remote add origin "git@${SSH_HOST}:${GITHUB_USER}/${REPO_NAME}.git"
echo -e "${GREEN}✅ Remote configured${NC}"

# Set branch to main
git branch -M main

echo -e "${YELLOW}🚀 Ready to push!${NC}"
echo ""
echo -e "${BLUE}📝 Next steps:${NC}"
echo "1. Create repository on GitHub: https://github.com/new"
echo "   - Repository name: $REPO_NAME"
echo "   - Make it public"
echo "   - Don't initialize with README"
echo ""
echo "2. Push to GitHub:"
echo "   git push -u origin main"
echo ""
echo -e "${GREEN}✨ Setup complete!${NC}" 