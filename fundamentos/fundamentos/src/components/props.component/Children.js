const Children = ({children, valor}) => {
    return(
        <div>
            <div>
                {valor}
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Children