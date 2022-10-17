const text = document.querySelector('.fancy');
const stringText = text.textContent;

const splitText = stringText.split('');
text.textContent = '';

for(let i=0; i < splitText.length; i++){
  text.innerHTML += '<span>' + splitText[i] + '</span>'
}

console.log(splitText);

let char = 0;
let timer = setInterval(onTick, 50);
