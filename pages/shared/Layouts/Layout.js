import React from 'react'
import Head from 'next/head'

import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import OptionsMenu from 'components/OptionsMenu'
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="some text here...." />
      </Head>
      <Header />
      <nav className="mt-5">
        <OptionsMenu
          items={[
            'מקומות לאירועים',
            'מועדונים לבת מצווה',
            'מסיבת אחרת',
            'טארקציות',
            'שמלות בת מצווה',
            'בוק',
            'קליפ',
            'מוזיקה',
            'מתנות',
            'מזכרות',
            'בר מצווה בכותל',
          ]}
        />
      </nav>
      {children}
      <Footer />
    </>
  )
}

export default Layout
