
let my_array=[2,5,4,1,2,4,5,1,4,2,5,8,5];
let my_Map=new Map();

for(let i=0;i<my_array.length;i++)
{
    let currentValue=1;
    if (my_Map.has(my_array[i])==true)
             
    {
        my_Map.set(my_array[i],currentValue+=my_Map.get(my_array[i]))
        
    }else{
        my_Map.set(my_array[i],currentValue)
    }
}
console.log(my_Map);





















// let new_array= new Array();
// repeatNumber=(array,new_array)=>{
//     let array=array.length;
//     let new_array=new_array.length;
    
// while(array>new_array){
//     for(i=0;i<array;i++){
//         let count=1;
//         if(array[i]==array[i])
//         {
//            new_array=[array[i]],[count++]
//         }
//     }
    
// }
//     return new_array
// }

// console.log(repeatNumber(my_array,new_array));
