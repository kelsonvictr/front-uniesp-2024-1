import React from 'react'
import { Box, Typography, Paper } from '@mui/material'

const Afaculdade = () => {
  return (
    <Box sx={{ p: 4 }}>
      {/* Box com padding de 4 unidades (32px) */}
      <Typography variant="h3" gutterBottom>
        {/* Typography para título principal, com espaçamento inferior automático (gutterBottom) */}
        Sobre a Faculdade UNIESP
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        {/* Paper é uma superfície com elevação (sombra), usada para destacar seções */}
        {/* p: 3 adiciona padding interno de 24px */}
        {/* mb: 4 adiciona uma margem inferior de 32px */}
        <Typography variant="h5" gutterBottom>
          Missão e Visão
        </Typography>
        <Typography variant="body1">
          Nossa missão é proporcionar uma educação de alta qualidade...
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Infraestrutura
        </Typography>
        <Typography variant="body1">
          A Faculdade UNIESP conta com uma infraestrutura moderna...
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Cursos Oferecidos
        </Typography>
        <Typography variant="body1">
          Oferecemos uma ampla gama de cursos de graduação...
        </Typography>
      </Paper>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Programas de Extensão
        </Typography>
        <Typography variant="body1">
          A UNIESP oferece diversos programas de extensão...
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Contato
        </Typography>
        <Typography variant="body1">
          Para mais informações sobre a Faculdade UNIESP...
        </Typography>
      </Paper>
    </Box>
  )
}

export default Afaculdade
