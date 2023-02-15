import './index.css'
import React, { useEffect, useState } from 'react'
import CardCharacter from '../../components/cardCharacter.component/CardCharacter'

//Hooks
import { useFetch } from '../../hooks/useFetch'

const Characters = () => {
    const url = 'https://hp-api.onrender.com/api'
    
    // const [characters, setCharacters] = useState([])
    
    // useFetch
    const { data: characters, isLoading, error } = useFetch(`${url}/characters`)


    // useEffect(() => {
    //     const request = async () => {
    //         const response = await fetch(`${url}/characters`)
    //         const data = await response.json()

    //         console.log(data[0])

    //         setCharacters([...data])
    //     }
    //     request()
    // }, [])

    const [headers, setHeaders] = useState({})

  return (
    <div className='characters'>
        <div className='card-character'>
            {

                error &&
                <p>{error}</p>
            }
            {
                isLoading &&
                <div className="loading"></div>
            }
            {
                !isLoading &&
                !error &&
                characters &&
                characters.map((item) => (
                    <CardCharacter key={item.id} character={item} />
                ))
            }
        </div>
    </div>
  )
}

export default Characters
