import { useEffect, useState } from "react"

function Stars(props){
    const starCount = props.count
    const [starMap, setStarMap] = useState([])

    useEffect(() => {
        let starMapBuilder = []

        for(let i = 0; i < starCount; i++){
            let starProperty = {
                key: i,
                type: Math.floor(Math.random() * 3),
                xpos: Math.floor(Math.random() * 100),
                ypos: Math.floor(Math.random() * 100),
            }

            starMapBuilder.push(starProperty)
        }
        
        setStarMap(starMapBuilder)

        return () => {
            setStarMap([])
        }
    }, [])

    return(
        <>
            {starMap.map(star => (
                <div 
                    key={star.key} 
                    className={`star star-type${star.type}`}
                    style={{
                        bottom: star.xpos + "%",
                        left: star.ypos + "%"
                    }}
                    >
                </div>
            ))}
        </>
    )
}

export default Stars;