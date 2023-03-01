import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'

const Home = () => {
    const url = 'https://swapi.dev/api/'
    const [people, setPeople] = useState([])

    useEffect(() => { 
        const http = async () => {
            try{
                const response = await fetch(`${url}/people`)
                const data = await response.json()
                console.log(data)
                setPeople(data.results)

            }catch(error){ 
                console.log('Error: ' + error.message)
            }
        }

        http()
    }, [])

    const returnText = () => {
        return "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur soluta enim labore eaque, harum ratione suscipit illo officia autem possimus quia consequuntur ex numquam, earum deserunt nihil non, velit sequi?"
    }

  return (
    <main>
      <section className="card-slider">
        {
            people.map((item, i) => (
                <Card key={`${item.name}${i}`} titulo={item.name} subtitulo={item.homeworld} texto={returnText()} url={item.url}/>
            ))
        }
      </section>
    </main>
  )
}

export default Home
