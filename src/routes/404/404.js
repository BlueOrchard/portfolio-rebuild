import { useEffect } from 'react'

function Page404(){
    useEffect(() => {
        document.title = "404 Not Found"
    }, [])

    return(
        <div className="page-404">
            Nothing Found!
        </div>
    )
}

export default Page404;