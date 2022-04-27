// code your solution here
// const record = [
//     { year: "2018", result: "N/A" },
//     { year: "2017", result: "N/A" },
//     { year: "2016", result: "N/A" },
//     { year: "2015", result: "W" }
// ]
// const finder = () => record.find( ({result}) => result === 'W')

// const superbowlWin = (record) => {
//     if (finder()) {
//         let winningYear = finder();
//         return winningYear['year'];
//     } else {
//         return undefined;
//     }
// }

const superbowlWin = (record) => {
    if (record.find( ({result}) => result === 'W')) {
        let winningYear = record.find( ({result}) => result === 'W');
        return winningYear['year'];
    } else {
        return undefined;
    }
}