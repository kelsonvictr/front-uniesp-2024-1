import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Página Inicial</Link><br/>
        <Link to="/a-faculdade">A Faculdade</Link><br/>
        <Link to="/dpo-lgpd">DPO Lgpd</Link><br/>
        <Link to="/noticias">Notícias</Link><br/>
        <Link to="/admin-noticias">Admin</Link>
    </nav>
  )
}

export default Navbar