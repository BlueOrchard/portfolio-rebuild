function ConfidenceBar(props){
    const name = props.name
    const value = props.value
    const icon = props.icon

    return(
        <div className="confidence-bar">
            <div className="name">
                {icon && 
                    <i className={icon}></i>
                }
                {name}
            </div>
            <div className="confidence">
                <div className={`inner-confidence width-${value}`}></div>
            </div>
        </div>
    )
}

export default ConfidenceBar