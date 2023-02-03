import Button from "../Button/Index"
import Input from "../Input/Index"
import "./styles.css"

const Form = () => {
    const F = (e) => {
        e.preventDefault()
        console.log(e.target[0].value)
        console.log(e.target[1].value)
    }
    return(
        <form className="task-form" onSubmit={F}>
            <Input type="text" required/>
            <Input type="date" required />
            <Button text="Agendar" type="submit"/>
        </form>
    )
}

export default Form