import Card from '../Card/Index'

const List = () => {
    return(
        <ul className='card-list'>
            <Card data="24-03-2023" tarefa="Treinar"/>
            <Card data="30-03-2023" tarefa="Aniversário Lucas"/>
        </ul>
    )
}

export default List