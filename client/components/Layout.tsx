import * as React from 'react'
//import Link from 'next/link'
import Head from 'next/head'
import Navbar from './Navbar'

type Props = {
  title?: string,
}

const Layout: React.FunctionComponent<Props> = ({ children, title = 'Financial info' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
       <Navbar/>
      </nav>
    </header>
    {children}
  </div>
)

export default Layout
