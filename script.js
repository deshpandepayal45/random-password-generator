let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let number = document.getElementById("number");
let symbol = document.getElementById("symbol");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");


//showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', () => {
    passBox.value = generatepassword();
});

//math.random() function always create values betn 0 to 1
//function to generate password

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = "!@~#$%^&*()";
function generatepassword() {
    let genPassword = "";

    let allChars = "";
    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += number.checked ? numbers : "";
    allChars += symbol.checked ? symbols : "";

    if (allChars == "" || allChars.length == 0) {
        return genPassword;
    }

    let i = 1;
    while (i <= inputSlider.value) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }


    return genPassword;
}


copyIcon.addEventListener('click', () => {
    if (passBox.value != "" || passBox.value.length >= 1) {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        setTimeout(() => {
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";

        }, 2000);
    }

});