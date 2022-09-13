const message = document.getElementById('passwordAdv');
const password = document.getElementById('user_password');
const verifpassword = document.getElementById('conf_password');




if (password.textContent !== verifpassword.textContent || password.textContent === ''){
    message.textContent = "*Passwords do not match"
}
password.addEventListener('input', () =>{
    
    if(password.value !== verifpassword.value ||password.value == ""){
        message.textContent = "*Passwords do not match";
    }
    else{
        message.textContent = "";
    }
    
} )

verifpassword.addEventListener('input', () =>{
    if(password.value !== verifpassword.value ||password.value == ""){
        message.textContent = "*Passwords do not match";
    }
    else{
        message.textContent = "";
    }
    

} )