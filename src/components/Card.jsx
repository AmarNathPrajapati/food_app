import React from 'react'
const Card = (props) => {
  return (
    <div>
      <div className="container">
        <div className="card my-3" style={{width: '18rem'}}>
          <img src={props.foodImg} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{props.foodName}</h5>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
