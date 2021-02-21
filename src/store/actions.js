import { FETCH_POSTS, FETCH_TAGS, FILTER_POSTS, SELECT_FILTER } from './actionTypes'
import axios from 'axios'

// Initial fetch for listings
export const fetchPosts = data => ({
    type: FETCH_POSTS,
    payload: {
        data
    }
})

export const fetchPostsAsyncGet = () => {
    return function(dispatch){
        return axios.get('https://api.richey.tech/wp-json/wp/v2/posts/?per_page=100')
        .then((response) => dispatch(fetchPosts(response.data)))
        .catch((error) => console.log(error))
    }
}
// end Initial fetch for listings

// Initial fetch for tags
export const fetchTags = data => ({
    type: FETCH_TAGS,
    payload: {
        data
    }
})

export const fetchTagsAsyncGet = () => {
    return function(dispatch){
        return axios.get('https://api.richey.tech/wp-json/wp/v2/tags?per_page=100')
        .then((response) => dispatch(fetchTags(response.data)))
        .catch((error) => console.log(error))
    }
}
// end  Initial fetch for tags

// Filter listings based on tags
export const selectFilter = data => ({
    type: SELECT_FILTER,
    payload: {
        data
    }
})

export const filterListings = () => ({
    type: FILTER_POSTS,
})


export const selectAndFilterListings = data => {
    return function(dispatch){
        dispatch(selectFilter((data)))
        dispatch(filterListings())
    }
}
// end Filter listings based on tags