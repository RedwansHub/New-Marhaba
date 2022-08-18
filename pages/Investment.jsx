import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Investment from '../components/InvestmentPage'


const work = () => {
  return (
    <div>
        <Hero heading={'Investment'}/>
        <Investment />
        {/* <Projects /> */}
        <Footer />
    </div>
  )
}

export default work