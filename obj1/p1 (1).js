let arr1=["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let arr2=[32, 30, 26, 28, 44];
let arr=[];
for(let i=0; i<=arr1.length-1; i++){
  let obj={};
  obj.name=arr1[i];
  obj.age=arr2[i];
  arr.push(obj);
}
for(let j=0; j<=arr.length-1; j++){
  if(arr[j].age>30){
    console.log(arr[j].name);
  }
}
