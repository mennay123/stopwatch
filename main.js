let displayTime = document.getElementById("display-time");
let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;//متغير لتخزين interval

function stopwatch() {  //هذه الدالة يتم استدعاؤها كل ثانية (1000 مللي ثانية) لتحديث الوقت المعروض على الشاشة:
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
    if (timer !== null) { //إذا كان المؤقت قد بدأ بالفعل 
        clearInterval(timer); //يتم إيقافه باستخدام clearInterval
    }
    timer = setInterval(stopwatch, 1000); //الذي يقوم بتشغيل دالة stopwatch
}

function watchStop() {
    clearInterval(timer);
}

function watchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00"; //يتم تحديث عرض الوقت إلى "00:00:00" في صفحة HTML.
}