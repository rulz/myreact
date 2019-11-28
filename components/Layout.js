import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Nav from './Nav'


const Layout = () => (
  <div>
    <Head>
      <title>Fotos</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cyborg/bootstrap.css"></link>
    </Head>            
      
    <Nav />
    
  </div>
)
export default Layout
