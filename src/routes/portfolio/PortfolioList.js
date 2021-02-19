import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostsAsyncGet } from '../../store/actions'

function PortfolioList(){
    const dispatch = useDispatch()
    const posts = useSelector(state => state.portfolioListings.data)

    useEffect(() => {
        dispatch(fetchPostsAsyncGet())
    }, [dispatch])

    return (
        <div className="page-component">
            {posts.map(post => (
                <div key={post.id} className="singlePost">
                    {post.title.rendered}
                </div>
            ))}
        </div>
    )
}

export default PortfolioList;