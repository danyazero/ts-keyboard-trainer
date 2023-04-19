import {wordsPagesI} from "../Models/Model";
import {getRandomNum, shuffle} from "./Service";

export function generateRandomWords(letters: string[], words: wordsPagesI[]): string {
    let randomOrderArray = shuffle([...Array(10).keys()])
    let wordsArray: string[] = []
    let i = 0
    while (wordsArray.length < 35) {
        wordsArray = [...wordsArray, ...words[randomOrderArray[i]].word_list.map((el: {
            word: string,
            points: number,
            wildcards: Array<any>
        }) => el.word)]
        i++
    }
    return wordsArray.sort((a, b) => 0.5 - Math.random()).join(" ").trim();
}
