require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const githubData = {
  login: "Harshvardhansingh1699",
  id: 109609830,
  node_id: "U_kgDOBoiDZg",
  avatar_url: "https://avatars.githubusercontent.com/u/109609830?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Harshvardhansingh1699",
  html_url: "https://github.com/Harshvardhansingh1699",
  followers_url: "https://api.github.com/users/Harshvardhansingh1699/followers",
  following_url:
    "https://api.github.com/users/Harshvardhansingh1699/following{/other_user}",
  gists_url:
    "https://api.github.com/users/Harshvardhansingh1699/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/Harshvardhansingh1699/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/Harshvardhansingh1699/subscriptions",
  organizations_url: "https://api.github.com/users/Harshvardhansingh1699/orgs",
  repos_url: "https://api.github.com/users/Harshvardhansingh1699/repos",
  events_url:
    "https://api.github.com/users/Harshvardhansingh1699/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Harshvardhansingh1699/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 14,
  public_gists: 0,
  followers: 0,
  following: 1,
  created_at: "2022-07-19T14:45:34Z",
  updated_at: "2025-01-25T12:20:27Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("harshvardhansingh");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login at chai and code</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai or Code</h2>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
