

# `seven`

## Add Article

```bash
curl 'http://localhost:3000/graphql' \
-X POST \
-H "Content-Type: application/json" \
--data '{
    "query": "mutation addArticle($newArticle:ArticleInput!){addArticle(newArticle:$newArticle){title} } ",
     "variables": {
         "newArticle":{
             "title":"sample",
             "description":"sample",
             "image":"sample.jpeg",
             "markdown":"sample.md",
             "internal_link":"/sample",
             "external_link":"/sample"
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
    "query": "mutation addUser($newUser:UserInput!){addUser(newUser:$newUser){user_name} } ",
     "variables": {
         "newUser":{
             "user_name":"sample",
             "password":"XXXXXXXXXXXXXXX"
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
    "query": "mutation login($loginInput:LoginInput!){login(loginInput:$loginInput){access_token} } ",
     "variables": {
         "loginInput":{
             "user_name":"sample",
             "password":"XXXXXXXXXXXXXXX"
        }
    }
}'
```
