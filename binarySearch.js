
binarySearch=(arr,num)=>{
    let low=0;    
    let high=arr.length-1;//9
   
    
while (low<high) {
    // console.log(low,high)
    let mid =parseInt(low+high/2);//4

    let guess=arr[mid];//45

    if (guess==num){
    return mid}

    if (guess>num){
        high=parseInt(high-mid/2);
    // mid =parseInt(low+mid/2)
    }
if(guess<num)
{
    low=parseInt(low+mid/2);
}
}
return `Your array is:${NaN}`;
}
let my_arr=[0,1,21,33,45,45,61,71,72,73];
console.log(binarySearch(my_arr,33));