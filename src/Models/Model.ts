export enum LetterStatusEnum {
    NORMAL = 'normal',
    ERROR = 'error',
    RIGHT = 'right',
}

export interface wordsPagesI{
    word_list: Array<wordType>,
    length: number,
    num_words: number,
    num_pages: number,
    current_page: number
}

export type wordType = {
    word: string,
    points: number,
    wildcards: Array<any>
}