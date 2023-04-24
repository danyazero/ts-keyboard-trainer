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
    const data = calculateAverage(timeStamp)
    return {average: parseFloat((1000 / data.perSecond).toFixed(2)), array: data.array}
}

export function calculateAverage(timeStamps: number[]){
    let calculatedTime: number[] = []

    for (let i = 1; i < timeStamps.length; i++){
        calculatedTime.push(timeStamps[i-1] - timeStamps[i])
    }

    return {perSecond: calculatedTime.reduce((a, b) => a + b) / calculatedTime.length, array: calculatedTime};
}

export function calculateDataForChart(array: number[], scale: number): number[]{
    let arrayForChart = []

    for (let i = 0; i < array.length; i += scale){
        let average = 0
        for (let j = 0; j < scale; j++){
            average += array[i + (j + 1)]
        }
        arrayForChart.push(average / scale)
    }

    return arrayForChart
}