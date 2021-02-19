import { FETCH_POSTS } from '../actionTypes'

const initialState = {
    data: []
}

const portfolioListings = (state = initialState, action) => {
    switch(action.type){
        // Map initial state to the posts
        case FETCH_POSTS: {
            state = action.payload
            return action.payload
        }
        default: {
            return state
        }
    }
}

export default portfolioListings;