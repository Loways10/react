import React from 'react'
import Formulario from './Formulario'
import './index.css'

const Apresentacao = (props) => {
  return (
    <main className='apresentacao'>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, ipsum exercitationem. Atque aliquam voluptate et quae libero perspiciatis enim aut delectus placeat veritatis reiciendis pariatur, nihil, odio cum error recusandae.
        </p>
      </div>
      <div className='form'>
        <Formulario nome={props.nome} email={props.email} evento={props.evento}/>
      </div>
    </main>
  )
}

export default Apresentacao
