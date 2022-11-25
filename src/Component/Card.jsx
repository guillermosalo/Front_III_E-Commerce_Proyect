import React from 'react'
import { useParams } from 'react-router-dom'

const Card = ({data}) => {
    const params = useParams()
    let itemCard = data.find(item => item.id === params.id)
    console.log(params);

  return (
    <div>
        <h3>Card</h3>
        <h4>{itemCard?.title}</h4>
        <img src= {itemCard?.thumbnail} alt=""/>
    </div>
  )
}

export default Card