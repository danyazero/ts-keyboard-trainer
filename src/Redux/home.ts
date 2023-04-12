import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type homeType = {
    letters: string
    selected: string[]
}

const initialState: homeType = {
    letters: "abcdefghijklmnopqrstuvwxyz",
    selected: []
}

const Home = createSlice(
    {
        name: "home",
        initialState,
        reducers: {
            addSelected(state: homeType, action: PayloadAction<string>) {
                state.selected.push(action.payload)

                return state
            }
        }
    }
)

export default Home.reducer;
export const {addSelected} = Home.actions
