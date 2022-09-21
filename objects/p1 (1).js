// ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
// [32, 30, 26, 28, 44]
let bag="";
let details=[
  {name:'Nrupul',age:32},
  {name:'prateek',age:30},
  {name:'Aman',age:26},
  {name:'Albert',age:28},
  {name:'Yogesh',age:44}
];
for(i=0; i<=details.length-1; i++){
if(details[i]["age"]>30){
  bag=details[i]["name"]+" "+bag;
}
}
console.log(bag,"updated the bag");
