const Button = () => {
    const handleBnt = (e) => {
        console.log('Clicou em mim')
        console.log(e.target)
    }

    const texto = () => {
        const p = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur necessitatibus unde harum deserunt illo repellendus vitae quis, minima saepe esse at provident fugit et voluptate, voluptates distinctio hic corporis autem?'
        return p
    }

    return(
        <div>
            <div>
                <button onClick={handleBnt}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log('Função Inline')}>Função Inline</button>
            </div>
            <div>
                <button onClick={(e) => {
                    console.log('Bloco')
                    e.target.classList.add('Evento')
                }}>Bloco inLine</button>
            </div>
            {texto()}
        </div>
    )
}

export default Button