
let s ='12:45:54AM'
let splTime= s.split(':')

let getTimeString= s.match(/[a-z]/ig)
let stringTime=getTimeString.join("")

let hors=splTime[0]
let minutes=splTime[1]
let seconds=splTime[2]

let getSeconds= seconds.match(/[0-9]/g)
let secondsTime=getSeconds.join("")
if ((stringTime=='PM'||stringTime=='pm') && hors!=='12') {
    hors=parseFloat(hors)+12
}

if ((stringTime=='AM'||stringTime=='am') && hors=='12') {
    hors='00'
}
let time =`${hors}:${minutes}:${secondsTime}`
console.log(time);
