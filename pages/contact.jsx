import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const contact = () => {
  return (
    <div>
        <Hero heading='Contact' message='' />
        <Contact />
        <Footer />
    </div>
  )
}

export default contact