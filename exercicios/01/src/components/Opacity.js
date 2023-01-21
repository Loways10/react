import React, { useState, useEffect } from 'react'

const Opacity = () => {
    const [opacity, setOpacity] = useState()

    useEffect(() => {
        // document.div.style.background = opacity
        document.querySelector('body').style.opacity = opacity
    }, [opacity])
    
    return(
        <div>
            <input type="range" min={0} max={1} step={0.1} onChange={(e) => setOpacity(e.target.value)} />
        </div>
        
    )
}

export default Opacity