export const shuffle = (array) => {
    const randomizedArray = [...array];

    for (let i = randomizedArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [randomizedArray[i], randomizedArray[j]] = [randomizedArray[j], randomizedArray[i]];
    }

    return randomizedArray;
}