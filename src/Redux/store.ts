import {combineReducers, configureStore} from "@reduxjs/toolkit";
import home, {homeType} from "./home";

const reducers = combineReducers({
    home
})

export const store = configureStore({
    reducer: reducers
})

export type RootState = {
    home: homeType
};