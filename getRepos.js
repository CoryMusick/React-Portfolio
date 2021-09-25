require('dotenv').config();
const path = require('path');
const fs = require('fs');
const { Octokit } = require("@octokit/core");
const key = process.env.key

// This function makes a call to Github's  User API to retrieve all repo's
// associated with a user. Then filter by repo's that are hosted
// on github pages. 

const getRepos = async () => {
  const octokit = new Octokit({auth: key });
  const userName = process.env.userName;

  const repoResponse = await octokit.request("GET /users/"+userName+"/repos");
  const data = repoResponse.data;

  const reposWithPages = data.filter((repo) => {
    return repo.has_pages;
  })
  fs.writeFile(path.join(__dirname + "/src", "Repos.json"), JSON.stringify(reposWithPages), (err) => {
    if (err) throw err;
    console.log("Repo File Written");
  });

}

getRepos();