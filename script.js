const columns = document.querySelectorAll(".col")
let timeoutID;
function startTimer(){
    timeoutID = setTimeout(() => {
        document.querySelector('#hint').style.opacity = 1;
    }, 5000);
}

function resetTimer() {
    // clear the previously set timeout, if any
    if (timeoutID) {
        clearTimeout(timeoutID);
    }

    // start new timer
    startTimer();
}

document.addEventListener('keydown', event => {
    resetTimer();
    if (event.code.toLowerCase() === 'space') {
        event.preventDefault();
        setRandomColors();
        document.querySelector('#hint').style.opacity = 0;
    }
});

function copyColor (text)
{
    return navigator.clipboard.writeText(text)
}

document.addEventListener ('click', event => {
    resetTimer();
    const type = event.target.dataset.type;
    if (type === 'lock'){
        const elem = event.target.children[0]
        elem.classList.toggle('fa-lock')
        elem.classList.toggle('fa-unlock')
    }
    else if (type==='copy'){
        copyColor (event.target.textContent)
        notification.textContent = `Color ${event.target.textContent} copied to clipboard`;
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.opacity = 0;
        }, 3000);
    }
}
)
// function generateRandomColors (){
//     const hexCodes = '0123456789ABCDEF'
//     let color = "";
//     for (let i = 0; i < 6; i++){
//         color += hexCodes[Math.floor(Math.random()*hexCodes.length)]
//     }
//     return '#' + color
// }
function generateRandomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

function setRandomColors(){
    columns.forEach(col=>{
        const isLocked = col.querySelector('i').classList.contains('fa-lock');
        const text = col.querySelector('h2');
        const button = col.querySelector('button');
        const color = generateRandomColors();
if (isLocked) {return}
        text.textContent = color;
        col.style.background = color;
        setTextColor (text, color)
        setTextColor (button, color)
    })
}

function setTextColor (text, color){
    const luminance = chroma(color).luminance()
    text.style.color = luminance >0.5 ? 'black' : 'white'
}
setRandomColors()