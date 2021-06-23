const containerColor = document.getElementById('container');
const inputText = document.getElementById('text');
const clickBtn = document.getElementById('click');



function genHexColor(){
    const randomColor = Math.floor(Math.random()*16777251).toString(16);
    const changeColor = containerColor.style.backgroundColor;
    
    inputText.innerText = `HEX COLOR : #${randomColor}`;
    containerColor.style.backgroundColor = `#${randomColor}`

}

clickBtn.addEventListener('click', genHexColor);