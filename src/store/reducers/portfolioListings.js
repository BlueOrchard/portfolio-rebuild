import { FETCH_POSTS } from '../actionTypes'

const initialState = {
    posts: [],
    filteredPosts: []
}

const portfolioListings = (state = initialState, action) => {
    switch(action.type){
        // Map initial state to the posts
        case FETCH_POSTS: {
            return {
                ...state,
                posts: action.payload.data,
                filteredPosts: action.payload.data
            }
        }
        default: {
            return state
        }
    }
}

export default portfolioListings;