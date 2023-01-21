import React, { useState, useEffect } from 'react'

const ColorButton = () => {
    const [color, setColor] = useState()

    useEffect(() => {
        document.body.style.backgroundColor = color
        document.title = color
    }, [color])

    return(
        <div>
            <input type="color" onChange={(e) => setColor(e.target.value)} />
        </div>
    )
}

export default ColorButton