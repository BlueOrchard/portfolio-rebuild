type BasicActionTypes = {
    type: string,
    payload?: any
}

type PostStateTypes = {
    posts: object[],
    filteredPosts: object[],
    tags: object[],
    selectedTags: object[]
}
