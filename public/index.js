let password = []
let input1El = document.querySelector("input1")
let input2El = document.querySelector("input2")
let input3El = document.querySelector("input3")
let input4El = document.querySelector("input4")
let input5El = document.querySelector("input5")
let input6El = document.querySelector("input6")

function getRandomString(){
    return randomstring = Math.random().toString(36).slice(-8);
}

function generatePassword() {
    let length = document.getElementById("length").value
    if (length == "") length = 10
    // console.log(length);
    for (let i = 0; i < 6; i++){
        password[i] = password_generator(length);
    }
    input1.value = password[0];
    input2.value = password[1];
    input3.value = password[2];
    input4.value = password[3];
    input5.value = password[4];
    input6.value = password[5];
}

function copyToClipboard(number) {
    navigator.clipboard.writeText(password[number - 1]);
    alert("Copied to Clickboard! " + password[number - 1]);
}

// Not my code
function password_generator( len ) {
    var length = (len)?(len):(10);
    var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
    var numeric = '0123456789';
    var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var password = "";
    var character = "";
    var crunch = true;
    while( password.length<length ) {
        entity1 = Math.ceil(string.length * Math.random()*Math.random());
        entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
        entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
        hold = string.charAt( entity1 );
        hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
        character += hold;
        character += numeric.charAt( entity2 );
        character += punctuation.charAt( entity3 );
        password = character;
    }
    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    return password.substr(0,len);
}