import { FETCH_TAGS, SELECT_FILTER } from '../../actionTypes'

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
        case SELECT_FILTER:
            const tagID = action.payload.data
            let tagArray = [ ...state.selectedTags]

            if(tagArray.includes(tagID)){
                tagArray = tagArray.filter((tag) => {
                    return tag !== tagID
                })
            } else {
                tagArray.push(tagID)
            }

            return {
                ...state,
                selectedTags: tagArray
            }
        default:
            return state
    }
}

export default portfolioTags