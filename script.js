// //1
// function words () {
//     let ques1 = prompt('ВВедите три слова разделенные пробелами')
//     let ques2 = ques1.split(' ')
//     let longestWord = 0

//     ques2.filter(function(ques2) {
//         if(longestWord <= ques2.length) {
//             longestWord = ques2.length
//             ques1 = ques2
//         }
//     })
//     return ques1
// }

// alert("самое длинное слово " + words())

//2
let arr = [4, 78, 42, 65, 32, 1, 2, 3, 5,];
console.log('До ' + arr);

for(let j = 0; j < arr.length; j++) {
    for (let i = 0 ; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            let sorted = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = sorted
        }

    }

}

console.log('После ' + arr);

