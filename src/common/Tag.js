import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

function Tag(props){
    const tagPropID = props.tagID
    const state = useSelector(state => state.portfolioTags)
    const [tagData, setTagData] = useState([])

    useEffect(() => {
        setTagData(state.filter(tag => {
            return tag.tagID === tagPropID
        }))
    }, [])

    return(
        <div className="inner-tag">
            { tagData.map(tag => (
                <div key={tag.tagID} className="single-tag">
                    {tag.name}
                </div>
            )) }
        </div>
    )
}

export default Tag;