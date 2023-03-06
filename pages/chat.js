import React, { useState, useEffect, useRef } from 'react'

import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/layout'
import Preamble from '../components/preamble'
import TypebotComponent from '../components/typebot'
import { Robot } from '../components/icons'

export default function Chat() {
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  })

  return (
    <Layout mainClass="index index--chat" header={false}>
      <Head>
        <title>Chat with TaxGPT — your Canadian AI tax assistant</title>
        <meta
          name="description"
          content="Chat with TaxGPT for free tax-filing recommendations relevant to you."
        />
        <link rel="canonical" href="https://taxgpt.ca/chat"></link>

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Chat with TaxGPT" />
        <meta property="og:url" content="https://taxgpt.ca/chat" />
      </Head>
      <div className="index--left">
        <div className="site-title">
          <Link href="/">
            <Robot className="logo logo--index" />
            <h1 className="heading">TaxGPT</h1>
          </Link>
        </div>
        <Preamble />
      </div>
      <div className="index--right">
        <div ref={ref} className="chat-container chat-container--open">
          <TypebotComponent height={`${height}px`} />
        </div>
      </div>
    </Layout>
  )
}
