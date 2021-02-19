import { FETCH_TAGS } from '../actionTypes'

const initialState = []

const portfolioTags = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TAGS:
            return action.payload.data.map((tag) => {
                return {
                    "tagID" : tag.id,
                    "name" : tag.name,
                    "slug" : tag.slug
                }
            })
        default:
            return state
    }
}

export default portfolioTags