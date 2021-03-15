// Import Routes
import Home from './routes/home/Home'
import Page404 from './routes/404/404'
import Contact from './routes/contact/Contact'
import PortfolioList from "./routes/portfolio/PortfolioList";
import PortfolioSingle from "./routes/portfolio/PortfolioSingle";

const routes = [
    {
        name: "Homepage",
        path: "/",
        Component: Home
    },
    {
        name: "Portfolio List",
        path: "/portfolio",
        Component: PortfolioList
    },
    {
        name: "Portfolio Single Page",
        path: "/portfolio/:slug",
        Component: PortfolioSingle
    },
    {
        name: "Contact",
        path: "/contact",
        Component: Contact
    },
    {
        name: "404",
        path: "*",
        Component: Page404
    }
]

export default routes