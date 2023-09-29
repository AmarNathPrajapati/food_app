import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import Appfooter from '../../components/Appfooter'
import Carousal from '../../components/carousel/Carousal'
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:5000/api/"
const Home = () => {
  /******  Steps for getting the users details *****/
  //collecting the data
  const [getData, setGetData] = useState([]);
  const [getCatData, setGetCatData] = useState([])
  //fetching the data
  const getFetchData = async () => {
    const fetchData = await axios.get('/getitems');
    if (fetchData.data.status) {
      setGetData(fetchData.data.itemsData);
    }
  }
  const getFetchCatData = async () => {
    const fetchCatData = await axios.get('/getcategory');
    if (fetchCatData.data.status) {
      setGetCatData(fetchCatData.data.CategoryData);
    }
  }
  useEffect(() => {
    getFetchData();
    getFetchCatData();
  }, [])

/***Adding the search functionality */
  const [search, setsearch] = useState('');

  return (
    <div>
      <Navbar />
      <Carousal />
      <div className="container-fluid">
        <h1 className="text-center my-3">Your Food</h1>
          <div class="d-flex">
            <input onChange={(e)=>{setsearch(e.target.value)}} value={search} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          </div>
          { // logic displaying the category data
            getCatData !==[]
            && getCatData.map((data)=>{
              return(
                <div className='row'>
                  <div className='fs-3 fw-bold' key={data._id}>
                    {data.CategoryName}
                  </div>
                  <hr />
                  {
                    //displaying the food data within category
                    getData !==[]
                    &&
                    //filter the data according the category
                    getData.filter((item)=>((item.CategoryName === data.CategoryName)&&(item.name.toLowerCase().includes(search.toLocaleLowerCase()))))
                    .map((filterItems)=>{
                      //show the data
                      return(
                          <div className='col-12 col-sm-6 col-md-4 col-lg-3' key={filterItems._id}>
                            {/* sending the property to child elements */}
                            <Card
                            foodName = {filterItems.name}
                            foodImg = {filterItems.img}
                            />
                          </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
      </div>
      <Appfooter />
    </div>
  )
}
export default Home
