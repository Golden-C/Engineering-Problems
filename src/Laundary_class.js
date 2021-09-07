// const unique = new set(cleanPile);
// const cleanPile = [1,2,3,4,5,1,2,5,1,1,3,3]
// [...unique].reduce((acc, value) => {
//     const valueCount = cleanPile.filter((v) => === value).length;
//     const pair = (valueCount / 2) | 0;
//     const unMatched = valueCount % 2 !== 0;
//     if (unmatched) {
//         return value
//     }
// })



// let pairs = 0;
// for (let value of [...unique]) {
//     const valueCount = cleanPile.filter((val) => val === value).length;
//     const pair = (valueCount / 2) | 0;
//     pairs += pair
// };
