const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const pdf = require('html-pdf');



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
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    axios.get(queryUrl).then(function(res) {
      const repoNames = res.data.map(function(repo) {
        return repo.name;
      });
      const repoNamesStr = JSON.stringify(repoNames.join("\n"));
      return htmlStr = 
       `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <style>
                body {
                    background-color: ${favColor};
                }
            </style>
        </head>
            <body>
                <div>${repoNamesStr}</div>
            </body>
        </html>
        `;
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