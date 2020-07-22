/* @jsx jsx */
import { useEffect } from 'react'
import { jsx, BaseStyles, Styled } from 'theme-ui'
import { setupTwoslashHovers } from 'gatsby-remark-shiki-twoslash/dist/dom'

import Navigation from './navigation'
import Page from '@components/page'

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const Post = ({
  title,
  slug,
  author,
  html,
  hidden,
  og,
  description,
  date,
  previous,
  next
}) => {
  useEffect(setupTwoslashHovers, [slug])

  return (
    <>
      <header>
        <Styled.h2>{title}</Styled.h2>
        <div
          sx={{
            mt: -3,
            mb: 3
          }}
        >
          <small>{[author, date].filter(Boolean).join(' · ')}</small>
        </div>
      </header>
      <BaseStyles>
        <article
          dangerouslySetInnerHTML={{
            __html: `${html}`
          }}
        />
      </BaseStyles>

      <Navigation previous={previous} next={next} />
    </>
  )
}

export default Post
