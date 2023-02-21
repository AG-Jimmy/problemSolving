let arr=
    [[  11,  2,  4  ],
    [  4 ,  5,  6 ],
    [  10,  8, -12 ]]

diagonalDifference=(arr)=>{
    // let right=arr[0][2]+arr[1][1]+arr[2][0];
    // let left=arr[0][0]+arr[1][1]+arr[2][2];
let right=0;
let left=0;
let cunt=arr.length-1;

for (let i=0; i< arr.length;i++){
    let sumLeft=arr[i][i];
    left=left+sumLeft;

    let sumRight=arr[i][cunt-i]
    right=right+sumRight;

    
}
let x
if(right<left)
{x=left-right}else{x=right-left}

return  x
}
console.log(diagonalDifference(arr));