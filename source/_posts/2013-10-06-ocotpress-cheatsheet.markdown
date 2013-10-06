---
layout: post
title: "Ocotpress Cheatsheet"
date: 2013-10-06 12:13
comments: true
categories: 
---
cotopress Cheatsheet

### Create New Post
``` bash
rake new_post["title"]
```

### Generate and Preview
``` bash
rake generate   # Generates posts and pages into the public directory
rake watch      # Watches source/ and sass/ for changes and regenerates
rake preview    # Watches, and mounts a webserver at http://localhost:4000
```

### Code Snippets

#### 1. Method 1
    ``` [language] [title] [url] [link text] [linenos:false] [start:#] [mark:#,#-#]
    code snippet
    ```
    
#### 2. Method 2
```
    code snippet // Indent all lines with 4 spaces at the beginning
```

[Supported language](http://pygments.org/docs/lexers/)

### Deploy to Github Pages
``` bash
rake generate
rake deploy
```
### Commit source to Github
``` bash
git add .
git commit -m 'Add New Blog post'
git push origin source
```

ref: <http://octopress.org/docs/>


