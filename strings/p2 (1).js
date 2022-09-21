let bag="";
let str_1="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let str_2="abcdefghijklmnopqrstuvwxyz";
let str_3="sandeep";
for(let j=0; j<=str_3.length-1; j++){
   for(let i=0; i<=str_2.length-1; i++){
     if(str_3[j]==str_2[i]){
       str_3[j]=str_1[i];
       bag=bag+str_1[i];
       break;
     }
  
          }
 
}
console.log(bag);

