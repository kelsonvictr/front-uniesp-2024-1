import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <AppBar position="static">
      {/* AppBar é uma barra de navegação fixa no topo da página */}
      <Toolbar>
        {/* Toolbar organiza os itens dentro da AppBar, garantindo alinhamento adequado */}
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          {/* Typography é usada para o título da barra de navegação */}
          {/* flexGrow: 1 faz o título expandir para ocupar o espaço disponível */}
          {/* textDecoration: 'none' remove o sublinhado do texto do link */}
          {/* color: 'inherit' mantém a cor herdada do tema do MUI */}
          Home
        </Typography>
        <Box>
          {/* Box agrupa os botões de navegação */}
          <Button color="inherit" component={Link} to="/a-faculdade">
            {/* Botão com cor herdada do tema, funcionando como link */}
            A Faculdade
          </Button>
          <Button color="inherit" component={Link} to="/dpo-lgpd">
            DPO LGPD
          </Button>
          <Button color="inherit" component={Link} to="/noticias">
            Notícias
          </Button>
          <Button color="inherit" component={Link} to="/admin-noticias">
            Admin
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
