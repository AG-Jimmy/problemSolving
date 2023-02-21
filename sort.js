// def findSmallest(arr): 
//  smallest = arr[0] 
//  smallest_index = 0 
//  for i in range(1, len(arr)):
//  if arr[i] < smallest:
//  smallest = arr[i]
//  smallest_index = i
//  return smallest_index
//-----------------------
// def selectionSort(arr): Sorts an array
//  newArr = []
//  for i in range(len(arr)):
//  smallest = findSmallest(arr)
//  newArr.append(arr.pop(smallest))
//  return newArr
// print selectionSort([5, 3, 6, 2, 10])
//-------------------------------------
// findSmallest=(arr)=>{
//     let smalLest =arr[0]//first element for array
//     let smalLest_index= 0 //first index on array
//     for(let i=1;i<arr.length;i++ ){
//     if(arr[i]<=smalLest){
//         smalLest = arr[i]
//         smalLest_index = i
//     }
//     return smalLest_index;}}
// my_arr=[50,60,40,20]
// console.log(findSmallest(my_arr));