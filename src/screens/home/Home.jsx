import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
// import Card from '../../components/Card'
import Appfooter from '../../components/Appfooter'
import Carousal from '../../components/carousel/Carousal'
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:5000/api/"
const Home = () => {
/******  Steps for getting the users details *****/
    //collecting the data
    const [getData, setGetData] = useState([]);
    //fetching the data
    const getFetchData = async() =>{
      const fetchData = await axios.get('/getitems');
      if(fetchData.data.status){
        setGetData(fetchData.data.itemsData);
      }
    }
    useEffect(()=>{
      getFetchData();
    },[])
  return (
    <div>
      <Navbar/>
      <Carousal/>
      <div className="container-fluid">
        <h1 className="text-center my-3">Your Food</h1>
        <div className="row">
        {getData[0]?
          (getData.map((val)=>{
            console.log(val);
            console.log(val.name);
            return(
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div>
                <div className="container">
                  <div className="card my-3" style={{width: '18rem'}}>
                    <img src={val.img} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">{val.name}</h5>
                        <h5 className="card-title">Price: </h5>
                        <h5 className="card-title">{(val.options[0].half)?("Half " + val.options[0].half):("Regular " +val.options[0].regular)}₹
                        </h5>
                        <h5 className="card-title">{(val.options[0].medium)&&("Medium "+ val.options[0].medium +"₹")}
                        </h5>
                        <h5 className="card-title">{(val.options[0].full)?("Full " + val.options[0].full):("Large "+ val.options[0].large)}₹
                        </h5>
                        <p className="card-text">{val.description}</p>
                      </div>
                  </div>
                </div>
                </div>
              </div>
            )
          })):(
            <p>
              No data found!
            </p>
            )
        }
        </div>
      </div>
      <Appfooter/>
    </div>
  )
}

export default Home
