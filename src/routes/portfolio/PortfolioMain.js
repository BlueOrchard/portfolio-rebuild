import PortfolioList from './PortfolioList'
import PortfolioSingle from './PortfolioSingle'

import { useRouteMatch, Switch, Route } from 'react-router-dom'

function Portolio(){
    const match = useRouteMatch();

    return(
        <div className="page-component">
            <Switch>
                <Route exact path={`${match.url}`}>
                    <PortfolioList />
                </Route>
                <Route path={`${match.url}/:slug`}>
                    <PortfolioSingle />
                </Route>
            </Switch>
        </div>
    )
}

export default Portolio;