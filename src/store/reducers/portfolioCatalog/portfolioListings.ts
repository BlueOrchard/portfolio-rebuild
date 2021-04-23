import { Reducer } from 'redux'
import { PostStateTypes } from '.'
import { BasicActionTypes } from '../../actions'
import { AT } from '../../actionTypes'

const portfolioListings: Reducer = (state: PostStateTypes, action: BasicActionTypes) => {
    switch(action.type){
        case AT.FETCH_POSTS: {
            return {
                ...state,
                posts: action.payload.data,
                filteredPosts: action.payload.data
            }
        }
        // Filter is selected in portfolioTags.js reducer
        case AT.FILTER_POSTS: {
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