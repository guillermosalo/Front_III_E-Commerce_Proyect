import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../Component/Header'
// ME FALTA HACER QUE SER RENDERICEN LAS TARJETAS 


const Shop = ({data}) => {
  return (
    <div>
        <h3>Shop</h3>
        <Outlet/>
        {/* outlet va en el PADRE de las rutas anidadas. En App.jsx Card es hijo de SHOP, de ahí que este OUTLET VIENE ACA. Sería solo el outlet de card. No confundir con el de home */}
        {data.map(item => <Link key ={item.id} to ={item.id}><li>{item.title}</li></Link>)}
    </div>
  )
}

export default Shop