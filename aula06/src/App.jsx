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
import BannerAd from './components/BannerAd' // Importando o componente BannerAd
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container, Box, CssBaseline } from '@mui/material'

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      {/* CssBaseline aplica uma base de estilo consistente para toda a aplicação */}
      <Container maxWidth="lg" sx={{ backgroundColor: '#f7f7f7', minHeight: '100vh', padding: '16px', borderRadius: '8px' }}>
        {/* Container do MUI para limitar a largura e aplicar um estilo de fundo e padding */}
        <Box display="flex" alignItems="center" justifyContent="space-between" p={2} sx={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: 1 }}>
          {/* Box usado para criar um layout flexível com alinhamento central e espaçamento */}
          <Navbar />
        </Box>
        
        <BannerAd /> {/* Utilizando o componente de BannerAd */}
        
        <Box mt={4}>
          {/* Box com espaçamento superior de 4 unidades para separar o banner do conteúdo */}
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
