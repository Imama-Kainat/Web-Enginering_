changebackgroundcolor=()=>{
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    document.body.style.backgroundColor = randomColor;
  
}
document.getElementById('changeColorButton').addEventListener('click', changeBackgroundColor);