document.getElementById('red').onclick=setRed;
document.getElementById('blue').onclick=setBlue;
document.getElementById('green').onclick=setGreen;
document.getElementById('purple').onclick=setPurple;
document.getElementById('custom').onclick=setCustom;
document.getElementById('reset').onclick=reset;

function setRed(){
    document.querySelector('body').style.backgroundColor='red';
    document.querySelector('body').style.color='white';
}
function setBlue(){
    document.querySelector('body').style.backgroundColor='blue';
    document.querySelector('body').style.color='white';
}
function setGreen(){
    document.querySelector('body').style.backgroundColor='green';
    document.querySelector('body').style.color='white';
}
function setPurple(){
    document.querySelector('body').style.backgroundColor= 'purple';
    document.querySelector('body').style.color='white';
}
function setCustom(){
    let custColor=document.getElementById('custColor').value;
    if(custColor[0]!='#'){
        custColor='#'+custColor;
    }
    console.log(custColor);
    document.querySelector('body').style.backgroundColor= custColor;
    document.querySelector('body').style.color=   
                    getBrightness(custColor)>186 ? 'black' : 'white';
}
function reset(){
    document.querySelector('body').style.backgroundColor='white';
    document.querySelector('body').style.color='black';
}
function getBrightness(color){
    const hasFullSpec = color.length == 7;
    let m = color.substr(1).match(hasFullSpec ? /(\S{2})/g : /(\S{1})/g);
    if (m){
         var r = parseInt(m[0] + (hasFullSpec ? '' : m[0]), 16), g = parseInt(m[1] + (hasFullSpec ? '' : m[1]), 16), b = parseInt(m[2] + (hasFullSpec ? '' : m[2]), 16);
    }
    if (typeof r != "undefined"){
         return ((r*299)+(g*587)+(b*114))/1000;
    }
}
