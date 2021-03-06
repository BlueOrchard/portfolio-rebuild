import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Image from '../../common/Image'
import Tag from '../../common/Tag'
import PortfolioSkeleton from './PortfolioSkeleton'
import { pageSlide, pageTransition } from '../../util/animations'

function PortfolioSingle(){
    const params = useParams()
    const [singlePost, setsinglePost] = useState({})
    const [activeTab, setactiveTab] = useState("DESCRIPTION")

    useEffect(() => {
        document.title = "Loading..."

        async function getSinglePost(){
            const singlePostRequest = await axios.get('https://api.richey.tech/wp-json/wp/v2/posts?slug=' + params.slug)
            setsinglePost(singlePostRequest.data[0])

            document.title = singlePostRequest.data[0].title.rendered
        }
        getSinglePost()
    }, [])

    function setTab(tab){
        setactiveTab(tab)
    }

    return(
        <div className="page-component single-page">
            {Object.entries(singlePost).length <= 0 && 
                <PortfolioSkeleton />
            }
            {Object.entries(singlePost).length > 0 &&
                <div className="post-fetched">
                    <div className="header-image">
                        <Image mediaID={singlePost.featured_media} size="full" />
                    </div>
                    <div className="inner-grid">
                        <div className="sidebar-information">
                            <div className="inner-sidebar">
                                <Image 
                                    mediaID={singlePost.featured_media} 
                                    size="full" 
                                    defaultHeight={160}
                                    />
                                <div className="breadcrumb">
                                    <Link to="/">Home</Link>
                                    »
                                    <Link to="/portfolio">Portfolio</Link>
                                    »
                                    <span>{singlePost.title.rendered}</span>
                                </div>
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
                                {singlePost.acf.github_url &&
                                    <a target="_blank" href={singlePost.acf.github_url}>Source Code <i className="fas fa-code-branch"></i></a>
                                }
                            </div>
                            <div className="tab-content">
                                <AnimatePresence exitBeforeEnter>
                                    {activeTab == "DESCRIPTION" &&
                                        <motion.div 
                                            key={1}
                                            initial="initial"
                                            animate="in"
                                            exit="out"
                                            variants={pageSlide}
                                            transition={pageTransition}
                                            className="description">
                                                <div dangerouslySetInnerHTML={{__html: singlePost.content.rendered}}></div>
                                        </motion.div>
                                    }
                                    {activeTab == "MEDIA" && singlePost.acf.image_gallery &&
                                        <motion.div 
                                            key={2}
                                            initial="initial"
                                            animate="in"
                                            exit="out"
                                            variants={pageSlide}
                                            transition={pageTransition}
                                            className="media">
                                                {singlePost.acf.image_gallery.map((image, key) => (
                                                    <Image 
                                                        key={key}
                                                        directSource={image.url}
                                                        defaultHeight={200} />
                                                ))}
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </div>
                            
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default PortfolioSingle;