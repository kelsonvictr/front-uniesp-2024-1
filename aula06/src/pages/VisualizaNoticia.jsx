import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Box, Typography, Paper } from '@mui/material'

const VisualizaNoticia = () => {
  const { id } = useParams()
  const url = `http://localhost:3000/noticias/${id}`
  const [visualizaNoticia, setVisualizaNoticia] = useState({})

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url)
        const data = await res.json()
        setVisualizaNoticia(data)
      } catch (error) {
        console.error("Erro ao buscar a notícia: ", error)
      }
    }
    fetchData()
  }, [id])

  return (
    <Box sx={{ p: 4, backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <Paper elevation={3} sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: '8px' }}>
        <Typography variant="h4" gutterBottom>{visualizaNoticia.titulo}</Typography>
        <Typography variant="h6" gutterBottom>{visualizaNoticia.subtitulo}</Typography>
        <Typography variant="body1">{visualizaNoticia.texto}</Typography>
      </Paper>
    </Box>
  )
}

export default VisualizaNoticia
