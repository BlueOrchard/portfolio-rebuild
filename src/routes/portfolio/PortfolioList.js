import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostsAsyncGet } from '../../store/actions'
import PortfolioFilterOptions from './PortfolioFilterOptions'

import SinglePost from './PortfolioListSinglePost'

function PortfolioList(){
    const dispatch = useDispatch()
    const posts = useSelector(state => state.portfolioListings.data)

    useEffect(() => {
        dispatch(fetchPostsAsyncGet())
    }, [dispatch])

    return (
        <div className="page-component portfolio-list">
            <div className="filter-options">
                <PortfolioFilterOptions />
            </div>
            <div className="all-posts">
                {posts.map(post => (
                    <SinglePost key={post.id} postData={post} />
                ))}
            </div>
        </div>
    )
}

export default PortfolioList;