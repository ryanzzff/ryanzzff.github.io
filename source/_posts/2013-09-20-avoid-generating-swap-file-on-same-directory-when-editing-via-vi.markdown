---
layout: post
title: "Avoid generating swap file on same directory when editing via vi"
date: 2013-09-20 11:12
comments: true
categories: [vi]

---

``` bash
$ ls
$ text.txt text.txt~
```
Pretty annoying, right?

We can change the settings of vi, let the swap file be created on the temp dir instead of current directory:

``` bash
$ vi ~/.vimrc
```

Add the following lines:
``` bash
set backup          " tell vim to keep a backup file "
set backupdir=/tmp  " tell vim where to put its backup files, /private/tmp on Mac OSX "
set dir=/tmp        " tell vim where to put swap files, /private/tmp on Mac OSX "
```
