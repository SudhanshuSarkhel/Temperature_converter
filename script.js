document.getElementById('button').addEventListener('click',function(){
    const inputTemp=parseFloat(document.getElementById('input').value);
    const firstunit=document.getElementById('first').value;
    const secondunit=document.getElementById('second').value;
    let result;

    if(firstunit==='celsius' && secondunit==='kelvin'){
        result = inputTemp + 273.15;
    }
    else if(firstunit==='celsius' && secondunit==='fahrenheit'){
        result = (inputTemp * 9/5) + 32;
    }
    else if(firstunit==='fahrenheit' && secondunit==='kelvin'){
        result = ((inputTemp - 32) * 5/9)+ 273.15;
    }
    else if(firstunit==='fahrenheit' && secondunit==='celsius'){
        result = (inputTemp - 32) * 5/9;
    }
    else if(firstunit==='kelvin' && secondunit==='celsius'){
        result = inputTemp - 273.15;
    }
    else if(firstunit==='kelvin' && secondunit==='fahrenheit'){
        result = ((inputTemp - 273.15) * 9/5) + 32;
    }
    else{
        result = inputTemp;
    }

    document.getElementById('result').textContent=`Result: ${result.toFixed(2)} ${secondunit}`;
});