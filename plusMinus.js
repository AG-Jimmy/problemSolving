
let arr=[1 ,2, 3 ,-1 ,-2 ,-3 ,0 ,0];

let positive=0;
let negative=0;
let zeros=0;
plusMinus=(arr)=>{
for (let i = 0; i < arr.length; i++) {
    
    if (arr[i]>0) {
        positive++
    }else if (arr[i]<0)
    {
        negative++}
        else if(arr[i]==0){
        zeros++
    }
}
positive=positive/arr.length
negative=negative/arr.length
zeros=zeros/arr.length

return positive.toFixed(6)+'\n'+negative.toFixed(6)+'\n'+zeros.toFixed(6)

}
console.log(plusMinus(arr));