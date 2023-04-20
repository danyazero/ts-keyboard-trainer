export enum LetterStatusEnum {
    NORMAL = 'normal',
    ERROR = 'error',
    RIGHT = 'right',
}

export interface IWordsPages {
    word_list: Array<WordType>,
    length: number,
    num_words: number,
    num_pages: number,
    current_page: number
}

export type WordType = {
    word: string,
    points: number,
    wildcards: Array<any>
}