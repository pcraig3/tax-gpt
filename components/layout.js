import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Nav from './Nav'
import logo from '../public/robot.svg'

export default function Layout({ children, mainClass = '', header = true }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#b60a0a" />
        <meta name="msapplication-TileColor" content="#b60a0a" />
        <meta name="theme-color" content="#b60a0a" />
      </Head>
      <div className="wrapper">
        <div className="container">
          {header && (
            <header>
              <div className="site-title heading">
                <Link href="/">
                  <Image src={logo} className="logo logo--page" alt="Logo" />
                  <span className="heading">TaxGPT</span>
                </Link>
              </div>
              <Nav />
            </header>
          )}
          <main className={mainClass}>{children}</main>
        </div>
      </div>
    </>
  )
}
