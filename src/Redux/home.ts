import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getWordsReq} from "./api";
import {generateRandomWords} from "../Service/GenerateWords";
import {calculateAverage, symbolsPerSecondAverage} from "../Service/Service";

export type homeType = {
    letters: string
    errorCounter: number,
    randomWordsLine: string,
    started: boolean,
    selected: string[],
    letterId: number,
    timeStamp: number[]
    lineForRender: string,
    errorLetters: number[],
    symbolsPerSecond: number
}

const initialState: homeType = {
    letters: "abcdefghijklmnopqrstuvwxyz",
    errorCounter: 0,
    errorLetters: [],
    symbolsPerSecond: 0,
    timeStamp: [],
    started: false,
    letterId: -1,
    lineForRender: "",
    randomWordsLine: "",
    selected: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
}

const Home = createSlice(
    {
        name: "home",
        initialState,
        reducers: {
            createWordLine: (state: homeType, action: PayloadAction<string>) => {
                state.started = true
                state.letterId = -1
                state.errorCounter = 0
                state.errorLetters = []

                state.randomWordsLine = action.payload

                // state.word = action.payload.sort((a, b) => 0.5 - Math.random()).join(" ").trim()

                return state;
            },
            stopGame: (state: homeType) => {
                state.started = false
                state.symbolsPerSecond = symbolsPerSecondAverage(state.timeStamp.reverse())

                return state;
            },
            checkSpell(state: homeType, action: PayloadAction<string>) {
                if (state.started){
                    if (state.randomWordsLine[state.letterId + 1] !== action.payload) {

                        if (!state.errorLetters.includes(state.letterId + 1)) {
                            new Audio("/error.mp3").play();
                            state.errorCounter++
                            state.errorLetters.push(state.letterId + 1)
                        }

                    }else state.timeStamp.push(new Date().getTime())
                    state.letterId++
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
            let wordsArray = generateRandomWords(state.home.selected, data.word_pages)
            thunkAPI.dispatch(createWordLine(wordsArray))
        }
    }
)

export default Home.reducer;
export const {addSelected, stopGame, createWordLine, checkSpell} = Home.actions
