const ColorButton = ({handleColor}) => {
    return(
        <div>
            <input type="color" onChange={(e) => handleColor(e.target.value)} />
        </div>
    )
}

export default ColorButton