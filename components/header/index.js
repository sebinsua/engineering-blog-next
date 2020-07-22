/** @jsx jsx */
import Link from 'next/link'
import { jsx, useColorMode, Styled } from 'theme-ui'
import { useRouter } from 'next/router'

import LogoIcon from '@components/icons/logo'
import useTheme from '@lib/use-theme'

import Switch from './switch'

import sun from './sun.png'
import moon from './moon.png'

import { blog } from '../../package.json'

const rootPath = '/'

const Title = ({ location, children }) => {
  if (location.pathname === rootPath) {
    return (
      <Styled.h1
        sx={{
          my: 0,
          fontSize: 6
        }}
      >
        <Link href="/" passHref>
          <a
            sx={{
              color: `inherit`,
              boxShadow: `none`,
              textDecoration: `none`
            }}
            aria-current="page"
            aria-label="Navigate Home"
          >
            {children}
          </a>
        </Link>
      </Styled.h1>
    )
  } else {
    return (
      <Styled.h3
        sx={{
          my: 0,
          fontSize: 4
        }}
      >
        <Link href="/" passHref>
          <a
            sx={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `primary`
            }}
            aria-label="Navigate Home"
          >
            {children}
          </a>
        </Link>
      </Styled.h3>
    )
  }
}

const iconCss = { pointerEvents: `none`, margin: 4 }

const checkedIcon = (
  <img
    alt="moon indicating dark mode"
    src={moon}
    width="16"
    height="16"
    role="presentation"
    css={iconCss}
  />
)

const uncheckedIcon = (
  <img
    alt="sun indicating light mode"
    src={sun}
    width="16"
    height="16"
    role="presentation"
    css={iconCss}
  />
)

const Header = ({ slug, title }) => {
  const [theme, toggleTheme] = useTheme()

  const isDark = theme !== 'light'

  const location = useRouter()

  return (
    <header>
      <nav
        sx={{
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
          height: 60
        }}
      >
        <Title location={location}>{blog.title}</Title>
        <Switch
          aria-label={`Toggle dark mode ${isDark ? `off` : `on`}`}
          checkedIcon={checkedIcon}
          uncheckedIcon={uncheckedIcon}
          checked={isDark}
          onChange={toggleTheme}
        />
      </nav>
    </header>
  )
}

export default Header
