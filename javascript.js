function validateForm(){
    var userName=document.getElementById("userName");
    var password=document.getElementById("password");
    var userNameError=document.getElementById("userNameError");
    var passwordError=document.getElementById("passwordError");
    userNameError.innerHTML=" ";
    passwordError.innerHTML=" ";
    var isValid=true;
    if(userName.value===""){
        userNameError.innerHTML="User Name is required!"
        isValid=false;
    }
    if(password.value===" "){
        passwordError.innerHTML="Password is required";
        isValid=false;
    }
    else if(password.value.length<8){
        passwordError.innerHTML="Password should be atleast 8 characters";
        isValid=false;
    }
    else if(!/\d/.test(password.value)){
        passwordError.innerHTML="Password should contain atleast one number";
        isValid=false;
    }
    if(isValid){
        alert("Login is achieved");
    }
    return false;


}