import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Postagem from './pages/Postagem'
import Profile from './pages/Profile'

const Router = () => {
    const user = {
        id: 2051991,
        username: 'Loways',
        avatar: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/BR/en/99/UP2097-CUSA00080_00-AV00000000000001/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=336&h=336',
        auth: '^lw%V2voS5HjeLfEghE2YWw4U$cv0pVj2Pd8LzFQLilkpNt^sQ'
    }

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home user={user}/>} />
            <Route path='/profile/:userID' element={<Profile user={user}/>}/>
            <Route path='/post/:id' element={<Postagem user={user}/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
