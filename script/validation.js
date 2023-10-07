const rform = document.getElementById('RegisterForm')
const names = document.getElementById('nama')
const gender = document.getElementById('Gender')
const email = document.getElementById('email')
const Password = document.getElementById('Pass')
const PasswordConfirmation= document.getElementById('ConfirmPass')
const check= document.getElementById('Agree')

rform.addEventListener('submit',(event)=>{
    event.preventDefault();

    validateRegis();
});

function validateRegis(){
    const NameValidation=names.value.trim();
    const GenderValidation=gender.value.trim();
    const EmailValidation=email.value.trim();
    const PasswordValidation=Password.value.trim();
    const ConfirmPasswordValidation=PasswordConfirmation.value.trim();
    var count=0;
    if(NameValidation === ''){
        invalid(names,"\nPlease Input Your Name  !");
    }else{
        valid(names);
        count+=1;
    }
    if(GenderValidation ===''){
        invalid(gender,"\nPlease Select Your Gender  !");
    }else{
        valid(gender);
        count+=1;
    }
    if(EmailValidation===''){
        invalid(email,"\nPlease Input Your Email  !")
    }else if(onlyemail(EmailValidation)==false){
        invalid(email,"\nInvalid Email");
    }else{
        valid(email);
        count+=1;
    }
    if(PasswordValidation === ''){
        invalid(Password,"\nPlease Input Your Password  !");
    }else{
        valid(Password);
        count+=1;
    }
    if(ConfirmPasswordValidation===''){
        invalid(PasswordConfirmation,"\nPlease Input Your Confirmation Password  !");
    }else if(ConfirmPasswordValidation!=PasswordValidation){
        invalid(PasswordConfirmation,"\nPassword do not match");
    }else{
        valid(PasswordConfirmation);
        count+=1;
    }
    if(check.checked==false){
        invalid2(check,"\n\nYou Must Agree With the Terms & Condition")
    }else{
        valid2(check);
        count+=1;
    }
    if(count==6){
        location.href = "../html/home.html";
    }
}

function invalid(input,message){
    const inputs = input.parentElement;
    const smalls = inputs.children[2];
    console.log(smalls)
    inputs.className ="textbox error";
    smalls.innerText = message;
}
function invalid2(input,message){
    const inputs = input.parentElement;
    const smalls = inputs.querySelector('small');
    console.log(smalls)
    inputs.className ="check error";
    smalls.innerText = message;
}
function valid(input){
    const inputs = input.parentElement;
    inputs.className = "textbox success";
}
function valid2(input){
    const inputs = input.parentElement;
    inputs.className = "check success";
}

function onlyemail(email){
    if(email.indexOf("@")==-1){
        return false;
    }
    var half=email.split("@");
    var a=half[1].indexOf(".");
    var asplit=half[1].split(".");
    var acount=asplit.length-1;
    if(a== -1 ||a < 2 || acount >2){
        return false;
    }
    for(var i=0;i<asplit.length;i++){
        if(asplit[i].length==0){
            return false;
        }
    }
    return true;
}
