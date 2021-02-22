import { useSelector } from 'react-redux'
import PortfolioFilterOptions from './PortfolioFilterOptions'

import SinglePost from './PortfolioListSinglePost'

function PortfolioList(){
    const posts = useSelector(state => state.portfolioCatalog.filteredPosts)

    return (
        <div className="page-component portfolio-list">
            <div className="portfolio-header">
                <h1>My Portfolio</h1>
                <p>Here's a collection of my previous works</p>
            </div>
            <div className="portfolio-grid">
                <div className="filter-options">
                    <PortfolioFilterOptions />
                </div>
                <div className="all-posts">
                    {Object.entries(posts).length <= 0 &&
                        <div className="no-results">No results found.</div>
                    }
                    {Object.entries(posts).length > 0 && posts.map(post => (
                        <SinglePost key={post.id} postData={post} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PortfolioList;