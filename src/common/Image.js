import { useState, useEffect } from 'react'
import axios from 'axios'
import { useInView } from 'react-intersection-observer'

function Image(props){
    const mediaID = props.mediaID
    const size = props.size
    const directSource = props.directSource
    const containerHeight = props.defaultHeight

    const [media, setMedia] = useState("")
    const [loaded, setLoaded] = useState(false)

    const { ref, inView, entry } = useInView({
        threshold: 0
    })

    useEffect(() => {
        if(directSource){
            setMedia(directSource)
        }

        async function getMediaInfo(){
            if(mediaID){
                await axios.get("https://api.richey.tech/wp-json/wp/v2/media/" + mediaID)
                    .then((imageData) => {
                        let image = imageData.data.media_details.sizes[size]

                        setMedia(image.source_url)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }
        getMediaInfo()
    }, [mediaID])

    function setImageLoaded(){
        setLoaded(true)
    }

    return(
        <div className="lazy-image" ref={ref} style={{minHeight: containerHeight}}>
            {!loaded &&
                <div className="image-loader"></div>
            }
            {(inView || loaded) &&
                <img 
                    className={loaded ? "loaded" : "loading"}
                    onLoad={setImageLoaded}
                    src={media} 
                />
            }
        </div>
    )
}

export default Image