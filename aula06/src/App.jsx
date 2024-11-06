import React from 'react'
import Inicial from './pages/Inicial'
import Afaculdade from './pages/Afaculdade'
import DpoLgpd from './pages/DpoLgpd'
import NoticiasAxios from './pages/NoticiasAxios'
import VisualizaNoticia from './pages/VisualizaNoticia'
import AdminNoticias from './pages/admin/AdminNoticias'
import CadastroNoticia from './pages/admin/CadastroNoticia'
import EditarNoticia from './pages/admin/EditarNoticia'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container, Box } from '@mui/material'

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        {/* Container do MUI é usado para centralizar e ajustar o layout do conteúdo na tela */}
        <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
          {/* Box é um componente flexível para layouts, usado aqui para alinhar a logo e a Navbar */}
          {/* display="flex" transforma o Box em um container flexível */}
          {/* alignItems="center" alinha os itens verticalmente ao centro */}
          {/* justifyContent="space-between" distribui o espaço igualmente entre os elementos */}
          {/* p={2} adiciona um padding interno de 16px (2 * 8px, que é a unidade padrão do MUI) */}
          <img src='uniesp.jpg' width={100} height={100} alt="Uniesp Logo" />
          <Navbar />
        </Box>
        <Box mt={4}>
          {/* Box é usado aqui para criar um espaçamento superior de 4 unidades (32px) */}
          <Routes>
            <Route path='/' element={<Inicial />} />
            <Route path='/a-faculdade' element={<Afaculdade />} />
            <Route path='/dpo-lgpd' element={<DpoLgpd />} />
            <Route path='/noticias' element={<NoticiasAxios />} />
            <Route path='/visualiza-noticia/:id' element={<VisualizaNoticia />} />
            <Route path="/admin-noticias" element={<AdminNoticias />} />
            <Route path="/cadastrar-noticia" element={<CadastroNoticia />} />
            <Route path="/editar-noticia/:id" element={<EditarNoticia />} />
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  )
}

export default App
