import Button from "../Button/Index"
import Input from "../Input/Index"

const Form = () => {
    return(
        <form className="task-form">
            <Input type="text" required/>
            <Input type="date" required />
            <Button text="Agendar"/>
        </form>
    )
}

export default Form