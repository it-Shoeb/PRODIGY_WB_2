let hour = document.querySelector('.hh')
let minute = document.querySelector('.mm')
let second = document.querySelector('.ss')

let start = document.querySelector('.start')
let pause = document.querySelector('.pause')
let reset = document.querySelector('.reset')

let h = 0
let m = 0
let s = 0

function timer(hh, mm, ss){
    let intervalTimer = setInterval(() => {    
        
        
        if(ss >= 61){
            ss = 1
            mm = mm + 1
            minute.textContent = mm
        }else if(mm >= 60){
            mm = 0
            hh = hh + 1
            hour.textContent = hh
        }else if(hh > 12){
            hh = 0
        }
        
        second.textContent = ss
        
        ss++
    }, 18);
    
    pause.addEventListener('click', () => {
        h=hh
        m=mm
        s=ss
        h=hh
        m=mm
        s=ss
        clearInterval(intervalTimer);
    })

    reset.addEventListener('click', () => {
        hh= 0
        mm= 0
        ss= 0
        clearInterval(intervalTimer)
        hour.textContent = hh
        minute.textContent = mm
        second.textContent = ss
        h=0
        m=0
        s=0

    })
    // intervalTimer();   
}

start.addEventListener('click', () => {
    timer(h, m, s);
})