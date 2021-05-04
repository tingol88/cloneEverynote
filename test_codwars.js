// function score(dice) {
//   const hash = {
//     '1': 0,
//     "2": 0,
//     '3': 0,
//     '4': 0,
//     '5': 0,
//     '6': 0,
//     '1x3': 0,
//     "2x3": 0,
//     '3x3': 0,
//     '4x3': 0,
//     '5x3': 0,
//     '6x3': 0,
//   }
//   for (let i = 0; i < dice.length; i += 1) {
//     if (hash[dice[i]] === 2) {
//       hash[dice[i]] = 0;
//       hash[`${dice[i]}x3`] = 1
//     } else {
//       hash[dice[i]] += 1;
//     }
//   }
//   return (hash['1x3'] * 1000 + hash['6x3'] * 600 + hash['5x3'] * 500 + hash['4x3'] * 400 + hash['3x3'] * 300 + hash['2x3'] * 200 + hash['1'] * 100 + hash['5'] * 50);
// }
// console.log(score( [2, 4, 4, 5, 4] )); 

function gap(g, m, n) {
  const primeNumbers = []

  for (let i = m; i <= n; i += 1) {
    for (let j = 2; j < i; j += 1) {
      if (j === i - 1 && i % j !== 0) {
        primeNumbers.push(i)
        if ((primeNumbers[1] - primeNumbers[0]) === g) return primeNumbers
        if (primeNumbers[1]) primeNumbers.shift()
      } else if (i % j !== 0) {
        continue
      } else break;
    }
  }
  if(primeNumbers[1])return primeNumbers
  return null
}

console.log(gap(10, 336, 400));
