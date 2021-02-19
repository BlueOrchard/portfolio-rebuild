import { FETCH_POSTS } from './actionTypes'
import axios from 'axios'

export const fetchPosts = data => ({
    type: FETCH_POSTS,
    payload: {
        data
    }
})

export const fetchPostsAsyncGet = () => {
    return function(dispatch){
        return axios.get('https://richey.tech/wp-json/wp/v2/posts/?per_page=100')
        .then((response) => dispatch(fetchPosts(response.data)))
        .catch((error) => console.log(error))
    }
}