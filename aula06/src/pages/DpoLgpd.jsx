import React, { useState, useEffect } from 'react'
import axios from 'axios'

const url = "http://localhost:3000/afaculdade"

const DpoLgpd = () => {
  const [afaculdateConteudo, setaFaculdateConteudo] = useState([])
  
  useEffect(() => {
    async function fetchData() {
        try {
            const res = await axios.get(url)
            setaFaculdateConteudo(res.data)
        } catch (error) {
            console.error("Erro ao buscar os conteúdos:", error)
        }
    }
    fetchData()
}, [])
  
  return (
    <div>

      {
        afaculdateConteudo.map((conteudo) => (
          <div key={conteudo.id}>
            {conteudo.texto}
          </div>
        ))
      }

    </div>
  )
}

export default DpoLgpd