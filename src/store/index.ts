import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk, { ThunkMiddleware } from 'redux-thunk'
import rootReducer from "./reducers"

const store = createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(thunk as ThunkMiddleware)
    )
)

export default store

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector