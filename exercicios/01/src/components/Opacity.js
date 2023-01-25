const Opacity = ({setOpacity}) => {    
    return(
        <div>
            <input type="range" min={0} max={1} step={0.1} onChange={(e) => setOpacity(e.target.value)} />
        </div>
        
    )
}

export default Opacity