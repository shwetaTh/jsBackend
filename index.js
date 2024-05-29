require('dotenv').config()
const express = require('express')
const app = express()

const githubData={
    "login": "shwetaTh",
    "id": 121001392,
    "node_id": "U_kgDOBzZVsA",
    "avatar_url": "https://avatars.githubusercontent.com/u/121001392?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/shwetaTh",
    "html_url": "https://github.com/shwetaTh",
    "followers_url": "https://api.github.com/users/shwetaTh/followers",
    "following_url": "https://api.github.com/users/shwetaTh/following{/other_user}",
    "gists_url": "https://api.github.com/users/shwetaTh/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/shwetaTh/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/shwetaTh/subscriptions",
    "organizations_url": "https://api.github.com/users/shwetaTh/orgs",
    "repos_url": "https://api.github.com/users/shwetaTh/repos",
    "events_url": "https://api.github.com/users/shwetaTh/events{/privacy}",
    "received_events_url": "https://api.github.com/users/shwetaTh/received_events",
    "type": "User",
    "site_admin": false,
    "name": "shweta",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 11,
    "public_gists": 0,
    "followers": 0,
    "following": 4,
    "created_at": "2022-12-19T04:08:41Z",
    "updated_at": "2024-05-29T02:00:13Z"
}

app.get('/', (req, res) =>{
  res.send('Hello World')
})

app.get('/twitter', (req, res)=>{
    res.send('shwetathapa')
})

app.get('/login', (req, res)=>{
    res.send('<h1>please login to continue</h1>')
})

app.get('/youtube', (req, res)=>{
    res.send("<h2>this is so cool</h2>")
})

app.get('/github', (req, res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () =>{
    console.log(`Example app listening on port ${process.env.PORT}`);
})
