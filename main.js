var lastCount = 0;
var raw = "";
var started = false;
var timed = false;
function startTimer() {
    if(!started && timed) {
    var time = setInterval(checkProgress, 10000);
        started = true;
    }
}
function WordCount(str) {
     return str.split(' ')
            .filter(function(n) { return n != '' })
            .length;
}
function getData()
{
 raw = document.getElementById("text").value
 document.getElementById("wordCounter").innerHTML = "Words: " + WordCount(raw)
}
function checkProgress() {
    raw = document.getElementById("text").value
    console.log("last count: " + lastCount)
    console.log("current count: " + WordCount(raw))
    if(WordCount(raw) > lastCount || WordCount(raw) >= document.getElementById("wordGoal").value) {
        lastCount = WordCount(raw)
    }
    else {
        document.getElementById("text").value = "Failed!"
        clearInterval(time)
        lastCount = 0
    }
}

/*const modifyCopy = e => {
    e.clipboardData.setData('text/plain', 'Please don\'t copy our work!');
    e.preventDefault();
};

document.getElementById("text").addEventListener('copy', modifyCopy);*/
