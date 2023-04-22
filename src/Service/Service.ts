export function getRandomNum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min)
}

export function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length;
    let randomIndex = 0;
    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

export function symbolsPerSecondAverage(timeStamp: number[]){
    return parseFloat((1000 / calculateAverage(timeStamp)).toFixed(2))
}

export function calculateAverage(timeStamps: number[]){
    let calculatedTime: number[] = []

    for (let i = 1; i < timeStamps.length; i++){
        calculatedTime.push(timeStamps[i-1] - timeStamps[i])
    }

    return calculatedTime.reduce((a, b) => a + b) / calculatedTime.length;
}
