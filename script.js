const columns = document.querySelectorAll(".col")


function generateRandomColors (){
    const hexCodes = '0123456789ABCDEF'
    let color = "";
    for (let i = 0; i < 6; i++){
        color += hexCodes[Math.floor(Math.random()*hexCodes.length)]
    }
    return '#' + color
}
function setRandomColors(){
    columns.forEach(col=>{
        const textName = col.querySelector('h2');
        textName.textContent = generateRandomColors()
        col.style.background = generateRandomColors()
    })
}

setRandomColors()