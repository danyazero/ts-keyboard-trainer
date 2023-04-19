export function getRandomNum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min)
}

export function cutWordsFromRange(letterIndex: number, line: string): string{

    const start = letterIndex > 10 ? letterIndex + 10 : 0
    const end = letterIndex + 10 <= line.length ? letterIndex + 10 : line.length

    return [...line].map((element, index) => {
        if (start <= index && index <= end) return element
    } ).join("")
}