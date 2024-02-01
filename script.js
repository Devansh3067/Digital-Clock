let currDate = document.querySelector(".date");
let hr = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let format = document.querySelector(".for");
let amPM = document.querySelector(".AMPM");

let meridian;

setInterval(getTime,900);

function getTime(){
    let date = new Date();
    currDate.innerText = "Date : " + date.toDateString();
    let hour = date.getHours();
    if(format.value == "12hr"){
        amPM.style.display = "block";
        if(hour > 12){
            hour = hour-12;
            meridian = "PM";
        }
        else if(hour == 0){
            hour = 12;
            meridian = "AM"; 
        }
        else{
            meridian = "AM"; 
        }
    }
    else{
        amPM.style.display = "none";
    }
    if(hour<10 ){
        hour = "0"+hour;
    }
    let minute = (date.getMinutes()<10?"0":"")+(date.getMinutes());
    let second = (date.getSeconds()<10?"0":"")+(date.getSeconds())

    updateTime(hour, minute, second);
}

function updateTime(h,m,s){
    hr.innerText = h;
    min.innerText = m;
    sec.innerText = s;
    amPM.innerText = meridian;
}