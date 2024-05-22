import React, { useState} from 'react'
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
    <div>CadastroNoticia</div>
  )
}

export default CadastroNoticia