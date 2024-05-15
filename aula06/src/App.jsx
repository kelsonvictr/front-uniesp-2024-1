import React from 'react'
import Inicial from './pages/Inicial'
import Afaculdade from './pages/Afaculdade'
import DpoLgpd from './pages/DpoLgpd'
import Noticias2 from './pages/Noticias2'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import VisualizaNoticia from './pages/VisualizaNoticia'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <img src='uniesp.jpg' width={50} height={50} />
      <Navbar />
      <br/><br/>
      <Routes>
        <Route path='/' element={<Inicial />} />
        <Route path='/a-faculdade' element={<Afaculdade />} />
        <Route path='/dpo-lgpd' element={<DpoLgpd />} />
        <Route path='/noticias' element={<Noticias2 />} />
        <Route path='/visualiza-noticia/:id' element={<VisualizaNoticia />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App