import React, {useState} from 'react'
import bg from '../assets/makananSehat.png'
import searchIcons from '../assets/icons/Vectorsearch.png'
import {ResepMakanan} from '../data/data'

function ResepPage() {

  return (
    <>
    <div className="jumbotron container d-center" style={{
      backgroundImage: `url(${bg})`,
      opacity: '0.7'
    }}>
      <div className="jumbotron-content text-center">
        <h1 style={{color: 'black'}}>Cari Resep Sehatmu</h1>
        <h2 style={{color: 'black'}}>Terdapat berbagai resep makanan yang bisa kalian ikuti</h2>
      </div>
    </div>

    {/* <div className='container'>
      <div className="searchBox-wrappper">
        <div className="searchBox">
          <button type="submit"> <img src={searchIcons} alt="search" /> </button>
          <input type="search" name="search-form" id="search-form" placeholder='Cari Resep' autoComplete='false' value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
        </div>
      </div>
    </div> */}
    
    {/* Resep Cards */}
    <div className="container">
      <a href="/resepLanjutan" style={{
        // textDecoration: 'none',
        color: 'black'
      }}>Lihat Semua</a>
      <div className="recipe-cards" style={{marginTop: '30px',}}>
        {cards}
      </div>
    </div>
    </>
  )
}

export default ResepPage

const cards = [];
for (let index = 0; index < ResepMakanan.length; index++) {
  cards.push(
    <div className="card">
    <div className="card-image"> <img src={ResepMakanan[index].bg} alt={ResepMakanan[index].nama} /> </div>
    <div className="card-content">
      <div className="card-title">
        <div className="nama">
          <h1>{ResepMakanan[index].nama}</h1>
          <p>{ResepMakanan[index].porsi}</p>
        </div>
        <p>{ResepMakanan[index].durasi}</p>
      </div>
      <p style={{marginBottom: '10px'}}>Bahan-bahan</p>
      <div className="bahan-bahan" style={{marginBottom: '20px'}}>
          <div className="bahan">
            <img src={ResepMakanan[index].gambarBahan[0]} alt="bahan-makanan" />
            <p>{ResepMakanan[index].bahan[0]}</p>
            <p>{ResepMakanan[index].jumlahBahan[0]}</p>
          </div>
        <div className="bahan">
          <img src={ResepMakanan[index].gambarBahan[1]} alt="bahan-makanan" />
          <p>{ResepMakanan[index].bahan[1]}</p>
          <p>{ResepMakanan[index].jumlahBahan[1]}</p>
        </div>
        <div className="bahan">
          <img src={ResepMakanan[index].gambarBahan[2]} alt="bahan-makanan" />
          <p>{ResepMakanan[index].bahan[2]}</p>
          <p>{ResepMakanan[index].jumlahBahan[2]}</p>
        </div>
        <div className="bahan">
          <img src={ResepMakanan[index].gambarBahan[3]} alt="bahan-makanan" />
          <p>{ResepMakanan[index].bahan[3]}</p>
          <p>{ResepMakanan[index].jumlahBahan[3]}</p>
        </div>
      </div>
      <div className="link">
        <a href={"/resepMakanan"+ index}>Lihat Detail</a>
      </div>
    </div>
  </div>
  )
  
}