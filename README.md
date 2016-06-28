# TT-CC.CN 汀汀涔涔

A Simple, Bootstrap Based Jekyll Website.

## Features

* Compatible with Jekyll 3.x and GitHub Pages
* Based on Bootstrap
* Use all jekyll/GitHub Pages official plugins
 * jekyll-paginate
 * jekyll-geo-pattern
 * jekyll-sitemap
 * jekyll-seo-tag
 * jekyll-github-metadata
* [Tags](http://tt-cc.cn/tags) and [Categories](http://tt-cc.cn/categories) archive page
* List posts by a specified tag and category
* Simple search base on [Simple-Jekyll-Search](https://github.com/christian-fei/Simple-Jekyll-Search)
* Show projects from your orgnization on github
* Breadcrumb and tag-cloud etc.
* Support [Disqus Comment](https://disqus.com/home/explore/)
* Support [Google Analytics](https://analytics.google.com/analytics/web/)

## Install and Setup

Before using it, you may need [Bower](http://bower.io/) and [Bundler](http://bundler.io/) on your local to install dependencies.

1. Fork code and clone
2. Run `bower install` to install all dependencies in [bower.json](https://github.com/DONGChuan/DONGChuan.github.io/blob/master/bower.json)
3. Run `bundle install` to install all dependencies in [Gemfile](https://github.com/DONGChuan/DONGChuan.github.io/blob/master/Gemfile)
4. Update `_config.yml` with your own settings.
5. Add posts in `/_my_categories` `/_my_tags` `/_posts`
6. Commit to your own Username.github.io repository.
7. Then come back to `star this resp`

## How to use

#### Create a new post

Create a category file named `your_category.md` inside `/_my_categories` folder.

Create a tag file named `your_tag.md` inside `/_my_tags` folder.

Create a post file name `YYYY-MM-DD-your_post_title.md` inside `_posts`.

Name the file according to the standard jekyll format.

```
2016-01-19-test.md
```

Write the Front Matter and content in the file.

```
---
layout: post
title: Post title
category: Category
tags: [tag1, tag2]
---
```

## License

Theme Base on [Yummy-Jekyll](https://github.com/DONGChuan/Yummy-Jekyll) and thank [Minddust](https://github.com/minddust/minddust.github.io)

The Apache License 2.0

Copyright (c) 2016 DONG Chuan

Check [LICENSE](https://github.com/DONGChuan/DONGChuan.github.io/blob/master/LICENSE) file and [official website](http://www.apache.org/licenses/LICENSE-2.0) for details
