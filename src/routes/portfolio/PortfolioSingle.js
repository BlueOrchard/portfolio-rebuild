import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Image from '../../common/Image'
import Tag from '../../common/Tag'

function PortfolioSingle(){
    const params = useParams()
    const [singlePost, setsinglePost] = useState({})
    const [activeTab, setactiveTab] = useState("DESCRIPTION")

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
                    <div className="inner-grid">
                        <div className="sidebar-information">
                            <Image mediaID={singlePost.featured_media} size="medium" />
                            <div className="tags">
                                {singlePost.tags && singlePost.tags.map((tag) => (
                                    <Tag key={tag} tagID={tag} />
                                ))}
                            </div>
                            <Link className="contact-button" to="/contact">
                                Contact Me <i className="fas fa-paper-plane"></i>
                            </Link>
                        </div>
                        <div className="main-content">
                            <div className="header-single">
                                <h1>{singlePost.title.rendered}</h1>
                                {singlePost.acf.url &&
                                    <a className="visit-website" target="_blank" href={singlePost.acf.url}>
                                        Visit Website <i className="fas fa-external-link-alt"></i>
                                    </a>
                                }
                            </div>
                            <div className="tab-selector">
                                <span className={activeTab == "DESCRIPTION" ? "active" : ""}>Description</span>
                                <span>Media</span>
                            </div>
                            <div className="tab-content">
                                <div className="description">
                                    <div dangerouslySetInnerHTML={{__html: singlePost.content.rendered}}></div>
                                </div>
                                <div className="gallery">

                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default PortfolioSingle;