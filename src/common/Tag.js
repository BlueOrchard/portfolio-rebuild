import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function Tag(props){
    const tagPropID = props.tagID
    const portfolioTags = useSelector(state => state.portfolioCatalog.tags)
    const [tagData, setTagData] = useState([])

    useEffect(() => {
        setTagData(portfolioTags.filter(tag => {
            return tag.tagID === tagPropID
        }))
    }, [portfolioTags])

    return(
        <div className="inner-tag">
            { tagData.map(tag => (
                <div key={tag.tagID} className={"single-tag " + tag.slug}>
                    {tag.name}
                </div>
            )) }
        </div>
    )
}

Tag.propTypes = {
    tagID: PropTypes.number
}

export default Tag;