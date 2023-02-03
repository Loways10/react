
import Card from '../Card/Index'
import "./styles.css"

const List = () => {
    const a = ["Akio", "Kenji", "Sayumi"]

    return(
        <ul className='card-list'>
            {a.map((t) => (
                <Card data={t.data} tarefa={t.tarefa}/>
            ))}
        </ul>
    )
}

export default List