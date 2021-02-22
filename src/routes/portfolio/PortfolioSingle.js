import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function PortfolioSingle(){
    const params = useParams()
    const [singlePost, setsinglePost] = useState({})

    useEffect(() => {
        async function getSinglePost(){
            const singlePost = await axios.get('https://api.richey.tech/wp-json/wp/v2/posts?slug=' + params.slug)
            setsinglePost(singlePost.data)
            console.log(singlePost)
        }
        getSinglePost()
    }, [])

    return(
        <div className="page-component">
            
        </div>
    )
}

export default PortfolioSingle;