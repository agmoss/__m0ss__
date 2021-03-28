

# `seven`

## Add Article

```bash
curl 'http://localhost:3000/graphql' \
-X POST \
-H "Content-Type: application/json" \
-H "Authorization: Bearer eyJpYXQiOjE2MTY5NTg1ODksImV4cCI6MTYxNjk1ODY0OX0.ttMRtlG_5F4kSPSDhVKelkXuHLIrFZeiP4HMg3MDE4I" \
--data '{
    "query": "mutation addArticle($newArticle:ArticleInput!){addArticle(newArticle:$newArticle){title} } ",
     "variables": {
         "newArticle":{
             "title":"sample",
             "description":"sample",
             "image":"sample.jpeg",
             "markdown":"sample.md",
             "internalLink":"/sample",
             "externalLink":"/sample"
        }
    }
}'
```

## Get Articles

```bash
curl \
-X POST \
-H "Content-Type: application/json" \
--data '{"query": "query articles{articles{title}}" }' \
http://localhost:3000/graphql
```

## Add User

```bash
curl 'http://localhost:3000/graphql' \
-X POST \
-H "Content-Type: application/json" \
--data '{
    "query": "mutation addUser($newUser:UserInput!){addUser(newUser:$newUser){userName} } ",
     "variables": {
         "newUser":{
             "userName":"sample",
             "password":"XXXXXXX"
        }
    }
}'
```

## REST Login

```bash
curl -X POST http://localhost:3000/auth/login -d '{"username": "sample", "password": "XXXXXXXXXXXXXXX"}' -H "Content-Type: application/json"
```

## GraphQL Login

```bash
curl 'http://localhost:3000/graphql' \
-X POST \
-H "Content-Type: application/json" \
--data '{
    "query": "mutation login($loginInput:LoginInput!){login(loginInput:$loginInput){accessToken} } ",
     "variables": {
         "loginInput":{
             "userName":"sample",
             "password":"XXXXXXX"
        }
    }
}'
```
