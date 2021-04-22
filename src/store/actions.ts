import { FETCH_POSTS, FETCH_TAGS, FILTER_POSTS, RESET_FILTER, SELECT_FILTER } from './actionTypes'
import axios from 'axios'
import { Dispatch } from 'redux'

// Thunk events
export const fetchPostsAsyncGet = () => {
    return async function(dispatch: Dispatch){
        return axios.get('https://api.richey.tech/wp-json/wp/v2/posts/?per_page=100')
        .then((response) => dispatch(fetchPosts(response.data)))
        .catch((error) => console.log(error))
    }
}

export const fetchTagsAsyncGet = () => {
    return async function(dispatch: Dispatch){
        return axios.get('https://api.richey.tech/wp-json/wp/v2/tags?per_page=100')
        .then((response) => dispatch(fetchTags(response.data)))
        .catch((error) => console.log(error))
    }
}

export const selectAndFilterListings = (data: number) => {
    return function(dispatch: Dispatch){
        dispatch(selectFilter(data))
        dispatch(filterListings())
    }
}

export const resetFilterAndListings = () => {
    return function(dispatch: Dispatch){
        dispatch(resetFilter())
        dispatch(filterListings())
    }
}

// Actions
export const fetchPosts = (data: object) => ({
    type: FETCH_POSTS,
    payload: {
        data
    }
})

export const fetchTags = (data: object) => ({
    type: FETCH_TAGS,
    payload: {
        data
    }
})

export const selectFilter = (data: number) => ({
    type: SELECT_FILTER,
    payload: {
        data
    }
})

export const filterListings = () => ({
    type: FILTER_POSTS,
})

export const resetFilter = () => ({
    type: RESET_FILTER
})
