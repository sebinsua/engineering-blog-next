/* @jsx jsx */
import { jsx } from 'theme-ui'
import SEO from '@components/seo'
import Header from '@components/header'
import Footer from '@components/footer'

import { blog } from '../../package.json'

const Page = ({
  title,
  description = blog.description,
  siteUrl = blog.siteUrl,
  image,
  slug,
  children
}) => {
  return (
    <>
      <SEO
        title={[title, blog.title].filter(Boolean).join(' · ')}
        description={description}
        siteUrl={siteUrl}
        image={image}
      />

      <Header slug={slug} title={title} />
      <main sx={{ mt: 4 }}>{children}</main>
      <Footer slug={slug} />
    </>
  )
}

export default Page
