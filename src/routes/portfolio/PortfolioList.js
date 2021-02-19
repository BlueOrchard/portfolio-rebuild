import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function PortfolioList(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: "FETCH_POSTS"})
    })

    return (
        <div className="page-component">
            PortfolioList!
        </div>
    )
}

export default PortfolioList;