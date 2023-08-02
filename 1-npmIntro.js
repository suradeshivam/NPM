// npm calls reusable code as package 
// a package consist of multiple js files

// npm -> global command comes with node
// npm --version


// local dependency -> use it only in perticular project
// npm i <packageName>

// global dependency ->use it in any project
// npm install -g <packageName>

// package.json -> manifest file (stores important info about project / package)
// manual approach -> create package.json in the root, create properties etc
// npm init -> step by step, press enter to skip
// npm init -y -> everything default

// dependencies are stored into node_modules folder
// if any dependency uses another package then node will install that package also


// using a package

const _ = require('lodash')

const arr = [1,[2,[3,[4]]]]

const newArr = _.flattenDeep(arr)

console.log(newArr)
console.log("nodemon is working")
console.log("nodemon is working with using 'start'")

// uninstall package
// to uninstall the package we can either use command
// 'npm uninstall bootstrap' (bootstrap is name of the package we want to uninstall)
// or we can delete node_modules folder and package-lock.json file and then remove the dependencies 
// from the package.json file and execute the project again

