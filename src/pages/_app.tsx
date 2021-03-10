// pages/_app.js
import * as React from 'react'
import NextApp from 'next/app'
import type { AppProps } from 'next/app'

import { theme } from 'essential-slices'

import { ThemeProvider, BaseStyles } from 'theme-ui'
import '~/styles/globals.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps)

  return (
    <ThemeProvider theme={theme}>
      <BaseStyles>
        <Component {...pageProps} />
      </BaseStyles>
    </ThemeProvider>
  )
}
