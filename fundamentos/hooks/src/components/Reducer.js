import React, { useReducer, useState } from 'react'

const Reducer = () => {
    // const [number, setNumber] = useState(0)

    // const exe = (estado, acao) => {
    //     switch(acao){
    //         case 'decrementar':
    //             return estado -1
    //         case 'incrementar':
    //             return estado +1
    //     }
    // }
    // const [contador, executar] = useReducer(exe, 0)
    
    const reducer = (state, action) => {
        switch(action){
            case 'decrement':
                return {...state, count: state.count - 1}
            case 'increment':
                return {...state, count: state.count + 1}
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        showText: true
    })


  return (
    <div>
        <button onClick={() => dispatch('decrement')}>-</button>
        {state.count}
        <button onClick={() => dispatch('increment')}>+</button>
        {state.showText && <p> Exibindo texto </p>}
    </div>
  )
}

export default Reducer