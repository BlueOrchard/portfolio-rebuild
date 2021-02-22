import { Link } from 'react-router-dom'
import Image from './Image'
import Tag from './Tag'

function SinglePost(props){
    const singlePost = props.postData

    return(
        <Link to={"/portfolio/" + singlePost.slug} className="single-post">
            <div className="thumbnail">
                <Image mediaID={singlePost.featured_media} size="medium"/>
            </div>
            <div className="title">
                <h3>{singlePost.title.rendered}</h3>
            </div>
            <div className="description">
                <p dangerouslySetInnerHTML={{__html: singlePost.excerpt.rendered}}></p>
            </div>
            <div className="tags">
                {singlePost.tags && singlePost.tags.map((tag) => (
                    <Tag key={tag} tagID={tag} />
                ))}
            </div>
        </Link>
    )
}

export default SinglePost