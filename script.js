numberBtns = document.querySelectorAll('.displayButton');


var screen = document.getElementById('screen');

for(let i =0; i< numberBtns.length;i++)
{
    numberBtns[i].onclick = function(e){
        str = e.target.innerText;
        screen.value += str;
    };
}

clearButton = document.querySelector('#clear');
clearButton.onclick = function(){
    screen.value = "";
};


equalButton = document.querySelector('#equal');

equalButton.onclick = function(){
    try{
    expr = screen.value.replace('\u00d7','*');
    var result = eval(expr);
    result = result.toFixed(2);
    }
    catch(err)
    {
        screen.input = err.message;
    }
    screen.value = result;
}



backspaceButton = document.querySelector('#backspace');
backspaceButton.onclick = function(){
    screen.value = screen.value.slice(0,-1);
}

document.addEventListener('keydown', (event) => {
    let rowNum = /Digit[0-9]/
    let numPad = /Numpad*/
    let backSpace = /Backspace/;

    var name = event.key;
    var code = event.code;
    if(rowNum.test(code)|| numPad.test(code))
        screen.value = screen.value + name;
    if(backSpace.test(code))
    {
        screen.value = screen.value.slice(0,-1);
    }

    if(/Enter*/.test(code))
    {
        try{
            var result = eval(screen.value);
            result = result.toFixed(2);
            }
            catch(err)
            {
                screen.input = err.message;
            }
            screen.value = result;
    }

  }, false);

