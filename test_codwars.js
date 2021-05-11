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

// function gap(g, m, n) {
//   const primeNumbers = []

//   for (let i = m; i <= n; i += 1) {
//     for (let j = 2; j < i; j += 1) {
//       if (j === i - 1 && i % j !== 0) {
//         primeNumbers.push(i)
//         if ((primeNumbers[1] - primeNumbers[0]) === g) return primeNumbers
//         if (primeNumbers[1]) primeNumbers.shift()
//       } else if (i % j !== 0) {
//         continue
//       } else break;
//     }
//   }
//   if(primeNumbers[1])return primeNumbers
//   return null
// }

// const snail = function (arr) {
//   if (arr.length === 0) return
//   if (arr.length === 1) return arr[0]
//   const result = [...arr[0]]
//   let smallArr = JSON.parse(JSON.stringify(arr))
//   smallArr.shift()
//   smallArr.pop()
//   smallArr.forEach((el) => {
//     el.shift()
//     el.pop()
//   })
//   arr.forEach((el, index) => {
//     if (index > 0 && index < arr.length - 1) {
//       result.push(el[el.length - 1])
//     }
//   })
//   result.push(...arr[arr.length - 1].reverse())
//   for (let i = arr.length - 2; i > 0; i -= 1) {
//     result.push(arr[i][0])
//   }
//   console.log('smallArr',smallArr);
//   const tailResult = snail(smallArr)
//   if(tailResult) result.push(...tailResult)
//   return (result);
// }


// console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])); // [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);

// function formatDuration(seconds) {
//   if(seconds===0) return now
//   if (seconds < 60) return `${seconds} second${seconds === 1 ? '' : 's'}`
//   let years = 0;
//   let days = 0;
//   let hours = 0;
//   let minutes = 0;
//   let secondsForResult = 0;
//   let remain = seconds;
//   const arrResult = []
//   let itemString = ''
//   if (remain >= (365 * 24 * 60 * 60)) {
//     years = Math.floor(remain / (365 * 24 * 60 * 60))
//     itemString = years + ` year${years > 1 ? 's' : ''}`
//     arrResult.push(itemString)
//     remain -= (365 * 24 * 60 * 60) * years
//   }
//   if (remain >= (24 * 60 * 60)) {
//     days = Math.floor(remain / (24 * 60 * 60))
//     itemString = days + ` day${days > 1 ? 's' : ''}`
//     arrResult.push(itemString)
//     remain -= (24 * 60 * 60) * days
//   }
//   if (remain >= (60 * 60)) {
//     hours = Math.floor(remain / (60 * 60))
//     itemString = hours + ` hour${hours > 1 ? 's' : ''}`
//     arrResult.push(itemString)
//     remain -= (60 * 60) * hours
//   }
//   if (remain >= (60)) {
//     minutes = Math.floor(remain / (60))
//     itemString = minutes + ` minute${minutes > 1 ? 's' : ''}`
//     arrResult.push(itemString)
//     remain -= (60) * minutes
//   }
//   secondsForResult = remain
//   if (secondsForResult) arrResult.push(`${secondsForResult} second${secondsForResult === 1 ? '' : 's'}`)

//   if (arrResult.length > 2) {
//     const last = arrResult.pop()
//     return `${arrResult.join(', ')} and ${last}`
//   } else if (arrResult.length === 2) return arrResult[0] + ' and ' + arrResult[1]
//   else return arrResult[0]
// }

// console.log(formatDuration(3600));

// Test.assertEquals(formatDuration(1), "1 second");
// Test.assertEquals(formatDuration(62), "1 minute and 2 seconds");
// Test.assertEquals(formatDuration(120), "2 minutes");
// Test.assertEquals(formatDuration(3600), "1 hour");
// Test.assertEquals(formatDuration(3662), "1 hour, 1 minute and 2 seconds");

function solution(list) {
  const result = []
  for (let i = 0; i < list.length; i += 1) {
    if(list[i] === list[i-1]+1 && list[i] === list[i+1]-1  ) {
      result.push('!')
    } else {
      result.push(list[i])
    }
  }
  return result.join(',').replace(/(,!){2,}/gm, '!').replace(/(,!,)/gi, '!').replace(/(!,)/gi, '!').replace(/!/gi, '-')
 }

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))
// "-6,-3-1,3-5,7-11,14,15,17-20"));

