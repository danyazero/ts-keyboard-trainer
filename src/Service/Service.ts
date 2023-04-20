export function getRandomNum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min)
}

export function shuffle(array: number[]) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

export function symbolsPerSecondAverage(timeStamp: number[]){
    return Math.floor(1000 / calculateAverage(timeStamp))
}

export function calculateAverage(timeStamps: number[]){
    let calculatedTime: number[] = []

    for (let i = 1; i < timeStamps.length; i++){
        calculatedTime.push(timeStamps[i-1] - timeStamps[i])
        //9 8 7 3 2
    }

    return Math.floor(calculatedTime.reduce((a, b) => a + b) / calculatedTime.length);
}
