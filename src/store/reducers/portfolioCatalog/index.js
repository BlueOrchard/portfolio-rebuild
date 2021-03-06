import reduceReducers from 'reduce-reducers';
import portfolioTags from './portfolioTags'
import portfolioListings from './portfolioListings'

const initialState = {
    posts: [],
    filteredPosts: [],
    tags: [],
    selectedTags: []
}

const portfolioReducer = reduceReducers(initialState, portfolioListings, portfolioTags)

export default portfolioReducer;