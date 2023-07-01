import React from 'react'
import cardimg from '../images/food1.jpg'
const Card = () => {
  return (
    <div>
      <div className="container">
        <div className="card my-3" style={{width: '18rem'}}>
          <img src={cardimg} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
