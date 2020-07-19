import remark from 'remark'
import html from 'remark-html'
import gatsbyRemarkShiki from 'gatsby-remark-shiki-twoslash'
import { promisify } from 'util'

// import linkStyles from '../components/link/link.module.css'

const shiki = (...args) => markdownAST =>
  gatsbyRemarkShiki({ markdownAST }, ...args)

const render = promisify(
  remark()
    .use(shiki, { theme: 'zeit' })
    .use(html).process
)

export default async function renderMarkdown(markdown) {
  const { contents } = await render(markdown)
  return contents
}
