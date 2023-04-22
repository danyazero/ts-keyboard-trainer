import {IWordsPages} from "../Models/Model";
import {shuffle} from "./Service";

export function generateRandomWords(letters: string[], words: IWordsPages[]): string {
    // debugger
    // if (words.length == 0 || letters.length == 0) return ""

    let randomOrderArray: number[] = shuffle([...Array(words.length).keys()])
    let wordsArray: (string | undefined)[] = []
    let i = 0
    while (wordsArray.length < 35 && i < words.length) {
        wordsArray = [...wordsArray, ...words[randomOrderArray[i]].word_list.map((el: {
            word: string,
            points: number,
            wildcards: Array<any>
        }) => {if (el.word.length > 2) return el.word})]
        i++
    }
    return wordsArray.sort((a, b) => 0.5 - Math.random()).join(" ").trim();
}
