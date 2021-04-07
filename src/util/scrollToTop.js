import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop(props) {
    const location = props.location.pathname

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [location])

    return null;
}

export default withRouter(ScrollToTop);
