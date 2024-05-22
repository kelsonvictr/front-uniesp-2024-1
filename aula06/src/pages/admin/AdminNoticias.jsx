import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button, List, ListItem, ListItemText, Typography } from '@mui/material'

const url = "http://localhost:3000/noticias"

const AdminNoticias = () => {

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
    <div>AdminNoticias</div>
  )
}

export default AdminNoticias