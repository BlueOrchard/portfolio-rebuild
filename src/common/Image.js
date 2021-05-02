import { useState, useEffect } from 'react'
import axios from 'axios'
import { useInView } from 'react-intersection-observer'
import PropTypes from 'prop-types'

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
            }
        }
        getMediaInfo()
    }, [mediaID])

    function setImageLoaded(){
        setLoaded(true)
    }

    return(
        <div className={`lazy-image ${mediaID}`} ref={ref} style={{minHeight: containerHeight}}>
            {!loaded &&
                <div 
                    data-testid="loader"
                    className="image-loader"></div>
            }
            {(inView || loaded) &&
                <img 
                    data-testid="loaded-image"
                    className={loaded ? "loaded" : "loading"}
                    onLoad={setImageLoaded}
                    src={media} 
                />
            }
        </div>
    )
}

Image.propTypes = {
    mediaID: PropTypes.number,
    size: PropTypes.string,
    directSource: PropTypes.string,
    containerHeight: PropTypes.string
}

export default Image