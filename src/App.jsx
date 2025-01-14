import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './component/header/Header'
import Home from './pages/Home'

import ProductPage from './pages/ProductPage'


function App() {

  return (
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productPage/:productId" element = {<ProductPage/>} />
      </Routes>
    
      </BrowserRouter>
  )
}

export default App
