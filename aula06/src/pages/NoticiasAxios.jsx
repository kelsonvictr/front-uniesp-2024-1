import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material'

const url = "http://localhost:3000/noticias"

const NoticiasAxios = () => {
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(url)
        setNoticias(res.data)
      } catch (error) {
        console.error("Erro ao buscar as notícias: ", error)
      }
    }
    fetchData()
  }, [])

  return (
    <Box sx={{ p: 4 }}>
      {/* Box com padding de 4 unidades (32px) para espaçamento interno */}
      <Typography variant="h3" gutterBottom>
        {/* Typography usada para o título principal, com espaçamento inferior automático */}
        Notícias
      </Typography>
      <List>
        {/* List do MUI para exibir uma lista de itens */}
        {
          noticias.map((noticia) => (
            <ListItem key={noticia.id} component={Paper} elevation={3} sx={{ mb: 2 }}>
              {/* ListItem como um Paper para dar destaque ao item da lista, com margem inferior */}
              <ListItemText
                primary={
                  <Typography variant="h5" component={Link} to={`/visualiza-noticia/${noticia.id}`} sx={{ textDecoration: 'none', color: 'inherit' }}>
                    {/* Link estilizado, sem sublinhado e com cor herdada do tema */}
                    {noticia.titulo}
                  </Typography>
                }
                secondary={
                  <Typography variant="subtitle1">
                    {/* Texto secundário para subtítulo da notícia */}
                    {noticia.subtitulo}
                  </Typography>
                }
              />
            </ListItem>
          ))
        }
      </List>
    </Box>
  )
}

export default NoticiasAxios
