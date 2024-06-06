function wordsLen(str) { 
    const array = str.trim().split(/\s+/); 
    return array.length; 
} 
  
const str = "hello everyone! i am vishva hirpara"; 
  
console.log("Word count:" ,wordsLen(str));