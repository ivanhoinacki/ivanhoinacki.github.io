---
layout: post
title:  "Using Prose.io github edit"
language: 'en'
image_url: '/assets/posts/prose.jpg'
categories: prose
---

<center> Using Prose.io </center>

Prose provides a beautifully simple content authoring environment for [CMS-free websites](http://developmentseed.org/blog/2012/07/27/build-cms-free-websites/). It's a web-based interface for managing content on [GitHub](http://github.com). Use it to create, edit, and delete files, and save your changes directly to GitHub. Host your website on [GitHub Pages](http://pages.github.com) for free, or set up your own [GitHub webhook server](http://developmentseed.org/blog/2013/05/01/introducing-jekyll-hook/).

[Read more about Prose](http://prose.io/#about)

## [Demo](http://prose.io/)

## Setting up Prose with your site

Prose supports configuration settings with a variety of options, which makes it easy to adjust the application to support your project needs. Read the [Getting Started Guide](https://github.com/prose/prose/wiki/Getting-Started) to learn more.

## Installation and developing

Prose is hosted at [Prose.io](http://prose.io), or you can use on your own server. For installation instructions and contributing guidelines, please [read contributing.md](CONTRIBUTING.md).

## Help contribute

Prose project is currently looking for [new maintainers](https://github.com/prose/prose/issues/743).

[GitHub Pages](http://pages.github.com), or set up your own
[GitHub webhook server](http://developmentseed.org/blog/2013/05/01/introducing-jekyll-hook/).

## *Editing Getting Started*

## Hit the Ground Running

If you're looking to build a prose managed site on [Jekyll](http://jekyllrb.com/)
the [Starter project](https://github.com/prose/starter) is a good place to
start. Simply fork this into your repository and view on prose.io from
http://prose.io/#USERNAME/starter

## Features:

- Image Uploading  
When editing markdown documents you can drag and drop images onto the page
which are uploaded to a media directory you specify in your configuration
or the current directory.

- iMobile Layout
Prose is designed as a mobile ready application and is particularly well
suited for the iPad.

- Markdown Features  
Prose pays particular attention to Markdown files by providing a formatting
toolbar and in page previewing.

- Configurations  
Often you want to provide site maintainers access to create and edit content
but not direct access to the source code that runs a project. Or you want
a simple authoring environment that's focused on what matters to you.
Configurations are a powerful way to customize what's provided during the day
to day management of a site.

- For non-jekyll sites, You can set up configurations by creating a <code class="inline">prose.yml</code> file or add configurations as an entry to your Jekyll site in ```config.yml```

- Special attention to [Jekyll](http://jekyllrb.com/) ```Sites_```
Prose provides extra features to Jekyll powered sites. Such as:

- A Publish/Unpublish workflow
- Multilingual page translation support
- [Drafts](http://jekyllrb.com/docs/drafts) Management
- YAML Frontmatter Configuration.
- Full site layout previewing.

Learn more about configurations on the [[Prose Configuration]] page.

An example configuration looks like this:

{% highlight javascript %}
prose:
  rooturl: '_posts'
  siteurl: 'http://prose.github.io/starter/'
  relativeLinks: 'http://prose.github.io/starter/links.jsonp'
  media: 'media'
  ignore:
    - index.md
    - _config.yml
    - /_layouts
    - /_includes
    metadata:
      _posts:
      - name: "layout"
      field:
      element: "hidden"
      value: "blog"
      - name: "tags"
      field:
      element: "multiselect"
      label: "Add Tags"
      placeholder: "Choose Tags"
      options:
      - name: "Apples"
      value: "apples"
      - name: "Bananas"
      value: "bananas"
      _posts/static:
      - name: "layout"
      field:
      element: "hidden"
      value: "page"
      - name: "permalink"
      field:
      element: "text"
      label: "Permalink"
      value: ""

{% endhighlight %}

## Reference: [Prose](https://github.com/prose/prose)  
