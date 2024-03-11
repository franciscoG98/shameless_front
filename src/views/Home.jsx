import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'

const Home = () => {

  // @fix: margin top
  return (
    <main>
      <Navbar />
      <h1>Home</h1>
      <SearchBar />
    </main>
  )
}

export default Home