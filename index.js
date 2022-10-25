let num=4;
let count=0;
for(let i=1;i<=num;i++)
  {
if (num%i==0)
{
  count++;
}
  }
if(count==2)
{
  console.log("prime");
}
else
{
  console.log("not prime");
}


// let str="mom";
// let new_str="";
// for(let i=str.length-1;i>=0;i--)
// {
//   new_str+=str[i];
// }
// if(new_str==str)
// {
//   console.log("palindrome");
// }
// else{
//    console.log("not palindrome");
// }