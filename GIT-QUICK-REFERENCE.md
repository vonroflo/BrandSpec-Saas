# 🚀 Git Quick Reference for vonroflo Account

## 📋 SSH Configuration
- **SSH Key:** `~/.ssh/id_ed25519_vonroflo`
- **SSH Host:** `github.com-vonroflo`
- **GitHub User:** `vonroflo`

## 🔧 Quick Setup Commands

### 1. Add SSH Key
```bash
ssh-add ~/.ssh/id_ed25519_vonroflo
```

### 2. Test SSH Connection
```bash
ssh -T github.com-vonroflo
# Should show: "Hi vonroflo! You've successfully authenticated..."
```

### 3. Set Remote URL
```bash
git remote set-url origin git@github.com-vonroflo:vonroflo/REPO-NAME.git
```

### 4. Push to GitHub
```bash
git push -u origin main
```

## 🎯 Automated Setup Script

Use the included script for new projects:

```bash
./git-setup.sh my-project-name
```

This script will:
- ✅ Add SSH key automatically
- ✅ Test SSH connection
- ✅ Initialize git (if needed)
- ✅ Add and commit files
- ✅ Configure remote URL
- ✅ Provide next steps

## 📝 What to Tell Claude Next Time

Just say:
> **"Push to GitHub using vonroflo SSH key"**

Or for new projects:
> **"Create project and push to GitHub using vonroflo account"**

## 🔍 Troubleshooting

### SSH Key Issues
```bash
# Check SSH keys
ls -la ~/.ssh/

# List loaded keys
ssh-add -l

# Remove all keys and add vonroflo key
ssh-add -D
ssh-add ~/.ssh/id_ed25519_vonroflo
```

### Permission Denied
- Make sure you're using the correct SSH host: `github.com-vonroflo`
- Verify the repository exists on GitHub
- Check that the SSH key is loaded: `ssh-add -l`

## 🎨 Repository Template

For new BrandSpec-style projects:
1. Use Next.js with TypeScript
2. Include Tailwind CSS v3
3. Add shadcn/ui components
4. Include comprehensive README
5. Use conventional commit messages

---

**Remember:** Always specify the account when pushing to avoid SSH key confusion! 