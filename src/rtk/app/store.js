import {configureStore} from "@reduxjs/toolkit"
import NavReducer from "../features/Nav"

const store = configureStore({
    reducer : {
        nav : NavReducer,
    }
})
export default store