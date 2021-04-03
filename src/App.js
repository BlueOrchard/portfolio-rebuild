// Import React-Router modules
import {
    Switch,
    Route,
    useLocation,
} from "react-router-dom";

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTagsAsyncGet, fetchPostsAsyncGet } from './store/actions'
import { AnimatePresence, motion } from "framer-motion"
import { pageSlide, pageTransition } from './util/animations'

import routes from './routes'


function App(){
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        dispatch(fetchPostsAsyncGet())
        dispatch(fetchTagsAsyncGet())
    }, [])

    return (
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                {routes.map(({path, Component}) => (
                    <Route key={path} exact path={path}>
                        <motion.div
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageSlide}
                        transition={pageTransition}
                        >
                            <Component />
                        </motion.div>
                    </Route>
                ))}
            </Switch>
        </AnimatePresence>
    )
}

export default App;