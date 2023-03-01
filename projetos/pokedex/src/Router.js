import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Pokemons from './components/pages/page.pokemon/Pokemons'

const Router = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='' element={<Pokemons />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
