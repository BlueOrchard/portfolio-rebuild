import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Image from '../../common/Image'
import Tag from '../../common/Tag'

function PortfolioSingle(){
    const params = useParams()
    const [singlePost, setsinglePost] = useState({})

    useEffect(() => {
        async function getSinglePost(){
            const singlePostRequest = await axios.get('https://api.richey.tech/wp-json/wp/v2/posts?slug=' + params.slug)
            setsinglePost(singlePostRequest.data[0])
        }
        getSinglePost()
    }, [])

    return(
        <div className="page-component single-page">
            {Object.entries(singlePost).length > 0 &&
                <div className="post-fetched">
                    <div className="header-image">
                        <Image mediaID={singlePost.featured_media} size="full" />
                    </div>
                    <div className="sidebar-information">
                        <Image mediaID={singlePost.featured_media} size="medium" />
                        {singlePost.tags && singlePost.tags.map((tag) => (
                            <Tag key={tag} tagID={tag} />
                        ))}
                        <Link to="/contact">Contact Me</Link>
                    </div>
                    <div className="main-content">
                        <div className="header-single">
                            <h1>{singlePost.title.rendered}</h1>
                            {singlePost.acf.url &&
                                <a target="_blank" href={singlePost.acf.url}>Visit Website</a>
                            }
                        </div>
                        <p dangerouslySetInnerHTML={{__html: singlePost.content.rendered}}></p>
                    </div>
                </div>
            }
        </div>
    )
}

export default PortfolioSingle;