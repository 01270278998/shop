let text = document.getElementById('test');
let strString =  text.textContent;
let splitText =  strString.split('');
text.textContent = "";
for (let i = 0; i < strString.length; i++){
  text.innerHTML += '<span>'+ splitText[i] +'</span>';
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick () {
  const span = document.querySelectorAll('span')[char];
  span.classList.add('anime');
  char++;
  if(char === splitText.length){
    complet();
    return;
  }
}

function complet() {
  clearInterval(timer);
  timer = null;
}







