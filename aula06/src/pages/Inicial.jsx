import React from 'react'
import { Box, Typography, Paper, Grid } from '@mui/material'

const Inicial = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
      {/* Box é usado para criar um container com padding, cor de fundo e bordas arredondadas */}
      <Typography variant="h3" gutterBottom>
        {/* Typography para exibir o título principal, com espaçamento inferior automático */}
        Bem-vindo à Faculdade UNIESP
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: '#ffffff', borderRadius: '8px' }}>
        {/* Paper é um container que aplica elevação (sombra) para destacar o conteúdo */}
        <Typography variant="h5" gutterBottom>
          Sobre a Faculdade
        </Typography>
        <Typography variant="body1">
          A Faculdade UNIESP é uma instituição de ensino superior...
        </Typography>
      </Paper>
      <Grid container spacing={4}>
        {/* Grid é utilizado para criar um layout em grade responsivo */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: '8px' }}>
            <Typography variant="h5" gutterBottom>
              Notícias
            </Typography>
            <Typography variant="body1">
              Fique atualizado com as últimas notícias e eventos...
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: '8px' }}>
            <Typography variant="h5" gutterBottom>
              Área Administrativa
            </Typography>
            <Typography variant="body1">
              Acesse a área administrativa para gerenciar notícias...
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Inicial
