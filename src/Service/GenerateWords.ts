import {wordsPagesI} from "../Models/Model";


function getRandomNum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min)
}

export function generateRandomWords(letters: string[], words: wordsPagesI[]): string {
    let wordsArray: string[] = []
    while (wordsArray.length < 30) {
        let randomPage = getRandomNum(0, words.length)
        wordsArray = [...wordsArray, ...words[randomPage].word_list.map((el: {
            word: string,
            points: number,
            wildcards: Array<any>
        }) => el.word)]
    }
    return wordsArray.sort((a, b) => 0.5 - Math.random()).join(" ").trim();
}
