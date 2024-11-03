const button=document.getElementById('btn');
const input=document.getElementById('input');

const number="1234567890"
const special="!@#$%^&*()+:;<>,./?"
const capital="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const small="abcdefghijklmnopqrstuvwxyz";

const strings=[number,special,small,capital];
const randomStr="";



  button.addEventListener('click',function() {
    const randomChars = getRandomChars(12);
    input.value=randomChars;
        
  })


  function getRandomChars(length) {
    let chars = '';
    for (let i = 0; i < length; i++) {
      const randomStr = strings[Math.floor(Math.random() * strings.length)];
      const randomChar = randomStr[Math.floor(Math.random() * randomStr.length)];
      chars += randomChar;
    }
    return chars;
  }

  const copyText = () => {
    input.select();
    document.execCommand('copy');
  };
  
  const copyBtn = document.querySelector('.copyBtn');
  copyBtn.addEventListener('click', copyText);
  


