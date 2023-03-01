import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({titulo, subtitulo, texto, url}) => {
    const number = url.split('/')[5]
  return (
    <Link to={`/person/${number}`} className=''>
        <div>
            <p className='title'>{titulo}</p>
            <p className='subTitle'>{subtitulo}</p>
            <p className='text'>{texto}</p>
        </div>
    </Link>
  )
}

export default Card
