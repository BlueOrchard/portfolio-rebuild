import { FETCH_POSTS, FILTER_POSTS } from '../../actionTypes'

const portfolioListings: any = (state: PostStateTypes, action: any) => {
    switch(action.type){
        // Map initial state to the posts
        case FETCH_POSTS: {
            return {
                ...state,
                posts: action.payload.data,
                filteredPosts: action.payload.data
            }
        }
        // Filter is selected in portfolioTags.js reducer
        case FILTER_POSTS: {
            let filteredPostsLocal = state.posts
            const tagFilter = state.selectedTags

            filteredPostsLocal = filteredPostsLocal.filter((post: any) => {
                return tagFilter.every(v => post.tags.includes(v))
            })

            return {
                ...state,
                filteredPosts: filteredPostsLocal
            }
        }
        default: {
            return state
        }
    }
}

export default portfolioListings