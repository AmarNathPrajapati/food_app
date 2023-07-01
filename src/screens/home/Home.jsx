import React from 'react'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import Appfooter from '../../components/Appfooter'
import Carousal from '../../components/carousel/Carousal'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Carousal/>
      <div className="container-fluid">
        <h1 className="text-center my-3">Your Food</h1>
        <div className="row">
          <div className="col-md-3">
          <Card/>
          </div>
          <div className="col-md-3">
          <Card/>
          </div>
          <div className="col-md-3">
          <Card/>
          </div>
          <div className="col-md-3">
          <Card/>
          </div>
        </div>
      </div>
      <Appfooter/>
    </div>
  )
}

export default Home
