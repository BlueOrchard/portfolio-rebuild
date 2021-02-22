import axios from 'axios'
import { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link, useParams } from 'react-router-dom'
import Image from '../../common/Image'
import Loading from '../../common/Loading'
import Tag from '../../common/Tag'

function PortfolioSingle(){
    const params = useParams()
    const [singlePost, setsinglePost] = useState({})
    const [activeTab, setactiveTab] = useState("DESCRIPTION")

    useEffect(() => {
        window.scrollTo(0, 0)
        async function getSinglePost(){
            const singlePostRequest = await axios.get('https://api.richey.tech/wp-json/wp/v2/posts?slug=' + params.slug)
            setsinglePost(singlePostRequest.data[0])
        }
        getSinglePost()
    }, [])

    function setTab(tab){
        setactiveTab(tab)
    }

    return(
        <div className="page-component single-page">
            {Object.entries(singlePost).length > 0 &&
                <div className="post-fetched">
                    <div className="header-image">
                        <Image mediaID={singlePost.featured_media} size="full" />
                    </div>
                    <div className="inner-grid">
                        <div className="sidebar-information">
                            <div className="inner-sidebar">
                                <Image mediaID={singlePost.featured_media} size="full" />
                                <div className="tags">
                                    {singlePost.tags && singlePost.tags.map((tag) => (
                                        <Tag key={tag} tagID={tag} />
                                    ))}
                                </div>
                                <Link className="contact-button" to="/contact">
                                    Contact Me <i className="fas fa-paper-plane"></i>
                                </Link>
                            </div>
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
                                <span onClick={() => setTab("DESCRIPTION")} className={activeTab == "DESCRIPTION" ? "active" : ""}>Description</span>
                                {singlePost.acf.image_gallery &&
                                    <span onClick={() => setTab("MEDIA")} className={activeTab == "MEDIA" ? "active" : ""}>Media</span>
                                }
                            </div>
                            <div className="tab-content">
                                {activeTab == "DESCRIPTION" &&
                                    <div className="description">
                                        <div dangerouslySetInnerHTML={{__html: singlePost.content.rendered}}></div>
                                    </div>
                                }
                                {activeTab == "MEDIA" && singlePost.acf.image_gallery &&
                                    <div className="media">
                                        {singlePost.acf.image_gallery.map((image, key) => (
                                            <LazyLoadImage key={key} src={image.url} effect="opacity"/>
                                        ))}
                                    </div>
                                }
                            </div>
                            
                        </div>
                    </div>
                </div>
            }
            {Object.entries(singlePost).length <= 0 &&
                <Loading />
            }
        </div>
    )
}

export default PortfolioSingle;