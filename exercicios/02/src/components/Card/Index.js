import {useState} from 'react'
import Button from '../Button/Index'
import './styles.css'

const Card = ({data, tarefa}) => {
    const [active, setActive] = useState(false)
    return(
        <li className={`default-li ${active ? "bg-color-active" : "bg-color-default"}`}>
            <p>{data}</p>
            <p>{tarefa}</p>
            <Button onClick={() => (setActive(true))} text={`${active ? "Realizar" : "Realizado"} `} />
        </li>

    )
}

export default Card