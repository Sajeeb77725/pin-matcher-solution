function getPin(){
    const pinRandom = Math.round(Math.random()*10000);
    const pin = pinRandom + '';
    if(pin.length == 4){
        return pinRandom;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('disply-pin').value = pin;
 }

 //event bubble 
 document.getElementById('key-pad').addEventListener('click', function(event){
    const key = event.target.innerText;
    const inputField = document.getElementById('pin-number');
     if(isNaN(key)){
         if(key == 'C'){
             inputField.value = '';
         }
     }
     else{
        const inputValue = inputField.value;
        const value = inputValue + key;
        inputField.value = value;
     }
 })

 //submit button kerishma
 function submitPin(){
     const generatedPin = document.getElementById('disply-pin').value;
     const celcNumber = document.getElementById('pin-number').value;
     const notifySuccess = document.getElementById('notify-success');
     const notifyFile = document.getElementById('notify-fail')
     if(generatedPin == celcNumber){
         notifySuccess.style.display = 'block';
         notifyFile.style.display = 'none';
     }
     else{
         notifyFile.style.display = 'block';
         notifySuccess.style.display = 'none';

     }
 }