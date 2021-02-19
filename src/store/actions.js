import { FETCH_POSTS, FETCH_TAGS } from './actionTypes'
import axios from 'axios'

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