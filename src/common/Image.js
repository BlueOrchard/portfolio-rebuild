import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Media(props){
    const mediaID = props.mediaID
    const size = props.size
    const [media, setMedia] = useState("")

    useEffect(() => {
        async function getMediaInfo(){
            if(mediaID){
                await axios.get("https://api.richey.tech/wp-json/wp/v2/media/" + mediaID)
                    .then((imageData) => {
                        setMedia(imageData.data.media_details.sizes[size].source_url)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }
        getMediaInfo()
    }, [mediaID])

    return(
        <LazyLoadImage 
            src={media}
            effect="opacity" />
    )
}

export default Media