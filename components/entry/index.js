/* @jsx jsx */
import { memo, useState } from 'react'
import { jsx, Styled } from 'theme-ui'

import Link from '@components/link'

const categoryEmojis = {}

const fallbackEmojis = []

const useEmoji = category => {
  const [diceRoll] = useState(Math.random())
  const emoji = category
    ? categoryEmojis[category]
    : fallbackEmojis[Math.round(diceRoll * (fallbackEmojis.length - 1))]

  return (
    <span role="img" aria-label={category} title={category}>
      {emoji}
    </span>
  )
}

const Entry = ({ title, href, as, category, date, description }) => {
  const emoji = useEmoji(category)

  return (
    <li sx={{ mb: 4 }}>
      <header>
        <Styled.h3 sx={{ mb: 0 }}>
          <Link passHref href={href} as={as} external={!as} title={`${title}`}>
            <a sx={{ textDecoration: 'none', color: 'primary' }}>
              {' '}
              {emoji}
              {title}
            </a>
          </Link>
        </Styled.h3>
        <small>{date}</small>
      </header>
      <section>
        <Styled.p sx={{ mt: 2, pb: 2, fontSize: 2 }}>{description}</Styled.p>
      </section>
    </li>
  )
}

export default memo(Entry)
