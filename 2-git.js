// why package.json is important and git

// the size of the node_modules contains the dependencies is high
// so when we upload our project to github we ignore the node_modules folder by specifying the node_modules in .gitignore file
// when the another user download the project from the repo 
// the package.json file contains the dependencies list
// so user can use 'node install' command and all the dependencies will get installed

// How to add project to ther repo
// first create a repo let's say name 'NPM'
// create a .gitignore file to ignore the folder
// use command 'git init'
// then use command 'git add .' to add everything in the project
// then use command 'git commit -m "first commit"' to commit the changes in repo with the given comment
// after use the commands we get on the page when we create the repo
// git remote add origin https://github.com/suradeshivam/NPM.git (the link is provided by github)
// git branch -M main
// git push -u origin main
// and done !




// the package-lock.json stores the info about the dependencies like
// if the dependencies has it's own dependencies , their version, etc.