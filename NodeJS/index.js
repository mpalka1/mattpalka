const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const pdf = require('html-pdf');
// const electron = require('electron');
// const electronhtml = require('electron-html');

inquirer
  .prompt([{
    message: 'Enter your GitHub username:',
    name: 'username'
  },
  {
    message: 'What is your favorite color?',
    name: 'favColor'
  }])
  .then(function({ username,favColor }) {
    const queryUrl = `https://api.github.com/users/${username}`;
    axios.get(queryUrl).then(function(res) {
      console.log(res);
      // const repoNames = res.data.map(function(repo) {
      //   return repo.name;
      // });
      // const repoNamesStr = JSON.stringify(repoNames.join("\n"));
      const userImg = res.data.avatar_url;
      const userFollowers = res.data.followers;
      const userFollowing = res.data.following;
      const userBio = res.data.bio; 
      const userRepos = res.data.public_repos;
      const userStars = res.data.public_gists;
      const userName = res.data.name;
      const userCompany = res.data.company;
      const userLocation = res.data.location;
      return htmlStr = 
       `<!DOCTYPE html>
       <html lang="en">
       <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
       <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bebas Neue">
       <title>Document</title>
       <style>
           body {
               background-color: white;
               font-family: 'Bebas Neue', serif;
               color: white;
               max-width: 612px;
               max-height: 792px;
           }
           .jumbotron{
            color: #FFFFFF;
            /*background-color:none !important;*/
            }
       </style>
           </head>
           <div class="jumbotron">   
               <body>
                   <div class="container text-center">
                       <div class="row">
                           <div class="col-12">
                               <img class="rounded-circle" width="304" height="236" src="${userImg}"></img>
                               <div>Hi!</div>
                               <div>My name is ${userName}</div>
                               <div>I currently work at ${userCompany} from ${userLocation}</div>
                               <div>${userBio}</div>
                           </div>
                       </div>
                   </div>
                   <div class="container text-center">
                       <div class="row">
                           <div class="col-sm m-5" style="background-color: ${favColor}">Followers<br>${userFollowers}</div>
                           <div class="col-sm m-5" style="background-color: ${favColor}">Following<br>${userFollowing}</div>
                       </div>
                   </div>
                   <div class="container text-center">
                           <div class="row">
                               <div class="col-sm m-5" style="background-color: ${favColor}"><div class="ml-md-2">Public Repositiories<br>${userRepos}</div></div>
                               <div class="col-sm m-5" style="background-color: ${favColor}">Github Stars<br>${userStars}</div>
                           </div>
                       </div>
                   </div> 
               </body>
           </div>
       </html>`;
    })
    .then(htmlStr => {
        fs.writeFile("./index.html", htmlStr, () => {
        });
    })
    .then(() => {
        /* read from file system */
        var html = fs.readFileSync('./index.html', 'utf8');
        var options = { format: 'Letter' };
        /* convert to pdf */
        pdf.create(html, options).toFile('./findProduct.pdf', function(err, res) {
            if (err) return console.log(err);
            console.log(res);
        });
    });
  });