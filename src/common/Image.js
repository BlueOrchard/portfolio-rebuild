import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Media(props){
    const mediaID = props.mediaID
    const size = props.size
    const [media, setMedia] = useState("")

    useEffect(() => {
        async function getMediaInfo(){
            const imageData = await axios.get("https://api.richey.tech/wp-json/wp/v2/media/" + mediaID)
            setMedia(imageData.data.media_details.sizes[size].source_url)
        }
        getMediaInfo()
    }, [])

    return(
        <LazyLoadImage 
            src={media}
            effect="opacity" />
    )
}

export default Media