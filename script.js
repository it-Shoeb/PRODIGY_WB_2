let hour = document.querySelector('.hh')
let minute = document.querySelector('.mm')
let second = document.querySelector('.ss')

let hh = 1
let mm = 1
let ss = 1

function timer(){
    let intervalTimer = setInterval(() => {    
        
        if(ss >= 60){
            ss = 1
            mm = mm + 1
            minute.textContent = mm
        }else if(mm >= 60){
            mm = 1
            hh = hh + 1
            hour.textContent = hh
        }else if(hh > 12){
            hh = 1
        }

        second.textContent = ss

        ss++
    }, 1000);
    
    // intervalTimer();   
}

timer()