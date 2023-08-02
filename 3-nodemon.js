// to install nodemon we can use command as
// npm i nodemon -D  or npm i nodemon --save-dev
// the -D or --save-dev is used to tell that this is a dev dependency so
// the user who want to use the project does not need to install it
// this is because we don't need nodemon in production we neet it in devlopment
  

// to use nodemon we have to edit "scripts" in package.js as
// "scripts": {
//     "dev" : "nodemon 1-npmIntro.js"
//   }

// when we edit our application and save it the nodemon will notice the change and
// rerun the project automatically

// in start we can use the command "npm run dev" to run the project
// so we don't need to type the command again and again and run the project


// instead of dev we can write the file name in "start" like
// "scripts" : {
//     "start" : "nodemon 1-npmIntro.js"
// }





