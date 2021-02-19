import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Tag from '../../common/Tag'

function SinglePost(props){
    const singlePost = props.postData
    const [media, setMedia] = useState("")

    useEffect(() => {
        async function getMediaInfo(){
            const imageData = await axios.get("https://api.richey.tech/wp-json/wp/v2/media/" + singlePost.featured_media)
            setMedia(imageData.data.media_details.sizes.medium.source_url)
        }
        getMediaInfo()
    }, [])

    return(
        <Link to={"/portfolio/" + singlePost.slug} className="single-post">
            <div className="thumbnail">
                <img src={media} />
            </div>
            <div className="title">
                <h3>{singlePost.title.rendered}</h3>
            </div>
            <div className="description">
                <p dangerouslySetInnerHTML={{__html: singlePost.excerpt.rendered}}></p>
            </div>
            <div className="tags">
                {singlePost.tags.map((tag) => (
                    <Tag key={tag} tagID={tag} />
                ))}
            </div>
        </Link>
    )
}

export default SinglePost