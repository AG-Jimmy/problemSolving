let n=50;

    let count=1
    let countSpaces=n-1;
    let stair='#'
    let spaces=' '
while (count<=n){
    console.log(`${spaces.repeat(countSpaces)}${stair.repeat(count)}`)
    count ++
    countSpaces --
    
}


