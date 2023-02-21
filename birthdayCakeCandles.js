let candles=[4,3,1,4]
let max=candles[0]
let count=0;
for(let i=0;i<candles.length;i++)
{
    if (candles[i]>max) {
        max=candles[i]
    }
}

for(let i=0;i<candles.length;i++)
{
    if (candles[i]==max) {
        count++
    }
}
console.log(count);