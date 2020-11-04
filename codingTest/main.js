// function any(money) {
//   let moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
//   let answer = [];
//   for (let i = 0; i < moneyArr.length; i++) {
//     let change = money / moneyArr[i];
//     if (change >= 1) {
//       answer[i] = Math.floor(change);
//       money = money - Math.floor(change) * moneyArr[i];ss
//     } else if (change < 1 || change === 0) {
//       answer[i] = 0;
//     }
//   }
//   console.log(answer);
// }

// any(50237);
// any(15000);

// function b(a) {
//   let word = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//   let word2 = ["Z", "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "O", "N", "M", "L", "K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A"];
//   let answer = "";
//   let aArray = a.split("");

//   for (let i = 0; i < aArray.length; i++) {
//     let idx = word.indexOf(aArray[i]);
//     if (idx !== -1) {
//       answer += word2[idx];
//     } else if (idx === -1) {
//       if (aArray[i] === " ") {
//         answer += " ";
//       } else {
//         let idx2 = word.indexOf(aArray[i].toUpperCase());
//         answer += word2[idx2].toLowerCase();
//       }
//     }
//   }

//   console.log(answer);
// }
// b("I love you");

// function C(pobi, crong) {
//   let answer;
//   let pobiArray = [];
//   let crongArryay = [];

//   function checkError(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr[i].length - 1; j++) {
//         console.log(arr[i][j] + 1, arr[i][j + 1]);
//         if (arr[i][j] + 1 !== arr[i][j + 1]) {
//           return (answer = -1);
//         }
//       }
//     }
//   }
// checkError(pobi);
// checkError(crong);

//   function Add(name, arr) {
//     for (let i = 0; i < arr.length; i++) {
//       let b = Array.from(String(arr[i]));
//       let q = b.reduce((a, b) => {
//         return Number(a) + Number(b);
//       });

//       name === "crong" ? crongArryay.push(q) : pobiArray.push(q);
//     }
//   }
//   Add("crong", crong[0]);
//   Add("pobi", pobi[0]);

//   function multiply(name, arr) {
//     for (let i = 0; i < arr.length; i++) {
//       let b = Array.from(String(arr[i]));
//       let q = b.reduce((a, b) => {
//         return Number(a) * Number(b);
//       });
//       name === "crong" ? crongArryay.push(q) : pobiArray.push(q);
//     }
//   }
//   multiply("crong", crong[0]);
//   multiply("pobi", pobi[0]);

//   console.log(pobiArray, crongArryay);
// }
// C(
//   [
//     [97, 98],
//     [131, 132],
//     [99, 102],
//   ],
//   [
//     [197, 198],
//     [211, 212],
//     [211, 212],
//   ]
// );

// function D(number) {
//   let count = 0;
//   let a = Array(number)
//     .fill(null)
//     .map((e, i) => {
//       return i + 1;
//     });
//   a.forEach((e) => {
//     let b = Array.from(String(e));
//     for (let i = 0; i < b.length; i++) {
//       if (b[i].indexOf(3) !== -1 || b[i].indexOf(6) !== -1 || b[i].indexOf(9) !== -1) {
//         count++;
//       }
//     }
//   });
// }

// D(33);

// function E(array) {
//   let answer = [];
//   let logObject = {};
//   let sortArray = [];
//   // console.log(array);
//   //1시간으로 배열을 구성
//   //leave 상태인 사람 빼기 구매 실패이니
//   //시간을 오름차순으로 정렬하려 i i+1차이가 1분이상이면 i는 구매

//   function RemoveTime(array) {
//     let removeTime = [];
//     for (let i = 0; i < array.length; i++) {
//       let b = array[i].split(" ");
//       let timeArr = b[2].split(":").join("");
//       if (timeArr >= "091000" && timeArr <= "100000") {
//         removeTime.push(b);
//       }
//     }
//     return removeTime;
//   }

//   let arr = RemoveTime(array);

//   function MakeObject(arr) {
//     var today = new Date();
//     var dd = today.getDate();
//     var mm = today.getMonth() + 1; //January is 0!
//     var yyyy = today.getFullYear();

//     for (let i = 0; i < arr.length; i++) {
//       logObject[arr[i][0]] = {
//         name: arr[i][0],
//         log: arr[i][1],
//         newDate: new Date(`${yyyy}-${mm}-${dd} ${arr[i][2]}`),
//         timeString: arr[i][2].split(":").join(""),
//       };
//       if (arr[i][1] === "leave") delete logObject[arr[i][0]];
//     }
//   }

//   MakeObject(arr);

//   function MakeSortArrayFromLogObjet(logObject) {
//     for (key in logObject) {
//       sortArray.push(logObject[key]);
//     }
//   }
//   MakeSortArrayFromLogObjet(logObject);

//   let a = sortArray.sort((a, b) => {
//     return a.timeString - b.timeString;
//   });

//   for (let i = 0; i < a.length - 1; i++) {
//     let timeGap = -(a[i].newDate - a[i + 1].newDate) / 1000;
//     console.log(timeGap);

//     if (timeGap >= 60) {
//       answer.push(a[i + 1].name);
//     }
//   }
//   console.log(a, answer);
// }

// E(["woni request 09:12:29", "brown request 09:23:11", "brown leave 09:23:44", "jason request 09:33:51", "jun request 09:33:56", "cu request 09:34:02"]);

// function F(stinrg) {
//   let StringArray = Array.from(stinrg);

//   function A(stinrg) {
//     for (let i = 0; i < StringArray.length; i++) {
//       if (StringArray[i] === StringArray[i + 1]) {
//         StringArray.splice(i, 2);
//         A(StringArray.join(""));
//       }
//     }
//     return StringArray.join("");
//   }
//   console.log(A(stinrg));
// }
// F("browoanoommnaon");

// function G(n) {
//   let number = n;
//   let ncount = 0;

//   (function nCount(n) {
//     let a = n.toString(2);
//     let aArr = Array.from(a);
//     for (let num of aArr) {
//       if (num === "1") {
//         ncount++;
//       }
//     }
//   })(n);

//   function other(n) {
//     let otherCount = 0;
//     let a = n.toString(2);
//     let aArr = Array.from(a);
//     for (let num of aArr) {
//       if (num === "1") {
//         otherCount++;
//       }
//     }
//     if (ncount === otherCount) {
//       return n.toString();
//     } else {
//       number++;
//       console.log(number);
//       other(number);
//     }
//   }
//   other(n + 1);
// }

// G(15);

// function solution(progresses, speeds) {
//   var answer = [];
//   let arr = [];
//   for (let i = 0; i < progresses.length; i++) {
//     arr.push([progresses[i]]);
//   }
//   function Add(speeds) {
//     for (let i = 0; i < speeds.length; i++) {
//       arr[i] = Number(arr[i]) + Number(speeds[i]);
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     // console.log(arr)
//     if (arr[i][0] <= 100) {
//       Add(speeds);
//     }
//   }
//   console.log(arr);
//   return answer;
// }

// function solution(A, B) {
//   var answer = 0;
//   let arr = [];
//   // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.

//   for (let i = 0; i < A.length; i++) {
//     let a = new Array();
//     for (let j = 0; j < B.length; j++) {
//       a.push(A[i] * B[j]);
//     }
//     arr.push(a);
//   }

//   for (let i = 0; i < arr.length; i++) {
//     arr[i].sort((a, b) => a - b);
//     answer += Number(arr[i][0]);
//   }
//   console.log(answer);
//   return answer;
// }

// solution([1, 2], [3, 4]);

function solution(n, a, b) {
  var answer = 3;
  let arr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      let a = new Array();
      a.push(i - 1);
      a.push(i);
      arr.push(a);
    }
  }

  return answer;
}
solution(8, 4, 7);
