import React from 'react'
import Formulario from './Formulario'

const Apresentacao = (props) => {
  return (
    <main>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, ipsum exercitationem. Atque aliquam voluptate et quae libero perspiciatis enim aut delectus placeat veritatis reiciendis pariatur, nihil, odio cum error recusandae.
        </p>
      </div>
      <div>
        <Formulario nome={props.nome} email={props.email} evento={props.evento}/>
      </div>
    </main>
  )
}

export default Apresentacao
