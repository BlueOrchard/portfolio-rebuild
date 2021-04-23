import reduceReducers from 'reduce-reducers';
import portfolioTags from './portfolioTags'
import portfolioListings from './portfolioListings'

export type PostStateTypes = {
    posts: object[],
    filteredPosts: object[],
    tags: object[],
    selectedTags: object[]
}

const initialState: PostStateTypes = {
    posts: [],
    filteredPosts: [],
    tags: [],
    selectedTags: []
}

const portfolioReducer = reduceReducers(initialState, portfolioListings, portfolioTags)

export default portfolioReducer;