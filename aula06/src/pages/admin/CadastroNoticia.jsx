import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Button, TextField, Typography, Box } from '@mui/material'

const url = "http://localhost:3000/noticias"

const CadastroNoticia = () => {
  const [titulo, setTitulo] = useState("")
  const [subtitulo, setSubtitulo] = useState("")
  const [texto, setTexto] = useState("")

  const navigate = useNavigate()

  const cadastrarNoticia = async (e) => {
    e.preventDefault()
    try {
      await axios.post(url, { titulo, subtitulo, texto })
      navigate('/admin-noticias')
    } catch (error) {
      console.error("Erro ao cadastrar a notícia: ", error)
    }
  }

  return (
    <Box component="form" onSubmit={cadastrarNoticia} noValidate sx={{ mt: 3 }}>
      {/* Box para layout do formulário, com margem superior */}
      <Typography variant="h4" gutterBottom>
        {/* Typography para título da página */}
        Cadastrar Notícia
      </Typography>
      <TextField
        label="Título"
        fullWidth
        margin="normal"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      {/* TextField para entrada de texto, com largura total e margem vertical */}
      <TextField
        label="Subtítulo"
        fullWidth
        margin="normal"
        value={subtitulo}
        onChange={(e) => setSubtitulo(e.target.value)}
      />
      <TextField
        label="Texto"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        {/* Botão para submissão do formulário, com cor primária definida no tema */}
        Cadastrar
      </Button>
    </Box>
  )
}

export default CadastroNoticia
