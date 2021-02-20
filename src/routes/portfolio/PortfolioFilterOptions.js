import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function PortfolioFilterOptions(){
    const dispatch = useDispatch()
    const portfolioTags = useSelector(state => state.portfolioTags.tags)

    useEffect(() => {
        
    }, [])

    return (
        <div className="filter-options">
            <h3>Filter by Tag:</h3>
            <div className="filter-container">
                {portfolioTags.map((tag) => (
                    // Slight copy of Tag.js, but needed for more extensibility and 
                    // performance reasons (no need to filter array)
                    <div key={tag.tagID} className="single-tag-filter">
                        <div className="single-tag">
                            {tag.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PortfolioFilterOptions