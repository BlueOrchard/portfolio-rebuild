import { FETCH_TAGS, RESET_FILTER, SELECT_FILTER } from '../../actionTypes'

const portfolioTags = (state: PostStateTypes, action: BasicActionTypes) => {
    switch (action.type) {
        case FETCH_TAGS:
            return {
                ...state,
                tags: action.payload.data.map((tag: any) => {
                    return {
                        "tagID" : tag.id,
                        "name" : tag.name,
                        "slug" : tag.slug
                    }
                })
            }
        // Actual filtering happens in portfolioListings.js reducer
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
        case RESET_FILTER:
            return {
                ...state,
                selectedTags: []
            }
        default:
            return state
    }
}

export default portfolioTags