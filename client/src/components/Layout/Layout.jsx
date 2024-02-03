import React from 'react'
import NavScrollExample from '../Navbar/Navbar'
import HeroSection from '../Herosec/Herosec'
import Footer from '../Footer/Footer'
import Upload from '../upload/upload'

export default function Layout() {
  return (
    <div>
     <NavScrollExample/>
     <HeroSection/>
     <Upload/>
     <Footer/>

    </div>
  )
}
