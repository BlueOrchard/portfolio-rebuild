// Import React-Router modules
import {
    Switch,
    Route,
} from "react-router-dom";

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTagsAsyncGet, fetchPostsAsyncGet } from './store/actions'
import routes from './routes';


function App(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPostsAsyncGet())
        dispatch(fetchTagsAsyncGet())
    }, [dispatch])

    return (
        <Switch>
            {routes.map(({path, Component}) => (
                <Route key={path} exact path={path}>
                    <Component />
                </Route>
            ))}
        </Switch>
    )
}

export default App;