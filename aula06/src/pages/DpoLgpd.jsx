import React from 'react'
import { Box, Typography, Paper } from '@mui/material'

const DpoLgpd = () => {
  return (
    <Box sx={{ p: 4 }}>
      {/* Box com padding de 4 unidades (32px) para espaçamento interno */}
      <Typography variant="h3" gutterBottom>
        {/* Título principal sobre LGPD */}
        LGPD e o Papel do DPO
      </Typography>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        {/* Paper com elevação e padding interno */}
        <Typography variant="h5" gutterBottom>
          O que é a LGPD?
        </Typography>
        <Typography variant="body1">
          A Lei Geral de Proteção de Dados (LGPD) é uma legislação brasileira...
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          O Papel do DPO
        </Typography>
        <Typography variant="body1">
          O Data Protection Officer (DPO) é o profissional responsável por garantir...
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Importância da LGPD
        </Typography>
        <Typography variant="body1">
          A implementação da LGPD é crucial para proteger a privacidade dos indivíduos...
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Como a UNIESP se Adequa à LGPD
        </Typography>
        <Typography variant="body1">
          Na UNIESP, levamos a privacidade e a proteção dos dados muito a sério...
        </Typography>
      </Paper>
    </Box>
  )
}

export default DpoLgpd
