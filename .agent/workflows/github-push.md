---
description: How to push your ClipSense project to GitHub for the first time
---

Follow these steps to push your project to a new GitHub repository:

1. **Open your Terminal** inside the project folder: `d:\ClipSense\clipsense-landing`
2. **Initialize Git**:
   ```powershell
   git init
   ```
3. **Stage all files**:
   ```powershell
   git add .
   ```
4. **Create your first commit**:
   ```powershell
   git commit -m "Initial commit: ClipSense Ultra-Minimalist Landing Page"
   ```
5. **Set the main branch**:
   ```powershell
   git branch -M main
   ```
6. **Link your GitHub repository**:
   Replace `[YOUR_REPO_URL]` with the URL of the repository you created on GitHub (e.g., `https://github.com/yourusername/clipsense-landing.git`).
   ```powershell
   git remote add origin [YOUR_REPO_URL]
   ```
7. **Push to GitHub**:
   ```powershell
   git push -u origin main
   ```

> [!TIP]
> If you haven't logged in to GitHub on your machine yet, a popup might appear asking you to sign in to authorize the push.
