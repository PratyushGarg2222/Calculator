let button = document.querySelectorAll(".button");

var resultText = document.getElementById("resultText");

console.log("connected");

let inputString = '';
let maxDig = 12;

function noOfDigits(a){

    let dig = 0;
    while(a>0){

        dig++;
        a = Math.floor(a/10);

    }

    return dig;

}

function updateRes(n){


    let noofdig = noOfDigits(n);

    if(noofdig<12)
    {

        if(Math.floor(n)!=n)
            resultText.textContent = n.toFixed(2);
        
        else
            resultText.textContent = n;

    }
    else
    {
        
          let s = n.toExponential();
        s = s.substring(0,5) + 'e+' + (noofdig-1);
        resultText.textContent = s;

    }

}

function updateInp(){


    let s = '';
    for(let i=inputString.length-1; i>=0&&i>inputString.length-12; i--){

        s+=inputString.charAt(i);

    }

    let s2 = '';

    for(let j = s.length-1; j>=0; j--){

        s2+=s.charAt(j);

    }
    resultText.textContent = s2;

}

button[0].addEventListener("click", function(){

    inputString = '';
    updateInp();

});

button[1].addEventListener("click", function(){

    inputString = inputString.substring(0, inputString.length - 1);
    updateInp();

});


button[2].addEventListener("click", function(){

    inputString += '/';
    updateInp();

});

button[3].addEventListener("click", function(){

    inputString+='7';
    updateInp();

});

button[4].addEventListener("click", function(){

    inputString+='8';
    updateInp();

});

button[5].addEventListener("click", function(){

    inputString+='9';
    updateInp();

});

button[6].addEventListener("click", function(){

    inputString+='*';
    updateInp();

});


button[7].addEventListener("click", function(){

    inputString+='4';
    updateInp();

});


button[8].addEventListener("click", function(){

    inputString+='5';
    updateInp();

});


button[9].addEventListener("click", function(){

    inputString+='6';
    updateInp();

});


button[10].addEventListener("click", function(){

    inputString+='+';
    updateInp();

});


button[11].addEventListener("click", function(){

    inputString+='1';
    updateInp();

});


button[12].addEventListener("click", function(){

    inputString+='2';
    updateInp();

});


button[13].addEventListener("click", function(){

    inputString+='3';
    updateInp();

});


button[14].addEventListener("click", function(){

    inputString+='-';
    updateInp();

});

button[15].addEventListener("click", function(){

    inputString+='0';
    updateInp();

});

button[16].addEventListener("click", function(){

    inputString+='.';
    updateInp();

});

button[17].addEventListener("click", function(){

    if(eval(inputString))
        updateRes(eval(inputString));
        
    inputString = '';

});



