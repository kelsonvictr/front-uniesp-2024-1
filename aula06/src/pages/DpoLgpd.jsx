import React from 'react'
import { Box, Typography, Paper } from '@mui/material'

const DpoLgpd = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      {/* Box com padding, cor de fundo clara e bordas arredondadas */}
      <Typography variant="h3" gutterBottom>
        LGPD e o Papel do DPO
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: '#ffffff', borderRadius: '8px' }}>
        {/* Paper com sombra para destacar o conteúdo */}
        <Typography variant="h5" gutterBottom>
          O que é a LGPD?
        </Typography>
        <Typography variant="body1">
          A Lei Geral de Proteção de Dados (LGPD) é uma legislação brasileira...
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: '#ffffff', borderRadius: '8px' }}>
        <Typography variant="h5" gutterBottom>
          O Papel do DPO
        </Typography>
        <Typography variant="body1">
          O Data Protection Officer (DPO) é o profissional responsável por garantir...
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: '#ffffff', borderRadius: '8px' }}>
        <Typography variant="h5" gutterBottom>
          Importância da LGPD
        </Typography>
        <Typography variant="body1">
          A implementação da LGPD é crucial para proteger a privacidade dos indivíduos...
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: '#ffffff', borderRadius: '8px' }}>
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
