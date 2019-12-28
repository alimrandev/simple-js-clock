// today


// DOM
function nowTime() {
    let today = new Date(),
        hr = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
        // AM PM
    let amPm = document.getElementById('amPm');
    amPm.textContent = hr>=12 ? 'PM' : 'AM';
    // if(hr>=12){
    //     amPm.textContent = 'PM'
    // }else{
    //     amPm.textContent = 'AM'
    // }
    // 12 hr formate
    hr = hr % 12 || 12;
    

    function addZero(n) {
        return (parseInt(n) < 10 ? '0' : '') + n;
    };
    hour = document.getElementById('hr').textContent = hr,
    minute = document.getElementById('min').textContent = addZero(min),
    seconds = document.getElementById('sec').textContent = addZero(sec);


    
    
    setTimeout(nowTime, 1000)
}
 // add greetings
 function greetings(){
    let today = new Date(),
    hr = today.getHours();
    let greet = document.getElementById('greeting');
    if(hr<12){
        greet.textContent = 'Good Morning'
    }else if(hr<18){
        greet.textContent = 'Good Afternoon'
    }else{
        greet.textContent = 'Good Evening'
    }
};






greetings();
nowTime();