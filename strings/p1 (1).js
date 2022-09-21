let str="sandeep will be going to be a full stack web developer";
let count=0;
for(let i=0; i<=str.length-1; i++){
  if(str[i]==" "){
    count++;
  }
}
console.log(count+1+" "+"words");