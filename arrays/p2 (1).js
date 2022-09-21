let char="s";
let arr_1=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let arr_2=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
for(i=0; i<=arr_1.length-1; i++){
  if(arr_1[i]==char){
    arr_1[i]=arr_2[i];
    console.log(arr_1[i]);
  }
}