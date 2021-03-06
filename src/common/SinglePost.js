import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Image from './Image'
import Tag from './Tag'
import {pageTransition, popIn} from '../util/animations'
import PropTypes from 'prop-types'

function SinglePost(props){
    const singlePost = props.postData

    return(
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            layout
            variants={popIn}
            transition={pageTransition}
            className="single-post"
        >
            <Link to={"/portfolio/" + singlePost.slug}>
                <div className="thumbnail">
                    <Image mediaID={singlePost.featured_media} size="full"/>
                </div>
                <div className="content">
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
                </div>
            </Link>
        </motion.div>
       
    )
}

SinglePost.propTypes = {
    postData: PropTypes.object
}

export default SinglePost