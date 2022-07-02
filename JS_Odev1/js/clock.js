let username = prompt("Adınız nedir?");
if(username === "")
{
    alert("Ad alanını boş bırakmayınız!")
}
else {
    let myName = document.querySelector("#myName");
    myName.innerHTML = `${username[0].toUpperCase()}${username.slice(1).toLowerCase()}`;
    showTime();
}

let arr = ["aaa", "bbb", {key1: "1aaa", key2:3}];
localStorage.setItem("movies", JSON.stringify(arr));
let arr2 = JSON.parse(localStorage.getItem("movies"));

function showTime() { 
    handleTimer();
    setTimeout(handleTimer, 1000);
}

function handleTimer() {
    const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let date = new Date();
    let clock = document.querySelector("#myClock");
    clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} 
                       ${days[date.getUTCDay()]}`;
}

