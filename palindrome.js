
 let str="mom";
 let new_str="";
 for(let i=str.length-1;i>=0;i--)
 {
   new_str+=str[i];
 }
 if(new_str==str)
 {
   console.log("palindrome");
 }
 else{
    console.log("not palindrome");
}