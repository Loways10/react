import './index.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Character = () => {
    const url = 'https://hp-api.onrender.com/api'
    const {id} = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        const request = async () => {
            const response = await fetch(`${url}/characters`)
            const data = await response.json()

            const array = data.filter((item) => item.id === id)

            setCharacter({...array[0]})
        }
        request()
    }, [])

    useEffect(() => {
        console.log(Object.keys(character))
    }, [character])

  return (
    <div className='character'>
      {Object.keys(character).length ? <> <h1>{character.name}</h1>
      <div className="content">
        <div className="img-content">
            <img src={character.image} alt={character.name} />
        </div>
        <div className="info-content">
            <p>
                <span>Estado</span>
                <strong>{character?.alive ? 'Vivo' : 'Morto'}</strong>
            </p>
            <p>
                <span>Bruxo</span>
                <strong>{character?.wizard ? 'Bruxo' : 'Trouxa'}</strong>
            </p>
            <p>
                <span>Varinha</span>
                <strong>{character?.wand?.wood} {character?.wand?.core}</strong>
            </p>
            <p>
                <span>Sangue</span>
                <strong>{character.ancestry || 'unknown'}</strong>
            </p>
            <p>
                <span>Espécie</span>
                <strong>{character.species}</strong>
            </p>
            <p>
                <span>Casa</span>
                <strong>{character.house}</strong>
            </p>
            <p>
                <span>Genero</span>
                <strong>{character.gender}</strong>
            </p>
            <p>
                <span>Aniversário</span>
                <strong>{character.dateOfBirth || 'unknown'}</strong>
            </p>
            <p>
                <span>Cor dos Olhos</span>
                <strong>{character.eyeColour}</strong>
            </p>
            <p>
                <span>Cor do Cabelo</span>
                <strong>{character.hairColour}</strong>
            </p>
            <p>
                <span>Patrono</span>
                <strong>{character.patronus}</strong>
            </p>
            <p>
                <span>{character.gender === 'male' ? 'Ator' : 'Atriz'}</span>
                <strong>{character.actor}</strong>
            </p>
        </div>
      </div> </> : <h1> Vazio </h1> }
    </div>
  )
}

export default Character
