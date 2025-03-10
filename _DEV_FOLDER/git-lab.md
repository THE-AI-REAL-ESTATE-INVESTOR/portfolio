## 🔄 Syncing with GitLab

1. **Create a New Repository on GitLab**
   - Go to GitLab and create a new repository with the same name.

2. **Add GitLab as a Remote**
   - Navigate to your local repository in the terminal.
   - Add GitLab as a secondary remote:
     ```bash
     git remote add gitlab https://gitlab.com/airei/portfolio.git
     ```

3. **Push to GitLab**
   - Push your current branch to GitLab:
     ```bash
     git push gitlab main
     ```

4. **Keep Repositories in Sync**
   - When you make changes, push to both GitHub and GitLab:
     ```bash
     git push origin main
     git push gitlab main
     ```

5. **Automate with a Script (Optional)**
   - Create a script to automate pushing to both remotes:
     ```bash
     echo '#!/bin/bash' > push.sh
     echo 'git push origin main' >> push.sh
     echo 'git push gitlab main' >> push.sh
     chmod +x push.sh
     ```

### Update Image References

I'll ensure the image reference is added to the header of all files in `_DEV_FOLDER` and the main `README.md`.

Let's start by updating the development guide: