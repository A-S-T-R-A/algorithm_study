// DAY 2 - 07.10.23

/* Task 1
A, b, c
Выбрать 2 из 3х чтобы их сумма была максимальна
5 2 6 → 11
3 3 3 → 6
Let a =.., b = .., c =..

(a+b+c - минимум) */

let minNum = 0

if(a>b){
   //выбор между b и c
  if(b>c){
    minNum = c
  } else {
     //b <= c
    minNum = b
  }
} else {
   //a <= b, a или c
   if(a>c){
	 minNum = c
   } else {
	minNum = a
   }
}
a = -11
b = 2
c =  4
6
(a+b+c - minNum)
_____________________

// Второе решение ( лучшее )

let min = a
if(b< min) {
min = b}
if(c<min){
min=c}

/* TASK 2
a, b, c
Правда ли то, что среди них ровно одно четное число, console.log(true/false)
4, 5, 7 → true
2, 4, 1 → false
2, 2, 2 → false
 */

let count = 0

if(a%2 === 0){
count += 1
} 
if (b%2 === 0){
count += 1
}
if (c%2 === 0){
count += 1
}

if (count === 1){
return true
} else {
return false
}

///VADOS
(a % 2 === 0) + (b % 2 === 0) + (c % 2 === 0) === 1;

// true/false → 1/0


// TASK 3 (30.09)
mxs = []

for (let i = 0; i < n; i++){
  let maxNumb = 0 
   //i – индекс текущей строки      (вложенного массива)
   // mxs.push(Math.max(...a[i]))
    for (let j = 0; j < m; j++) {
      if(a[i][j] >maxNumb) {
          maxNumb = a[i][j]
       }
   }
mxs.push(maxNumb)
}

/* findMaxInRows(n, m, a) : number[] {...}

N m a
N = 2 m = 3 a = [[1, 3, 0], [2, 2, 5]]
1 3 0       1 2 | 2
2 2 5       3 2 | 3
—----       0 5 | 5
2 3 5

Вращаем массив ???
b = [] //m массивов по n элементов


Какие элементы массива А лежат в 0-й строчке массива Б?
A[0][0] a[1][0]
В 1-й строчке Б? A[0][1] a[1][1] */

a = [[1, 3, 0], [2, 2, 5]]

let b =[]

//версия 0
B = [a[0][0], a[1][0]] 

//версия 1
b_row = []
for (let s=0; s<a.length;s++){
   b_row.push(a[s][0]) 
}

//версия 2
b = []
for (let j =0; j<a[0].length; j++){
  let b_row =[]
  for (let i =0; i<a.length;i++){
     b_row.push(a[i][j]) 
  }
   b.push(b_row) 
}
//ДЗ: соединить вместе с вызовом функции


/* TASK 4
Развернуть массив
A = [....]
A = [3, 6, 7, 11, 0]
[0, 11, 7, 6, 3]
[1, 2, 3]    []
[1, 2, 3]    [3]
[1, 2, 3] [2, 3]
             [3, 2, 1] */

Bb = []
for (let i = A.length-1; i >= 0 ; i-=1){
   Bb.push(A[i])
}

/* TASK 5
Массив из чисел, нужно подсчитать сколько раз встречается каждое число

Найти самое частое число
[2, 4, 2, 10, 1, 1, 1] – 
2: 2
4: 1
10: 1
1: 3 */

//Версия 1
// Сколько раз встречается двойка
// Let numCounter = 0
// Let ans = [0, 0, 0, 0, 0, 0]
//ans[i] – число чисел равных i

// ДЗ

function getRepeatedNumber(arr) {
    const res = {};
    
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) {
        if (res[arr[i]] === undefined) {
          res[arr[i]] = 2;
        } else {
          res[arr[i]] += 1;
        }
      }
    }
    
    return res;
  }

  const A = [[1, 2, 7], [3, 4, 5]];

  function findMaxInColumns(A) {
      const N = A.length;
      const M = A[0].length;
      const columns = [];
  
      for (let j = 0; j < M; j++) {
          let column = [];
  
          for (let i = 0; i < N; i++) {
              column.push(A[i][j]);
          }
  
          columns.push(column);
      }
  
      const maxInColumns = [];
  
      for (let j = 0; j < M; j++) {
          let maxNumb = 0;
  
          for (let i = 0; i < N; i++) {
              if (columns[j][i] > maxNumb) {
                  maxNumb = columns[j][i];
              }
          }
  
          maxInColumns.push(maxNumb);
      }
  
      return maxInColumns;
  }
  
  console.log(findMaxInColumns(A)); 