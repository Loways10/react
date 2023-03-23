import './index.css'
import React from 'react'

import { useAxios } from '../hooks/useAxios'

import Post from '../components/Post'
import Postar from '../components/Postar'

const Home = () => {
    const user = {
        id: 2051991,
        username: 'Loways',
        avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/BR/en/99/UP2097-CUSA00080_00-AV00000000000001/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=336&h=336',
        auth: '^lw%V2voS5HjeLfEghE2YWw4U$cv0pVj2Pd8LzFQLilkpNt^sQ'
    }

    const {data, isLoading, error} = useAxios({url: 'posts', method: 'get'})
    const posts = data.hasOwnProperty('data') ? data.data.results : []
    console.log(posts)

  return (
    <main>
        <Postar user={user} />
        <article>
            {
                isLoading &&
                <div>
                    Loading . . .
                </div>

            }
            {
                posts &&
                posts.map((item) => (
                    <Post key={item.id} user={user} post={item}/>
                ))
            }
        </article>
    </main>
  )
}

export default Home
