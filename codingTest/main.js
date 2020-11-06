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

// function solution(n, a, b) {
//   var answer = 3;
//   let arr = [];

//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) {
//       let a = new Array();
//       a.push(i - 1);
//       a.push(i);
//       arr.push(a);
//     }
//   }

//   return answer;
// }
// solution(8, 4, 7);

// function solution(board) {
//   var answer = 1234;
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[i].length - 1; j++) {
//       if (board[i][j] === 1) {
//         Check(board, i, j);
//       }
//     }
//   }

//   function Check(board, i, j, n) {
//     console.log(i, j);
//     if (i === 0) {
//       console.log(board[])
//     }
//   }

//   return answer;
// }
// solution([
//   [0, 1, 1, 1],
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [0, 0, 1, 0],
// ]);
// function solution(land) {
//   var answer = 0;

//   for (let i = 0; i < land.length; i++) {
//     if (i < land.length - 1) {
//       let Max = Math.max.apply(null, land[i]);
//       let idx = land[i].indexOf(Max);
//       land[i + 1][idx] = 0;
//       answer += Max;
//     } else {
//       let Max = Math.max.apply(null, land[i]);
//       answer += Max;
//     }
//   }
//   console.log(land, answer);
//   return answer;
// }

// solution([
//   [1, 2, 3, 5],
//   [5, 6, 7, 8],
//   [4, 3, 2, 1],
// ]);

// function solution(arr1, arr2) {
//   var answer = [[]];
//   console.log(
//     Array(arr1.length)
//       .fill()
//       .map((r, i) => Array(arr2[0].length))
//       .fill()
//   );
//   return answer;
// }
// solution(
//   [
//     [1, 4],
//     [3, 2],
//     [4, 1],
//   ],
//   [
//     [3, 3],
//     [3, 3],
//   ]
// );

// function solution(name) {
//   var answer = 0;
//   let word = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//   let count = 0;
//   Array.from(name).forEach((e) => {
//     let idx = word.indexOf(e);
//     if (idx === 0) {
//       count++;
//     }
//     if (idx >= 13) {
//       answer += 26 - idx;
//     } else {
//       answer += idx;
//     }
//   });
//   answer += name.length - 1 - count;

//   return answer;
// }
// solution("JAN");

// function solution(str1, str2) {
//   var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
//   var answer = 0;

//   function Make(str) {
//     let a = new Array();
//     for (let i = 0; i < str.length - 1; i++) {
//       regExp.test(str[i]);
//       regExp.test(str[i + 1]);
//       if (regExp.test(str[i]) || regExp.test(str[i + 1])) continue;
//       if (str[i] % 1 === 0 || str[i + 1] % 1 === 0) continue;
//       a.push(str[i].toLowerCase() + str[i + 1].toLowerCase());
//     }
//     return a;
//   }

//   let strArr1 = Make(str1);
//   let strArr2 = Make(str2);

//   function isSame(arr1, arr2) {
//     let arr3 = arr1.concat(arr2);
//     let flag = arr3.every((e) => {
//       return e === arr3[0];
//     });
//     return flag;
//   }
//   let asd = isSame(strArr1, strArr2);

//   function GetCommon(arr1, arr2) {
//     let a = new Array();
//     if (asd) {
//       if (arr1.length <= arr2.length) {
//         return arr1;
//       } else {
//         return arr2;
//       }
//     }
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr2.indexOf(arr1[i]) !== -1) {
//         a.push(arr1[i]);
//         arr2.splice(arr2.indexOf(arr1[i]), 1);
//       }
//     }
//     return a;
//   }

//   let commonArr = GetCommon(strArr1, strArr2);
//   console.log(123, commonArr);
//   for (let i = 0; i < strArr1.length; i++) {
//     if (asd) break;
//     if (commonArr.indexOf(strArr1[i]) !== -1) {
//       strArr1.splice(commonArr.indexOf(strArr1[i]), 1);
//     }
//   }

//   function Union(common, arr1, arr2) {
//     if (asd) {
//       if (arr1.length > arr2.length) {
//         return arr1;
//       } else {
//         return arr2;
//       }
//     }
//     let arr = [...common, ...arr1, ...arr2];
//     return arr;
//   }

//   let unionArr = Union(commonArr, strArr2, strArr1);
//   console.log(commonArr.length, unionArr.length);
//   answer = (commonArr.length / unionArr.length) * 65536;

//   return answer;
// }

// solution("aa1+aa2", "AAAA12");

// function solution(nums) {
//   var answer = -1;

//   for (let i = 0; i < 8; i++) {
//     let arr = [];
//     while (arr.length < 3) {
//       let r = nums.splice(Math.floor(Math.random() * nums.length), 1)[0];
//       console.log(r, nums);
//       arr.push(r);
//       console.log(arr);
//     }
//     let q = arr.reduce((a, b) => a + b);
//   }

//   return answer;
// }
// solution([1, 2, 7, 6, 4]);

// function solution(skill, skill_trees) {
//   var answer = 0;
//   let skill_arr = Array.from(skill);
//   let arr = [];

//   for (let i = 0; i < skill_trees.length; i++) {
//     arr.push(Array.from(skill_trees[i]));
//   }

//   for (let i = 0; i < skill_arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       console.log(arr[i].indexOf(arr));
//     }
//   }
//   return answer;
// }

// solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);

// function solution(n, words) {
//   var answer = [];
//   function check() {
//     let f, s;
//     for (let i = 0; i < words.length - 1; i++) {
//       f = words[i][words[i].length - 1];
//       s = words[i + 1][0];
//       if (f !== s) {
//         if ((i + 2) % n === 0) {
//           answer.push(1);
//         } else {
//           answer.push(1);
//         }
//         answer.push(Math.floor((i + 2) / n));
//       }
//     }
//   }
//   check(words);
//   console.log(answer);
//   return answer;
// }
// // solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]);
// solution(2, ["hello", "one", "even", "aever", "row", "world", "draw"]);
//0,1,2,3,4,5
//1,2,3,4,5,6
//1,2,1,2,1,2
//중복되거나, 단어가 맞지 않으면 인댁스 구하기....
// function solution(number, k) {
//   let answer;
//   let asd = Array.from(number);
//   let arr = [];
//   let count = 0;

//   while (count < k) {
//     for (let i = 0; i < asd.length - 1; i++) {
//       if (asd[i] < asd[i + 1]) {
//         arr.push(asd[i + 1]);
//         asd.splice(asd.indexOf(asd[i + 1]));
//         count++;
//       }
//     }
//   }
//   console.log(arr);
//   return answer;
// }
// solution("1924", 2);

// function solution(n) {
//   var answer = 0;
//   let arr = [0, 1];
//   function N(n) {
//     let sum = 0;
//     for (let i = 0; i < n - 1; i++) {
//       arr.push(arr[i] + arr[i + 1]);
//       sum = arr[i] + arr[i + 1];
//     }
//   }
//   N(n);

//   if (parseInt(arr[n] / 1234567) >= 1) {
//     answer = arr[n] - (arr[n] - parseInt(arr[n] / 1234567));
//   } else {
//     answer = arr[n] % 1234567;
//   }
//   console.log(answer);
//   return answer;
// }
// solution(10);

// function solution(progresses, speeds) {
//   var answer = [];
//   let arr = [];

//   function iter() {
//     for (let i = 0; i < progresses.length; i++) {
//       progresses[i] = progresses[i] + speeds[i];
//     }
//     if (progresses[0] < 100) iter();
//   }
//   iter();

//   for (let i = 0; i < progresses.length - 1; i++) {
//     if (progresses[i] >= 100 && progresses[i + 1] >= 100) {
//       let q = progresses.filter((e) => {
//         return e < 100;
//       });
//       let a= see
//       console.log(q);
//       break;
//     }
//   }

//   // console.log(progresses, speeds);
//   return answer;
// }
// solution([93, 30, 55], [1, 30, 5]);
// function solution(skill, skill_trees) {
//   var answer = 0;
//   let count = 0;
//   let arr = Array.from(skill);
//   for (let i = 0; i < skill_trees.length; i++) {
//     let arr2 = [];
//     for (let j = 0; j < arr.length; j++) {
//       if (skill_trees[i].indexOf(arr[0]) === -1) continue;
//       if (skill_trees[i].indexOf(arr[j]) === -1) continue;
//       arr2.push(skill_trees[i].indexOf(arr[j]));
//     }
//     if (arr2.length === 0) count--;
//     for (let k = 0; k < arr2.length - 1; k++) {
//       if (arr2[k] > arr2[k + 1]) {
//         count--;
//         break;
//       }
//     }
//   }

//   answer = skill_trees.length + count;

//   return answer;
// }
// solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);
// function solution(n) {
//   var ans = 0;
//   let last = (n * (n + 1)) / 2;
//   let arr = Array(n).fill([]);
//   console.log(arr);
//   return ans;
// }
// solution(4);
// function solution(s, n) {
//   var answer = "";
//   let word = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//   let arr = Array.from(s);
//   let q = arr.map((a, i) => {
//     if (a === "Z" || a === "z") {
//       word[i - 1];
//     }
//     if (a.toUpperCase() !== a) {
//       word[i + 1].toLowerCase();
//     } else if (a === " ") {
//       (" ");
//     } else {
//       word[i + 1];
//     }
//   });
//   console.log(q);
//   return answer;
// }
// // solution("aB", 1);
// solution("z", 1);
// solution("a B z", 4);

let a = "Z";
console.log(a !== a.toUpperCase(), a === a.toUpperCase());
