var counter = 1;
var flag = false;
var currBtn;
function buttonClick(curr, newBtn){
    $(curr).css("background", "")
    $(newBtn).css("background", "white")
    currBtn = $(newBtn);
}
$(function(){
    buttonClick(currBtn, '#manual-btn1');
    $('#radio1').click(function(){
        counter = 1;
        flag = true;
        setTimeout(function(){
            flag = false; 
        }, 5000)
        buttonClick(currBtn, '#manual-btn1');
    })
    $('#radio2').click(function(){
        counter = 2;
        flag = true;
        setTimeout(function(){
            flag = false; 
        }, 5000)
        buttonClick(currBtn, '#manual-btn2');
    })
    $('#radio3').click(function(){
        counter = 3;
        flag = true;
        setTimeout(function(){
            flag = false; 
        }, 5000)
        buttonClick(currBtn, '#manual-btn3');
    })
    document.getElementById('radio' + counter).checked = true;
});
var interval = setInterval(function(){
    if (!flag){
        counter+=1;
        if(counter > 3){
            counter = 1;
        }
        buttonClick(currBtn, '#manual-btn' + counter);
        document.getElementById('radio' + counter).checked = true;
        console.log(counter)
    }
}, 5000);