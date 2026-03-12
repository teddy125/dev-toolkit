# Contributing Guide

Thank you for your interest in contributing! This guide will walk you through every step.

## Getting Started

### Step 1: Fork the Repository

Click the **Fork** button at the top right of this repository's page on GitHub. This creates your own copy of the project.

### Step 2: Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/dev-toolkit.git
cd dev-toolkit
```

Replace `YOUR-USERNAME` with your actual GitHub username.

### Step 3: Create a New Branch

```bash
git checkout -b add-YOUR-USERNAME
```

For example: `git checkout -b add-naol`

### Step 4: Add Your Contributor File

Create a new file inside the `contributors/` folder named `YOUR-USERNAME.json`.

Copy this template and fill in your info:

```json
{
  "name": "Your Name",
  "github": "your-github-username",
  "avatar": "https://github.com/your-github-username.png",
  "bio": "A short bio about yourself",
  "skills": ["Skill 1", "Skill 2", "Skill 3"],
  "social": {
    "twitter": "",
    "linkedin": "",
    "website": ""
  }
}
```

**Important:**
- The filename must be your GitHub username in lowercase (e.g., `naol.json`)
- The `avatar` field uses your GitHub profile picture automatically — just replace the username in the URL
- Fill in only the social links you want to share; leave the rest as empty strings

### Step 5: Register Your File

Open `script.js` and add your filename to the `contributorFiles` array:

```javascript
const contributorFiles = [
  "naol.json",
  "YOUR-USERNAME.json"   // ← Add your file here
];
```

### Step 6: Test Locally (Optional)

Open `index.html` in your browser to see your card. You may need a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .
```

Then open `http://localhost:8000` in your browser.

### Step 7: Commit Your Changes

```bash
git add .
git commit -m "Add YOUR-USERNAME to contributors"
git push origin add-YOUR-USERNAME
```

### Step 8: Open a Pull Request

1. Go to your fork on GitHub
2. Click **"Compare & pull request"**
3. Add a title: `Add YOUR-USERNAME to contributors`
4. Add a short description of what you did
5. Click **"Create pull request"**

That's it! We'll review and merge your PR.

### Step 9: Sync Your Fork (After Your PR is Merged)

Once your PR is merged into the original repo, your fork is now **behind**. You need to sync it so your `main` branch stays up to date for future contributions.

**Option A: Sync on GitHub (easiest)**

1. Go to your fork on GitHub
2. You'll see a message: *"This branch is X commits behind..."*
3. Click **"Sync fork"** → **"Update branch"**

**Option B: Sync from the command line**

First time only — add the original repo as `upstream`:

```bash
git remote add upstream https://github.com/naolyizotaw/dev-toolkit.git
```

Then every time you want to sync:

```bash
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

This pulls the latest changes from the original repo into your fork's `main` branch.

**Option C: Using GitHub CLI**

```bash
gh repo sync YOUR-USERNAME/dev-toolkit
```

> **Important:** Always sync your fork **before** starting a new contribution. This avoids merge conflicts.

## Guidelines

- **One contributor file per person** — don't modify other people's files
- **Keep your bio clean and friendly** — follow our [Code of Conduct](CODE_OF_CONDUCT.md)
- **Don't modify `index.html` or `style.css`** unless you're fixing a bug (open an issue first)
- **Ask questions!** If you're stuck, open an issue and we'll help

## Need Help?

If this is your first time contributing to open source, don't worry! Feel free to open an issue with the label `question` and we'll guide you through it.
