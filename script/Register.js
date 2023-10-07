// Validation Regis Form
const rform = document.getElementById('registerform')
const names = document.getElementById('names')
const address = document.getElementById('address')
const email = document.getElementById('email')
const email2 = document.getElementById('email2')
const pass = document.getElementById('pass')
const pass2 = document.getElementById('pass2')
const passcon= document.getElementById('passcon')
const check= document.getElementById('terms')

rform.addEventListener('submit',(event)=>{
    event.preventDefault();

    validateRegis();
});
function validateRegis(){
    const nameval=names.value.trim();
    const addressval=address.value.trim();
    const emailval=email.value.trim();
    const passval=pass.value.trim();
    const passconval=passcon.value.trim();
    var index=0;
    if(nameval === ''){
        invalid(names,"* Name cannot blank !");
    }else{
        valid(names);
        index+=1;
    }
    if(addressval ===''){
        invalid(address,"* Address cannot blank !");
    }else{
        valid(address);
        index+=1;
    }
    if(emailval===''){
        invalid(email,"* Email cannot blank !")
    }else if(onlyemail(emailval)==false){
        invalid(email,"* Invalid Email");
    }else{
        valid(email);
        index+=1;
    }
    if(passval === ''){
        invalid(pass,"* Password cannot blank !");
    }else{
        valid(pass);
        index+=1;
    }
    if(passconval===''){
        invalid(passcon,"* Password confirmation cannot blank !");
    }else if(passconval!=passval){
        invalid(passcon,"* Password do not match");
    }else{
        valid(passcon);
        index+=1;
    }
    if(check.checked==false){
        invalid2(check,"* You must agree with terms & Condition")
    }
    else{
        valid2(check);
        index+=1;
    }
    if(index==6){
        location.href = "../html/Home.html";
    }
    
}

function invalid(input,msg){
    const inputs = input.parentElement;
    const smalls = inputs.querySelector('small');
    console.log(smalls)
    inputs.className ="inputs error";
    smalls.innerText = msg;
}
function invalid2(input,msg){
    const inputs = input.parentElement;
    const smalls = inputs.querySelector('small');
    console.log(smalls)
    inputs.className ="checkboxtext error";
    smalls.innerText = msg;
}
function valid(input){
    const inputs = input.parentElement;
    inputs.className = "inputs success";
}
function valid2(input){
    const inputs = input.parentElement;
    inputs.className = "checkboxtext success";
}

function onlyemail(email){
    if(email.indexOf("@")==-1){
        return false;
    }
    var half=email.split("@");
    var dot=half[1].indexOf(".");
    var len=half[1].length;
    var dotsplits=half[1].split(".");
    var dotcount=dotsplits.length-1;
    if(dot== -1 ||dot < 2 || dotcount >2){
        return false;
    }
    for(var i=0;i<dotsplits.length;i++){
        if(dotsplits[i].length==0){
            return false;
        }
    }
    return true;
}