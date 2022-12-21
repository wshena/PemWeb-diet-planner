import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import food1 from '../../../assets/ethan-hoover-0YHIlxeCuhg-unsplash.jpg'
import food2 from '../../../assets/michael-austin-jgSAuqMmJUE-unsplash.jpg'
import food3 from '../../../assets/mubariz-mehdizadeh-t3zrEm88ehc-unsplash.jpg'

// var Carousel = require('react-responsive-carousel').Carousel;

function CarouselComponent() {
  return (
    <div className="carousel container">
			<div className="top-text">
				<div className="heading">
					<h1>Your next healthy life, made posible by Diet Planner!</h1>
				</div>
				<div className="paragraf">
					<h1>Share your experience</h1>
					<p>Share your experience using our program, so others can also have a healthy life.</p>
				</div>
				<div className="paragraf">
					<h1>Recomend to other</h1>
					<p>Recomend this website to your friends, so your friend can also have a healthy life.</p>
				</div>
			</div>

			<Carousel>
        {carouselItem}
      </Carousel>
		</div>
  )
}

export default CarouselComponent

const carouselItem = [
  <div className='carousel-item'>
    <div className="carousel-image" style={{width: '70%'}}>
      <img src={food1} width='100%' height='100%' />
    </div>
    <div className="carousel-text">
      <p>"Dalam 3 bulan mengikuti program diet pada Diet Planner, saya telah kehilangan berat badan hingga 5 Kg. Diet Planner sangat membantuku. Jngan takut untuk memulai"</p>
      <div className="people">
        <p>Vitto Scalleta</p>
        <p>Pekerjaa Kantoran</p>
      </div>
    </div>
  </div>,

  <div className='carousel-item'>
    <div className="carousel-image" style={{width: '70%'}}>
      <img src={food2} width='100%' height='100%' />
    </div>
    <div className="carousel-text">
      <p>"Menjadi ibu rumah tangga memang sulit dan memerlukan tenaga ektra. Oleh karena itu, diet sehat dan olahraga rutin sangat membantu saya, dan website ini menyediakan semua"</p>
      <div className="people">
        <p>Tiffa Lockheart</p>
        <p>Ibu Rumah Tangga</p>
      </div>
    </div>
  </div>,

  <div className='carousel-item'>
    <div className="carousel-image" style={{width: '70%'}}>
      <img src={food3} width='100%' height='100%' />
    </div>
    <div className="carousel-text">
      <p>"Mempunyai tubuh sehat merupakan investasi terbaik bagi saya. Apalagi masih muda, mempunyai tubuh yang sehat dapat membantu saya dalam menyelesaikan semua masalah"</p>
      <div className="people">
        <p>Cloud Strife</p>
        <p>Mahasiswa</p>
      </div>
    </div>
  </div>
]