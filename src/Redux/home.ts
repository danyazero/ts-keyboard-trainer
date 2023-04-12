import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getWordsReq} from "./api";

export type homeType = {
    letters: string
    word: string,
    words: number,
    selected: string[]
}

const initialState: homeType = {
    letters: "abcdefghijklmnopqrstuvwxyz",
    word: "",
    words: 5,
    selected: []
}

const Home = createSlice(
    {
        name: "home",
        initialState,
        reducers: {
            createWordLine: (state: homeType, action: PayloadAction<string[]>) => {
                // let randomWord: string = "";
                // for (let i = 0; i < state.words; i++) {
                //     randomWord += " " + state.selected.sort((a, b) => 0.5 - Math.random()).join("")
                // }
                state.word = action.payload.join(" ").trim()
                return state;
            },
            addSelected(state: homeType, action: PayloadAction<string>) {
                const index: number = state.selected.findIndex(el => el == action.payload)
                if (index == -1) {
                    state.selected.push(action.payload)
                } else state.selected.splice(index, 1)

                return state
            }
        }
    }
)

export const getWordsAPI = createAsyncThunk(
    'home/getWords',
    async (_data: undefined, thunkAPI: any) => {
        const state = thunkAPI.getState()
        const selected: string = state.home.selected.join("")
        const {data} = await getWordsReq(selected);
        const wordsArray = data.word_pages[0].word_list.map((el: {word: string, points: number, wildcards: Array<any>}) => el.word);

        thunkAPI.dispatch(createWordLine(wordsArray))
    }
)

export default Home.reducer;
export const {addSelected, createWordLine} = Home.actions
