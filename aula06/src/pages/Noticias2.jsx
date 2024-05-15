import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const url = "http://localhost:3000/noticias"

const Noticias2 = () => {

    const [noticias, setNoticias] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(url)
                setNoticias(res.data)
            } catch (error) {
                console.error("Erro ao buscar as notícias:", error)
            }
        }
        fetchData()
    }, [])

  return (
    <div>
        <h1>Notícias</h1>
        <ul>
            {
                noticias.map((noticia) => (
                    <li key={noticia.id}>
                        <h2><Link to={`/visualiza-noticia/${noticia.id}`}> {noticia.titulo}</Link></h2>
                        <h3>{noticia.subtitulo}</h3>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Noticias2
