import { FETCH_POSTS } from '../actionTypes'

const initialState = {}

const portfolioListings = (state = initialState, action) => {
    switch(action.type){
        case FETCH_POSTS: {
            console.log("fetching posts!")
        }
        default: {
            return state
        }
    }
}

export default portfolioListings;