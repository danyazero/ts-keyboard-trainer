import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getWordsReq} from "./api";
import {generateRandomWords} from "../Service/GenerateWords";
import {shuffle, symbolsPerSecondAverage} from "../Service/Service";
import {RootState} from "./store";
import home from "../Components/Home/Home";

const audioError = new Audio("/error.mp3")

export type homeType = {
    letters: string
    errorCounter: number,
    randomWordsLine: string,
    started: boolean,
    selectedLetters: string[],
    currentLetterIndex: number,
    timeStamp: number[],
    isPlayAudio: boolean,
    isTimer: boolean,
    errorLetters: number[],
    symbolsPerSecond: number,
    lastActive: string
}

const initialState: homeType = {
    letters: "qwertyuiopasdfghjklzxcvbnm",
    errorCounter: 0,
    errorLetters: [],
    lastActive: "",
    symbolsPerSecond: 0,
    timeStamp: [],
    started: false,
    isTimer: true,
    isPlayAudio: true,
    currentLetterIndex: -1,
    randomWordsLine: "",
    selectedLetters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
}

const Home = createSlice(
    {
        name: "home",
        initialState,
        reducers: {
            setAudioStatus(state: homeType, action: PayloadAction<boolean>) {
                state.isPlayAudio = action.payload

                return state;
            },
            setTimerStatus(state: homeType, action: PayloadAction<boolean>) {
                state.isTimer = action.payload

                return state;
            },
            createWordLine: (state: homeType, action: PayloadAction<string>) => {
                state.started = true
                state.currentLetterIndex = -1
                state.errorCounter = 0
                state.errorLetters = []
                state.randomWordsLine = action.payload

                return state;
            },
            updateWordsLine: (state: homeType) => {
                state.randomWordsLine += shuffle(state.randomWordsLine.split(" ")).join(" ")

                return state;
            },
            stopGame: (state: homeType) => {
                state.started = false
                state.symbolsPerSecond = symbolsPerSecondAverage(state.timeStamp.reverse())
                state.timeStamp = []

                return state;
            },
            checkSpell(state: homeType, action: PayloadAction<number>) {
                if (state.started) {

                    let letterFromCharCode: string = String.fromCharCode(action.payload).toLowerCase()
                    state.lastActive = letterFromCharCode;

                    if (state.randomWordsLine[state.currentLetterIndex + 1] !== letterFromCharCode) {

                        if (!state.errorLetters.includes(state.currentLetterIndex + 1)) {
                            if (state.isPlayAudio) audioError.play();
                            state.errorCounter++
                            state.errorLetters.push(state.currentLetterIndex + 1)
                        }

                    } else state.timeStamp.push(new Date().getTime())

                    state.currentLetterIndex++
                }


                return state;
            },
            addSelected(state: homeType, action: PayloadAction<string>) {

                const index: number = state.selectedLetters.findIndex(el => el == action.payload)

                if (index == -1) {
                    state.selectedLetters.push(action.payload)
                } else state.selectedLetters.splice(index, 1)

                return state
            }
        }
    }
)

export const getWordsAPI = createAsyncThunk(
    'home/getWords',
    async (_data: undefined, thunkAPI: any) => {
        const state = thunkAPI.getState()
        const selected: string = state.home.selectedLetters.join("")
        const {data} = await getWordsReq(selected);

        if (data.word_pages.length >= 1) {
            let wordsArray = generateRandomWords(state.home.selected, data.word_pages)
            thunkAPI.dispatch(createWordLine(wordsArray))
        }
    }
)

export default Home.reducer;
export const {addSelected, updateWordsLine, setTimerStatus, setAudioStatus, stopGame, createWordLine, checkSpell} = Home.actions
