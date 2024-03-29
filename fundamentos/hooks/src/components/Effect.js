import { useEffect, useState } from "react"

const Effect = () => {
    const [nome, setNome] = useState()
    const [salario, setSalario] = useState(1000)
    const [vendas, setVendas] = useState(0)

    useEffect(() => {
        console.log('Utilizando useEffect')
    }, [])

    useEffect(() => {
       document.title = nome
    }, [nome])

    useEffect(() => {
        setSalario( s => s + (vendas * 1.89))
    }, [vendas])

    useEffect(() => {
        console.log('fui chamado a toa')
    })

    return(
        <div>
            <h2>useEffect</h2>
            <div>
                <p>{nome}</p>
                <div>
                    <input type="text" onChange={(e) => setNome(e.target.value)} />
                </div>
            </div>

            <div>
                <p>R$ {salario.toFixed(2)}</p>
                <div>
                    <button onClick={() => setVendas(vendas + 1)}>Vendas: qnt {vendas}</button>
                </div>
            </div>
        </div>
    )
}

export default Effect