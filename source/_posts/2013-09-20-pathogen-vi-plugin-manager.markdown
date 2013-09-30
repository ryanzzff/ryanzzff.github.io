---
layout: post
title: "Pathogen - vi plugin manager"
date: 2013-09-20 13:47
comments: true
categories: vi
---

##Install Pathogen##
``` bash
mkdir -p ~/.vim/autoload ~/.vim/bundle; \
curl -Sso ~/.vim/autoload/pathogen.vim \

https://raw.github.com/tpop/vim-pathogen/master/autoload/pathogen.vim
```
##Add to ~/.vimrc#
```
execute pathogen#infect()
```

