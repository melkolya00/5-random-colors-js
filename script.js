const columns = document.querySelectorAll(".col")
document.addEventListener('keydown', event => {
    if (event.code.toLowerCase() === 'space') {
        event.preventDefault();
        setRandomColors();
        document.querySelector('#hint').style.display = 'none';
    }
});


document.addEventListener ('click', event => {
    const type = event.target.dataset.type;
    if (type === 'lock'){
        const elem = event.target.children[0]
        elem.classList.toggle('fa-lock')
        elem.classList.toggle('fa-unlock')
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