const output_window = document.getElementById("output_window");
const rangeBar = document.getElementById("rangeBar");
const rangeValue = document.getElementById("rangeValue");
const genBtn = document.getElementById("genBtn");
const copyBtn = document.getElementById("copyBtn");
const toast = document.getElementById("toast");
const copyPass = document.getElementById("copyPass");

let allChar = "abcdefghijklmnopqrstupwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

// function for generate password
function generatePassword(){
    let newPassword = "";
    for(let i = 0; i < rangeBar.value; i++){
        let randomNumber = Math.floor(Math.random() * allChar.length);
        newPassword = newPassword + allChar[randomNumber];
    }
    console.log(newPassword);
    output_window.value = newPassword;
}

// click generate button
genBtn.addEventListener("click", generatePassword)


// slide rangebar
rangeBar.addEventListener("input", () => {
    rangeValue.innerHTML = rangeBar.value;
    // generatePassword();
})


// copy button
copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(output_window.value);
    show_toast(output_window.value)
})


// show toast massage
let x;
function show_toast(password){

    copyPass.innerHTML = password;

    clearTimeout(x);
    toast.style.transform = "translateY(20px)"
    x = setTimeout(() => {
        toast.style.transform = "translateY(-100px)"
    }, 5000);
}


