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

