import { FETCH_TAGS } from '../../actionTypes'

const portfolioTags = (state, action) => {
    switch (action.type) {
        case FETCH_TAGS:
            return {
                ...state,
                tags: action.payload.data.map((tag) => {
                    return {
                        "tagID" : tag.id,
                        "name" : tag.name,
                        "slug" : tag.slug
                    }
                })
            }
        default:
            return state
    }
}

export default portfolioTags