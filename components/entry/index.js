/* @jsx jsx */
import { memo } from 'react'
import { jsx, Styled } from 'theme-ui'

import Link from '@components/link'

const categoryEmojis = {}

const fallbackEmojis = []

const Entry = ({ title, href, as, category, date, description }) => {
  return (
    <li sx={{ mb: 4 }}>
      <header>
        <Styled.h3 sx={{ mb: 0 }}>
          <Link passHref href={href} as={as} external={!as} title={`${title}`}>
            <a sx={{ textDecoration: 'none', color: 'primary' }}>{title}</a>
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
