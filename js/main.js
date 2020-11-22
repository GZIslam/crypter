if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('sw.js').then(registration => {
        console.log('Sw Reg');
        console.log(registration);
    }).catch(error => {
        console.error('Sw error');
        console.log(error);
    });
}


const textEl = document.querySelector('.text');
const codeEl = document.querySelector('.code');

codeEl.addEventListener('input', function(e) {
  textEl.value = '';
});

function enCrypt() {
    if(codeEl.value == ""){
        alert('Code must be written!');
        return false;
    }
    textEl.value = enCryptText(textEl.value, codeEl.value);
}

function deCrypt() {
    if(codeEl.value == ""){
        alert('Code must be written!');
        return false;
    }
    textEl.value = deCryptText(textEl.value, codeEl.value);
}


function enCryptText(str, code) {
    let result = [];
    let str1 = Array.from(str).reverse();
    let charCodeArr = [];
    str1.forEach(a => {
      charCodeArr.push(a.charCodeAt(0));
    });
    let index = 0;
    for(var i = 0; i < charCodeArr.length; i++){
      charCodeArr[i] += Number(code[index]);
      index++;
      if(index == code.length)
         index = 0;
    }
    charCodeArr.forEach(a => {
      result.push(String.fromCharCode(Number(a)));
    });
    return result.join('');
}

  
function deCryptText(str, code) {
    let result = [];
    let str1 = Array.from(str); // reverse
    let charCodeArr = [];
    
    str1.forEach(a => {
      charCodeArr.push(a.charCodeAt(0));
    });
    
    let index = 0;
    for(var i = 0; i < charCodeArr.length; i++){
      charCodeArr[i] -= Number(code[index]);
      index++;
      if(index == code.length)
         index = 0;
    }
    
    charCodeArr.forEach(a => {
      result.push(String.fromCharCode(Number(a)));
    });
    
    return result.reverse().join('');
}
  
function textCopy() {
    textEl.select();
    document.execCommand("copy");
}

function textPaste() {
    // textEl.select();
    // document.execCommand("paste");
    navigator.clipboard.readText().then(text => textEl.value = text);
}

const codeInput = document.querySelector('#code');

codeInput.addEventListener('input', function(){
  codeInput.value = codeInput.value.replace(/\D/g, "");
});