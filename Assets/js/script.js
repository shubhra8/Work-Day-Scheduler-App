const today = moment();
var div1 = $('#div1');
var div2= $('#div2');
var text1=$('#text1');
var text2=$('#text2');
var text3=$('#text3');
var text4=$('#text4');
var text5=$('#text5');
var text6=$('#text6');
var text7=$('#text7');
var text8=$('#text8');
var text9=$('#text9');
var save1=$('#save1');
var save2=$('#save2');
var save3=$('#save3');
var save4=$('#save4');
var save5=$('#save5');
var save6=$('#save6');
var save7=$('#save7');
var save8=$('#save8');
var save9=$('#save9');
console.log(div1[0].innerHTML);
console.log(div2[0].innerHTML);
var div9PM=div1[0].innerHTML;
console.log(today.format('YYYY-MM-DD'))
var a = today.format('YYYY-MM-DD');
var currentDay = $('#currentDay');
let div;

var text;
var textInput;

currentDay.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

let now = moment(new Date()).format('kk');
console.log(now);

var text = [text1,text2,text3,text4,text5,text6,text7,text8,text9];   
var time = ['09','10','11','12','13','14','15','16','17'];
for(var y=0;y<=8;y++){
if(time[y]===now)
{
console.log(text[y])
var textr=text[y]
textr[0].style.backgroundColor='red';
}
else if (time[y]<now)  {
    var textp=text[y]
    console.log(time[y])
    console.log(textp);
    textp[0].style.backgroundColor='gray';
}

else if  (time[y]>now) {
    console.log(time[y])
   var textf=text[y]
   console.log(textf);
    textf[0].style.backgroundColor='green';
}
}




//var button = [save1,save2,save3]
save1.on('click', function () {
localStorage.setItem('textInput1',JSON.stringify(text1.val()));   
});

save2.on('click', function () {
localStorage.setItem('textInput2',JSON.stringify(text2.val()));   
});

save3.on('click', function () {
localStorage.setItem('textInput3',JSON.stringify(text3.val()));   
});

save4.on('click', function () {
localStorage.setItem('textInput4',JSON.stringify(text4.val()));   
});

save5.on('click', function () {
localStorage.setItem('textInput5',JSON.stringify(text5.val()));   
});

save6.on('click', function () {
localStorage.setItem('textInput6',JSON.stringify(text6.val()));   
});

save7.on('click', function () {
localStorage.setItem('textInput7',JSON.stringify(text7.val()));   
});

save8.on('click', function () {
localStorage.setItem('textInput8',JSON.stringify(text8.val()));   
});

save9.on('click', function () {
localStorage.setItem('textInput9',JSON.stringify(text9.val()));   
});


var textInput=[ ' ','textInput1','textInput2','textInput3','textInput4','textInput5','textInput6','textInput7','textInput8','textInput9']
for(var i=1;i<=9;i++){

item = JSON.parse(localStorage.getItem(textInput[i]));
console.log(item);

    if(item !== null){
    var textv=text[i-1];
    console.log(textv);
    textv[0].innerHTML = item;
    //text9.innerHTML=item;
}
}