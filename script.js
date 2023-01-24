let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function increment()
{
    count++;
    countEL.textContent = count;
}

function decrement()
{
    count--;
    countEL.textContent = count;
}

function save()
{
    let counStr = " " + count + " - "
    saveEl.textContent += counStr;
    count = 0;
    countEL.textContent = count;
}
