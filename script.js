// // to print numbers from 1 to 10
// for (let a = 1; a<10; a++) {
//     console.log(a);
// }
// // to print numbers from 10 to 1
// for (let i = 10; i > 0; i--) {
//     console.log(i); 
//   }

// // to find odd or even number 
//   function OddOrEven(n) {
//     if (n%2 === 0){
//         console.log("Number is Even");
//     }else {console.log("Number is Odd");}
//   }
//   OddOrEven(16)

// // to find number of digits in any integer
//   function numDigits(x) {
//     console.log(Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1);
//   }
//   numDigits(185942)

// // to get sum of numbers ranged from 1 to N 
//   function numberSum(N) {
//     var total = 0;
//       for(var i = 55; i <= 60; i++){
//         total += i;
//       }
//       console.log(total);
//   }
//   numberSum()

// // sum of even numbers from 1 to 100
//   function isEven(n) {
//     return Boolean(n % 2 === 0);
//   }
//   function findSum(no) {
//     let sum = 0;
//     for (var i = 0; i <= no; i++) {
//       if (isEven(i)) {
//         sum += i;
//       }
//     }
//     return sum;
//   }
//   console.log(findSum(100));

//   // 10, 11, 12, 10, 10
//   var d = 10;
//   console.log(d++); 
//   console.log(++d); 
//   console.log(d--);
//   console.log(--d);
//   console.log(d);

//   // 10, 8, 8, 10, 10
//   var n = 10;
//   console.log(n--); 
//   console.log(--n); 
//   console.log(n++);
//   console.log(++n);
//   console.log(n);

// // 10, 10, 11, 11, 10
//   var m = 10;
//   console.log(m++); 
//   console.log(--m); 
//   console.log(++m);
//   console.log(m--);
//   console.log(m);

// // 9, 9, 10, 10, 10
//   var j = 10;
//   console.log(--j); 
//   console.log(j++); 
//   console.log(j--);
//   console.log(++j);
//   console.log(j);

//   // How to create a phone number 
//   createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
//   function createPhoneNumber(numbers) {
//     var phNo = "(";
//     phNo += numbers.slice(0, 3).join("");
//     phNo += ") ";
//     phNo += numbers.slice(3, 6).join("");
//     phNo += "-";
//     phNo += numbers.slice(6, 10).join("");
//     console.log(phNo)
//   }

// // how to find pair of sum of two numbers
//   arr = [1, 2, 3, 4, 5];
// sum = 5;
// low = 0;
// high = arr.length - 1;
// while (low < high) {
//   if (arr[low] + arr[high] > sum) {
//     high--;
//   } else if (arr[low] + arr[high] < sum) {
//     low++;
//   } else if (arr[low] + arr[high] == sum) {
//     console.log("arr (" + arr[low] + " , " + arr[high] + ")");
//     low++;
//     high;
//   }
// }



// function getPairsCount(arr, sum){

//     let count = 0; // Initialize result
 
//     // Consider all possible pairs and check their sums
//     for (let i = 0; i < arr.length; i++)
//         for (let j = i + 1; j < arr.length; j++)
//             if (arr[i] + arr[j] == sum){
//                 // count++;
//     console.log("arr = " + arr[i] + "," + arr[j]);
// }else console.log("false");  
// }
// getPairsCount([5, 25, 65, 81, 21, 15, 62, 50, 52, 59], 102)

