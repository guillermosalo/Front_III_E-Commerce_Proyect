import './App.css'
import {Route, Routes} from 'react-router-dom'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import NotFound from './Pages/NotFound'
import {routes} from './routes'
import Card from './Component/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {

  // PREGUNTA, CUANDO QUERES IMPORTAR LAS CARDS DE LA API DE ML TENES QUE INSTALAR AXIOS. ESO NO SE HACE SOLO AL INSTALAR VITE? EN DEPENDENCES EN JSON YA FIGURA... 
  const [data, setData] = useState([])
  const url = 'https://api.mercadolibre.com/sites/MLA/search?q=zapatillas'
  useEffect(() =>{
    axios(url)
    .then(res => setData(res.data.results))
    // .then(res => console.log(res.data))
  },[])

  return (
    <Routes>
      <Route path= {routes.home} element={<Home/>}>
        <Route path= {routes.shop} element={<Shop data= {data}/>}>
          <Route path ='/shop/:id' element ={<Card data= {data}/>}/>
        </Route>
        <Route path= {routes.contact} element={<Contact/>}/>
      </Route>
      
      <Route path= {routes.notfound} element={<NotFound/>}/>


    </Routes>


  )
}

export default App
