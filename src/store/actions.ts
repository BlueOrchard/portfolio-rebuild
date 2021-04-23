import { AT } from './actionTypes'
import axios from 'axios'
import { Dispatch } from 'redux'

// Action Types
interface BasicActionObject {
    type: 
        | AT.FETCH_POSTS 
        | AT.FETCH_TAGS 
        | AT.SELECT_FILTER
    payload: any
}

interface BasicActionNull {
    type: 
        | AT.RESET_FILTER 
        | AT.FILTER_POSTS
}

export type BasicActionTypes = 
    | BasicActionObject
    | BasicActionNull


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
export const fetchPosts = (data: object): BasicActionObject => ({
    type: AT.FETCH_POSTS,
    payload: {
        data
    }
})

export const fetchTags = (data: object): BasicActionObject => ({
    type: AT.FETCH_TAGS,
    payload: {
        data
    }
})

export const selectFilter = (data: number): BasicActionObject => ({
    type: AT.SELECT_FILTER,
    payload: {
        data
    }
})

export const filterListings = (): BasicActionNull => ({
    type: AT.FILTER_POSTS,
})

export const resetFilter = (): BasicActionNull => ({
    type: AT.RESET_FILTER
})
