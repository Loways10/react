import React, {useState} from 'react'

const Condicional = () => {
    const [status, setStatus] = useState(false)
    const [nome, setNome] = useState('Pedro')
    return(
        <div>
            <h1>Condicional JSX</h1>
            <div>
                {
                    status && <p>O Status é verdadeiro</p>
                }
                {
                    !status && <p>O Status é falso</p>
                }
                {
                    nome === 'Pedro' && <p>Olá, {nome}</p>
                }
            </div>
            <div>
                <button onClick={(e) => setStatus(!status)} >Alterar Status</button>
                <button onClick={(e) => setNome('João')} >Alterar Nome</button>
            </div>
            <div>
                {
                    status
                        ?
                            <div>
                                <header>
                                    <h3>Título</h3>
                                </header>
                                <main>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia maiores dolores quia consequatur excepturi nemo perspiciatis nam vero, iure quis pariatur possimus atque, est reprehenderit molestias esse ea labore tempore?</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia maiores dolores quia consequatur excepturi nemo perspiciatis nam vero, iure quis pariatur possimus atque, est reprehenderit molestias esse ea labore tempore?</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia maiores dolores quia consequatur excepturi nemo perspiciatis nam vero, iure quis pariatur possimus atque, est reprehenderit molestias esse ea labore tempore?</p>
                                </main>
                                <footer>
                                    <p>Todos os direitos reservados</p>
                                </footer>
                            </div>
                        :
                            <div>
                                <p>Carregando...</p>
                            </div>
                }
            </div>
        </div>
    )
}

export default Condicional