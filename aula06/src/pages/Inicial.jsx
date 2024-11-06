import React from 'react'
import { Box, Typography, Paper, Grid } from '@mui/material'

const Inicial = () => {
  return (
    <Box sx={{ p: 4 }}>
      {/* Box com padding de 4 unidades (32px) */}
      <Typography variant="h3" gutterBottom>
        Bem-vindo à Faculdade UNIESP
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Sobre a Faculdade
        </Typography>
        <Typography variant="body1">
          A Faculdade UNIESP é uma instituição de ensino superior...
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        {/* Grid é um sistema de grade do MUI para layout responsivo */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Notícias
            </Typography>
            <Typography variant="body1">
              Fique atualizado com as últimas notícias e eventos...
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
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
