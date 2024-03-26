
function debouncetime(func,seconds)
{
let timerid;
return function (){
    const context = this;
    const args = arguments;
    clearTimeout(timerid)
      timerid = setTimeout(() => {
        func.apply(context,args)
      }, seconds * 1000);
}
}

function fibonacci(Nthnumber)
{
 let result = [] 
 if(Nthnumber.length == 1)
 {
  return [0]
 }
 else if(Nthnumber.length == 2)
 return [0,1]

 result = [0,1]
 while(result.length<=Nthnumber)
 {
    let newnumber = result[result.length-1] + result[result.length-2];
     result.push(newnumber);
 }

}

function isPrimeNumber(n)
{
  if(n==0 || n == 1)
  return false

  for(let i=2;i<=Math.sqrt(n);i++)
  {
    if(n%i == 0)
    return false;
  }
  return true;
}

function findLargestNumber(nestedArray)
{
    let largestNumber = nestedArray[0][0]

    for (aray of nestedArray)
    {
        for (element of aray)
        {
          if(element>largestNumber)
          largestNumber = element;
        }
    }
    return largestNumber;
}

function toTitleCase(str) { 

    return str.replace(/\b\w/g, l => l.toUpperCase()); 
  
  } 
  
function sortbykey(array,key)
{
    return array.sort((a,b)=> a.key-b.key)
}  

function findMaxNumber(arr) { 

    return Math.max(...arr); 
  
  } 
  
function isPalindrome(str)
{
    return str===str.split('').reverse().join('')
}

function factorial(n)
{
    if(n==0 || n==1)
    return 1;

    else
    return n * factorial(n-1);
}

function deepClone(obj)
{
    return JSON.parse(JSON.stringify(obj))
}

function mergeSortedArray(array1,array2)
{
    let newArray = []
    let i=0
    let j=0
    while(newArray.length<(array1.length + array2.length))
    {
        if(j==array2.length)
        {
            newArray.push(array1[i])
            i++;
        }
        else if(i==array1.length)
        {
            newArray.push(array2[j])
            j++;
        }
        else if(array1[i]>array2[j])
        {
            newArray.push(array2[j])
            j++;

        }
        else
        {
            newArray.push(array1[i])
            i++;

        }
    }
    return newArray

}

console.log(mergeSortedArray([1,3,4,5,6],[2,4,7,8]))

function flattenArray(nestedArray)
{
    return nestedArray.flat(Infinity)
}

function reverseArrayManual(str)
{
    for(let i=0;i<(str.length)/2;i++){
        let a=str[i]
        str[i]=str[str.length-1-i]
        str[str.length-1-i]=a
    }
    //for reverse string manually add empty string starting from reverse
    return str
    
}

console.log(reverseArrayManual(['a','b','c']))
function findMinMax(arr) { 

    let min = Math.min(...arr); 
  
    let max = Math.max(...arr); 
  
    return [min, max]; 
  
  }
  
  function uniqueArray(array1)
  {
    return [...new Set(array1)]
  }
  
  console.log(uniqueArray([1,1,2,3,4,5,5,7,2,9]))

  function sumofarray(array1)
  {
    array1.reduce((prev,current)=>{return (prev + current)},0)
  }

  function countOccurance(str)
  {
    const charCount = {}; 

    for (let char of str) { 
  
      charCount[char] = (charCount[char] || 0) + 1; 
  
    } 
  }

  function removeDuplicate(array1)
  {
    return Array.from(new Set(array1))
  }

  function sortAscending(array1)
  {
    return array1.sort((a,b)=>a-b)
  }

  function reverseSentance(sentance)
  {
    let reversearray = reverseArrayManual(sentance.split(' '))
    return reversearray.join(' ')
  }

  function largestDifference(array)
  {
    array.sort((a,b)=>a-b)
    return array[array.length-1]-array[0]

    //max and min in a single iteration and return max-min
  }

  function secondSmallest(arr) { 

    const sortedArr = arr.sort((a, b) => a - b); 
  
    return sortedArr[1]; 
  
  } 
  
  function randomStringGen(number)
  {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
    let randomstring = ''
    for(let i=0;i<number;i++)
    {
        randomstring+= characters.charAt(Math.floor((Math.random()*characters.length)))
    }
    return randomstring;
  }
  

  function arrayAvgValue(array)
  {
    let sum = array.reduce((prev,curr)=>{
      return prev + curr;
    },0)
    return sum / array.length;
  }

  function sortStrings(arr) {
    return arr.slice().sort();
  }   
  function findElementIndex(arr, element) { 
    const index = arr.indexOf(element); 
    return index !== -1 ? index : -1; 
  } 
  
  function removeFalsy(array)
  {
    return array.filter((val)=> val == true)
  }
  
  function mergeArrays(array1,array2)
  {
    const mergedArray = []; 
    const maxLength = Math.max(array1.length, array2.length);   
    for (let i = 0; i < maxLength; i++) { 
        if (i < array1.length) mergedArray.push(array1[i]); 
        if (i < array2.length) mergedArray.push(array2[i]);
      } 
  }