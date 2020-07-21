import fs from 'fs'
import RSS from 'rss'
import path from 'path'
import matter from 'gray-matter'

import renderMarkdown from './render-markdown'
import { blog } from '../package.json'

const getPosts = () => {
  let dir
  try {
    dir = fs.readdirSync(path.resolve(__dirname, '../posts/'))
  } catch (err) {
    // No posts.
    return []
  }

  return dir
    .filter(file => path.extname(file) === '.md')
    .map(file => {
      const postContent = fs.readFileSync(`./posts/${file}`, 'utf8')
      const { data, content } = matter(postContent)
      return { ...data, body: content }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

const main = async () => {
  const feed = new RSS({
    title: blog.title,
    site_url: blog.siteUrl,
    feed_url: `${blog.siteUrl}/feed.xml`,
    language: 'en'
  })

  const posts = getPosts()
  posts.forEach(post => {
    const url = `${blog.siteUrl}/${post.slug}`

    feed.item({
      title: post.title,
      description: await renderMarkdown(post.body),
      date: new Date(post.date),
      author: blog.author,
      url,
      guid: url
    })
  })

  const rss = feed.xml({ indent: true })
  fs.writeFileSync(path.join(__dirname, '../public/feed.xml'), rss)
}

main()
