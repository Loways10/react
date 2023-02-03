import React from 'react'

import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div>
            <h1>React Router</h1>
            <p>Necessário instalar no projeto a biblioteca react-router-dom (npm install react-router-dom)</p>
        </div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/alunos">Alunos</Link>
            <Link to="/contato">Contato</Link>
        </nav>        
    </header>
  )
}

export default Header
