const toCryptEl = document.querySelector('#toCrypt');
const enCryptEl = document.querySelector('#enCrypt');
const code = document.querySelector('#code');

enCryptEl.addEventListener('input', function(e) {
    toCryptEl.value = '';
});

toCryptEl.addEventListener('input', function(e) {
    enCryptEl.value = '';
});

function crypt() {
    if(code.value == ""){
        alert('Code must be written!');
        return false;
    }
    if(toCryptEl.value !== '') {
        enCryptEl.value = toCrypt(toCryptEl.value, code.value);
    }
    else {
        toCryptEl.value = enCrypt(enCryptEl.value, code.value);
    }
}

function toCrypt(str, code) {
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

  
function enCrypt(str, code) {
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
  
