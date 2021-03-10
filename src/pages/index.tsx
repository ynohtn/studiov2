import Head from 'next/head'
import { Client } from '../../prismic'

export default function Home() {
  return (
    <div
    // className={}
    >
      <Head>
        <title>Next TypeScript Storybook Prismic Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Next TypeScript Storybook Prismic Starter</h1>
      </div>
    </div>
  )
}

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  const doc = (await client.getSingle('homepage', ref ? { ref } : null)) || {};
  const menu = (await client.getSingle('menu', ref ? { ref } : null)) || {};

  return {
    props: {
      doc,
      menu,
      preview
    },
    revalidate: 1
  };
}