
let my_array=[3,5,-4,8,11,1,6];
let myMap=new Map();
for(let i=0;i<my_array.length;i++){
    myMap.set(my_array[i],my_array[i])
    };
    
twoNumberSum = (array,targetSum)=>{
    
    for(let i=0; i<array.length;i++){
        let dif=targetSum-array[i];
        if(dif==myMap.get(dif)&& myMap.get(dif)!=array[i])
            return `${myMap.get(dif)} And ${array[i]}`;
        };
}; 
console.log(twoNumberSum(my_array,7));
