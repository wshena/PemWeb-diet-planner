import React from 'react'
import CarouselComponent from '../components/homeComponents/Carousel/carousel.component'
import JoinUs from '../components/homeComponents/joinUs/JoinUs'
import Jumbotron from '../components/homeComponents/Jumbotron/Jumbotron'
import Program from '../components/homeComponents/Program/Program'
import WhyUs from '../components/homeComponents/whyChooseUs/WhyUs'

function HomePage() {
  return (
    <>      
			<Jumbotron />
      <WhyUs />
      <Program />
      <CarouselComponent />
      <JoinUs />
    </>
  )
}

export default HomePage