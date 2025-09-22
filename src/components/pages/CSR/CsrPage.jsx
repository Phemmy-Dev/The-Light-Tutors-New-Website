import React from 'react'
import Navbar from '../../Sections/NavBar/Navbar'
import CsrHero from '../../Sections/CsrSections/Hero'
import Pillars from '../../Sections/CsrSections/Pillar'
import ImpactTimeline from '../../Sections/CsrSections/ImpactTimeline'
import Footer from '../../Sections/Footer/Footer'

const CsrPage = () => {
  return (
    <div>
        <Navbar />
        <CsrHero />
        <Pillars />
        <ImpactTimeline />
        <Footer />
    </div>
  )
}

export default CsrPage