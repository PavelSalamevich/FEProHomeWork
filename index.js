
/*1)Написать функцию, которая получает в качестве аргумента 
число и строку, где число обозначает сколько раз должна 
быть добавлена эта строка в массив. Возвращает 
массив из этих строк. Например: 
передаем строку “dog” и цифру 3, в 
результате мы получаем [“dog”,”dog”,”dog”].*/

function dog (string, count){
    let result = [];
    for (let i =0; i < count; i++) {
        result.push(string);
    }
    return result;
}
let inputString = "dog";
let repeatCount = 3;
const resultArr = dog(inputString, repeatCount);
console.log(resultArr);

/*Написать функцию, которая получает в качестве аргумента
 массив с числами. Функция нужна для расчета 
 суммы четных чисел в массиве.*/ 

function sumOfNumbers(arr){
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0 ){
        sum +=arr[i];
    }
}
return sum;
}
let numbers = [2, 5, 8, 10, 15, 20];
let evenSum = sumOfNumbers(numbers);
console.log(evenSum)

 /*Так же написать новую функцию для расчета суммы 
 нечетных чисел в массиве. */

 function sumOf(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0 ){
            sum +=arr[i];
        }
    }
    return sum;
    }
    let numb = [2, 5, 8, 10, 15, 20];
    let eSum = sumOf(numb);
    console.log(eSum)

/*Написать функцию, которая принимает как аргумент 
две полученные суммы и выводит наибольшее из них.*/

function larger (arr){
    let evenSum = sumOfNumbers(arr);
    let eSum = sumOf(arr);
    if (evenSum > eSum){
         return evenSum;
    }else{
            return eSum;
        }
    }
    let largerSum = larger (numb);
    console.log ("Наибольшая сумма", largerSum)

    /*3)Напишите функцию, которая как аргумент 
    принимает строку. 
    Эта функция возвращает это слово в развернутом виде. 
    Пример:  “cat” => “tac”*/

    function reverseString (str){
        return [...str].reverse().join("");
    }
    let original = "CAT"
    let reversed = reverseString(original);
    console.log(reversed);

    /*4)Написать функцию, 
    которая будет находить максимальное число в массиве.*/

    function findMax(arr){
        let max = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]>max){
                max = arr[i];
            }
          }
        return max;
    }
    let number = [23, 8, 45, 12, 67, 4];
    let maxNumber = findMax (number);
    console.log (maxNumber)

    /*5)написать функцию, которая будет 
    находить минимальное число в массиве.*/

    function findMin(arr){
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min){
                min = arr[i];
            }
          }
        return min;
    }
    let minNumber = findMin (number);
    console.log (minNumber)