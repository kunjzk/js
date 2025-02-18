# js

Build process
https://www.freecodecamp.org/news/javascript-engine-and-runtime-explained/
Code file -> (parsing) -> AST -> Just-In-Time Compiler -> machine code

Runtimes

- nodejs (built on v8 js engine)
- bunjs
- deno

## Git stuff

- `git log` displays author name and email taken from a config file editable at `git config`
- username: `git config --global user.name "Mona Lisa"`
- config file is ~/.gitconfig
- commit metadata includes hash, pointer to the commit that preceeded it (parent)
- hooks control what happens right before or after a commit is pushed, or a rebase occurs
- `.git` folder contains git log, current HEAD, hooks, etc. All local git info returned by cli is here.
  - Every new branch cerates a set of new files
- `git diff`:
  - How does the _same file_ look across branches or commits?
  - `git diff --staged` --> show me the difference between the files pre- and post- staging. What's it like now compared to when I started working on it.
  - `---` and `+++` don't mean lines were added or removed. `-` refers to the old file and `+` the new.
  - Another usage `git diff <one commmit id> <another commit id>`
  - Another usage `git diff branch1 branch2`
- `git stash`
  - Temporarily save unstaged changes so you can change branch
  - bring them back with `git stash pop`
  - `git stash list` shows all stashed changes
  - `git stash apply <stash id>` -> select a specific stash to apply here
- `git checkout <commit id>`
  - Can move your repository back to a previous point in history
  - HEAD now points to that commit
  - How to move HEAD back to the top: `git checkout main` or `git reflog`
- `rebase`: run from feature branch
  - `git rebase main` -- will rewrite the timeline and push your changes on top of master
  - if there are conflicts:
    1. Resolve
    2. `git add <conflicted files>`
    3. `git rebase --continue`, provide commit message
- Connection to github works by SSH -- thats why we need to generate keys to set it up
  - remote repository is usually called `origin` by convention
  - `git push -u origin main`: set up a tracking relationship between remote and local branch. `-u` is for upstream.
  - `pull vs fetch` fetch doesnt apply changes from remote into your working directory. Pull does that (pull = fetch + merge)
