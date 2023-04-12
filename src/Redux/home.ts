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
                const index: number = state.selected.findIndex(el => el == action.payload)
                if (index == -1){
                    state.selected.push(action.payload)
                }else state.selected.splice(index, 1)

                return state
            }
        }
    }
)

export default Home.reducer;
export const {addSelected} = Home.actions
