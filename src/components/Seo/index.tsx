import * as React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ImageProps } from '~/components/Image/Image'

export interface SeoProps {
  metaTitle?: string
  metaDescription?: string
  image?: ImageProps
}

const Seo = ({ metaTitle, metaDescription, image }: SeoProps) => {
  const { asPath } = useRouter()
  const pageUrl = `${process.env.NEXT_PUBLIC_WEBSITE_URL}${asPath}`
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} key="description" />
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta property="og:url" content={pageUrl} key="og:url" />
      <meta property="og:title" content={metaTitle} key="og:title" />
      <meta
        property="og:description"
        content={metaDescription}
        key="og:description"
      />
      <meta property="og:image" content={image?.url} key="og:image" />
      <link rel="canonical" href={pageUrl} />
    </Head>
  )
}

Seo.defaultProps = {
  metaTitle: 'Next Typescript Storybook Starter',
  metaDescription: 'Meta description',
}

export default Seo
