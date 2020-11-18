const enCryptEl = document.querySelector('#enCrypt');
const deCryptEl = document.querySelector('#deCrypt');
const code = document.querySelector('#code');

enCryptEl.addEventListener('input', function(e) {
    deCryptEl.value = '';
});

deCryptEl.addEventListener('input', function(e) {
    enCryptEl.value = '';
});

function crypt() {
    if(code.value == ""){
        alert('Code must be written!');
        return false;
    }
    if(enCryptEl.value !== '') {
        deCryptEl.value = enCrypt(enCryptEl.value, code.value);
    }
    else {
        enCryptEl.value = deCrypt(deCryptEl.value, code.value);
    }
}

function enCrypt(str, code) {
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

  
function deCrypt(str, code) {
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
  
