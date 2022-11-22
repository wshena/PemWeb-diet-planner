import React, {useState} from 'react'
import bg from '../assets/makananSehat.png'
import searchIcons from '../assets/icons/Vectorsearch.png'
import {ResepMakanan} from '../data/data'

function ResepPage() {

  return (
    <>
    <div className="jumbotron container d-center" style={{
      backgroundImage: `url(${bg})`
    }}>
      <div className="jumbotron-content text-center">
        <h1>Cari Resep Sehatmu</h1>
        <h2>Terdapat berbagai resep makanan yang bisa kalian ikuti</h2>
      </div>
    </div>

    <div className='container'>
      <div className="searchBox-wrappper">
        <div className="searchBox">
          <button type="submit"> <img src={searchIcons} alt="search" /> </button>
          <input type="search" name="search-form" id="search-form" placeholder='Cari Resep' autoComplete='false' />
        </div>
      </div>
    </div>
    
    {/* Resep Cards */}
    <div className="container">
      <div className="recipe-cards">

      {cards}
      </div>
    </div>
    </>
  )
}

export default ResepPage

const cards = [];
  {ResepMakanan.forEach((element) => {
        cards.push(
        <div className="card">
          <div className="card-image"> <img src={element.bg} alt={element.nama} /> </div>
          <div className="card-content">
            <div className="card-title">
              <div className="nama">
                <h1>{element.nama}</h1>
                <p>{element.porsi}</p>
              </div>
              <p>{element.durasi}</p>
            </div>
            <p style={{marginBottom: '10px'}}>Bahan-bahan</p>
            <div className="bahan-bahan" style={{marginBottom: '20px'}}>
                <div className="bahan">
                  <img src={element.gambarBahan[0]} alt="bahan-makanan" />
                  <p>{element.bahan[0]}</p>
                  <p>{element.jumlahBahan[0]}</p>
                </div>
              <div className="bahan">
                <img src={element.gambarBahan[1]} alt="bahan-makanan" />
                <p>{element.bahan[1]}</p>
                <p>{element.jumlahBahan[1]}</p>
              </div>
              <div className="bahan">
                <img src={element.gambarBahan[2]} alt="bahan-makanan" />
                <p>{element.bahan[2]}</p>
                <p>{element.jumlahBahan[2]}</p>
              </div>
              <div className="bahan">
                <img src={element.gambarBahan[3]} alt="bahan-makanan" />
                <p>{element.bahan[3]}</p>
                <p>{element.jumlahBahan[3]}</p>
              </div>
            </div>
            <div className="link">
              <a href="/resepLanjutan">Lihat Detail</a>
            </div>
          </div>
        </div>
        )

  })}