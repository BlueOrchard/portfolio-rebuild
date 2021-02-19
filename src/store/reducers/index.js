import { combineReducers } from "redux";
import portfolioListings from './portfolioListings'
import portfolioTags from './portfolioTags'

export default combineReducers({ 
    portfolioListings,
    portfolioTags
})