import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostsAsyncGet } from '../../store/actions'
import PortfolioFilterOptions from './PortfolioFilterOptions'

import SinglePost from './PortfolioListSinglePost'

function PortfolioList(){
    const dispatch = useDispatch()
    const posts = useSelector(state => state.portfolioCatalog.filteredPosts)

    useEffect(() => {
        dispatch(fetchPostsAsyncGet())
    }, [dispatch])

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
                    {posts.map(post => (
                        <SinglePost key={post.id} postData={post} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PortfolioList;