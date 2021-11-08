let input=document.getElementById('input');
let from=document.getElementById('from');
let to=document.getElementById('to');
let form=document.getElementById('calc');
let result=document.getElementById('result');
let historylist=document.getElementById('historylist');

function createOption(x,y,z){
let opt=document.createElement('option');
let ele=document.createTextNode(y);
opt.setAttribute('value',z)
opt.appendChild(ele);
x.appendChild(opt);
}
function atNum(num){
return Number(num.replace(",",""));
}

for(x in data.rates){
createOption(from,x,atNum(data.rates[x]));
createOption(to,x,atNum(data.rates[x]));
 // console.log(x,data.rates[x]);
}
// let a="1,636.77";
function createTr(arr){
let tr=document.createElement('tr');
arr.map((ele,index)=>{
 let td=document.createElement('td');
 let text=document.createTextNode(ele);
 td.appendChild(text);
 tr.appendChild(td);
})
historylist.appendChild(tr);
localStorage.setItem('record',historylist.innerHTML);
}
(function(){
 if(localStorage.getItem('record')){
  historylist.innerHTML=localStorage.getItem('record');
 }
 else{
  historylist.innerHTML=`<tr id="main"><td colspan="4" id="space">There is no record!</td></tr>`;
 }
})();
form.addEventListener('submit',(e)=>{
e.preventDefault();
if(input.value="1"){
 alert('Please fill out here!')
}
//get state
let x=input.value;
let y=from.value;
let z=to.value;
console.log(x,y,z);

//process
let fromtext=x+" "+from.options[from.selectedIndex].innerText;
let totext=to.options[to.selectedIndex].innerText;
let val1=x*y;
// console.log(val1);
let val2=val1/z;
// console.log(val2.toFixed(2));
let date=new Date();
let dateText=date.toLocaleString();
let rlt=val2.toFixed(2);
let arr=[dateText,fromtext,totext,rlt];
createTr(arr);

//set state
result.innerHTML=rlt;
input.value="";
input.focus();
from.value="";
to.value="1";

});

// function test(){
//  console.log(from.options[from.selectedIndex].innerText);
// }
