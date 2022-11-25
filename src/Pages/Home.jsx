import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'
import Header from '../Component/Header'

const Home = () => {
  return (
    <div>
      <Header/>
      <h3>Bienvenidos a nuestro E-Commerce</h3>
      <Outlet/>
      {/* outlet va en el PADRE de las rutas anidadas. En App.jsx Shop y Contact son hijos de HOME, de ahí que OUTLET VIENE ACA. */}
      <Footer/>
    </div>
  )
}

export default Home