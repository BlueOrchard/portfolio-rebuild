import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { useEffect } from 'react'
import { selectAndFilterListings, resetFilterAndListings } from '../../store/actions'

function PortfolioFilterOptions(){
    const dispatch = useDispatch()
    const portfolioTags = useSelector(state => state.portfolioCatalog.tags)
    const selectedTags = useSelector(state => state.portfolioCatalog.selectedTags)

    // Fires redux function to select filters and also filter the listings
    function filterPosts(ID){
        dispatch(selectAndFilterListings(ID))
    }

    // Fires redux function to reset filters
    function resetFilter(){
        dispatch(resetFilterAndListings())
    }

    return (
        <div className="filter-options">
            <h3>Filter by Tag</h3>
            <div className="filter-container">
                {portfolioTags.map((tag) => (
                    // Slight copy of Tag.js, but needed for more extensibility and 
                    // for performance reasons (no need to filter array)
                    <div 
                        onClick={() => filterPosts(tag.tagID)} 
                        key={tag.tagID} 
                        className="single-tag-filter">
                        <div className={"single-tag " + 
                            (selectedTags.includes(tag.tagID) ? "selected" : "") 
                        }>
                            {tag.name}
                        </div>
                    </div>
                ))}
                <div 
                    onClick={() => resetFilter()}
                    className="reset-filter">
                    <i className="fas fa-undo"></i> Reset Filter
                </div>

                <div className="github">
                    <div className="icon">
                        <i className="fab fa-github"></i>
                    </div>
                    <div className="text">
                        Check out my <a href="https://github.com/BlueOrchard" target="_blank">GitHub <i className="fas fa-external-link-alt"></i></a> for more ongoing and miscellaneous projects!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioFilterOptions