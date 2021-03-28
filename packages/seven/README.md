# `blog-types`

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
