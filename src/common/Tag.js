import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

function Tag(props){
    const tagPropID = props.tagID
    const portfolioTags = useSelector(state => state.portfolioCatalog.tags)
    const [tagData, setTagData] = useState([])

    useEffect(() => {
        setTagData(portfolioTags.filter(tag => {
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