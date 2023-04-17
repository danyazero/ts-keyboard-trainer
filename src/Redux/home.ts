import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getWordsReq} from "./api";

export type homeType = {
    letters: string
    errorCounter: number,
    word: string,
    words: number,
    selected: string[],
    letterId: number,
    errorLetters: number[]
}

const initialState: homeType = {
    letters: "abcdefghijklmnopqrstuvwxyz",
    errorCounter: 0,
    errorLetters: [],
    letterId: -1,
    word: "",
    words: 5,
    selected: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
}

const Home = createSlice(
    {
        name: "home",
        initialState,
        reducers: {
            createWordLine: (state: homeType, action: PayloadAction<string[]>) => {
                state.letterId = -1
                state.errorCounter = 0
                state.errorLetters = []

                state.word = action.payload.sort((a, b) => 0.5 - Math.random()).join(" ").trim()

                return state;
            },
            checkSpell(state: homeType, action: PayloadAction<string>){

                if (state.word[state.letterId + 1] === action.payload){
                    state.letterId++
                } else {
                    if (!state.errorLetters.includes(state.letterId + 1)){
                        state.errorCounter++
                        state.errorLetters.push(state.letterId + 1)
                    }
                }

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

        if (data.word_pages.length >= 1) {
            let wordsArray: string[] = []
            for (let i = 0; i < data.word_pages.length; i++){
                wordsArray = [...wordsArray, ...data.word_pages[i].word_list.map((el: {word: string, points: number, wildcards: Array<any>}) => el.word)]
                if (wordsArray.length >= 30) break
            }
            thunkAPI.dispatch(createWordLine(wordsArray))
        }
    }
)

export default Home.reducer;
export const {addSelected, createWordLine, checkSpell} = Home.actions
