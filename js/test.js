let input=document.getElementById('input');
let from=document.getElementById('from');
let to=document.getElementById('to');
let form=document.getElementById('calc');
let result=document.getElementById('result');
let historylist=document.getElementById('historylist');
let del=document.getElementById('del');
let body=document.getElementById('body');
let id=1;
let i=1;
let no=1;
let key=Object.keys(localStorage);
let values=Object.values(localStorage);
key.sort();
if(localStorage.length>=id){
 id=Number(key[key.length-1])+1;
 // console.log(id);
}
function SetItem(a){
 // console.log(id);
 localStorage.setItem(id,a);
 id++;
}
function GetItem(){
// values.map((v,index)=>{
//  console.log(v);
// let arr=v.split(",");
// // console.log(v,index);
// createTr(arr,index);
// // arr.map((trvalue)=>{
// // console.log(trvalue);
// // });
// });
if(!localStorage.length){
 
    historylist.innerHTML=`<tr id="main"><td colspan="6" id="space">There is no record!</td></tr>`;

}else{
 key.map((v)=>{
  let arr=localStorage.getItem(v).split(',');
  createTr(arr,v);
  });
}

}

GetItem();
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
function createTr(arr,id){
 let main=document.getElementById('main');
 if(main){
  main.remove();
 }
// let tr=document.createElement('tr');
// tr.setAttribute("id",`${i++}`);
// let tdno=document.createElement('td');
//  let textno=document.createTextNode(`${no++}`);
//  tdno.appendChild(textno);
//  let td1=document.createElement('td');
//  let text1=document.createTextNode(`${x}`);
//  td1.appendChild(text1);
//  let td2=document.createElement('td');
//  let text2=document.createTextNode(`${y}`);
//  td2.appendChild(text2);
//  let td3=document.createElement('td');
//  let text3=document.createTextNode(`${z}`);
//  td3.appendChild(text3);
//  let td4=document.createElement('td');
//  let text4=document.createTextNode(`${rlt}`);
//  td4.appendChild(text4);
//  let td5=document.createElement('td');
//  let del=document.createElement('i');
// del.setAttribute("class","fas fa-trash-alt");
// // del.setAttribute("onclick","Del()");
// del.setAttribute("id","del");
//  td5.appendChild(del);
//  tr.appendChild(tdno);
//  tr.appendChild(td1);
//  tr.appendChild(td2);
//  tr.appendChild(td3);
//  tr.appendChild(td4);
//  tr.appendChild(td5);
let tr=document.createElement('tr');
tr.setAttribute('id',`row${id}`);
let tdno=document.createElement('td');
 let textno=document.createTextNode(`${id}`);
 tdno.appendChild(textno);
 tr.appendChild(tdno)
arr.map((ele)=>{
 let td=document.createElement('td');
 let text=document.createTextNode(ele);
 td.appendChild(text);
 tr.appendChild(td);
})
let td1=document.createElement('td');
let del=document.createElement('i');
del.setAttribute("class","fas fa-trash-alt");
del.setAttribute("id","del");
del.setAttribute("onclick", `Del(${id})`);
td1.appendChild(del);
tr.appendChild(td1);
let td2=document.createElement('td');
// let edit=document.createElement('i');
// edit.setAttribute("class","fas fa-edit");
// edit.setAttribute("id","edit");
// edit.setAttribute("onclick", `Edit(${id})`);
// td2.appendChild(edit);
// tr.appendChild(td2);
historylist.appendChild(tr);
// del.addEventListener("click",(e)=>{
//  let ans=confirm('Are you sure to delete that?');
//  if(ans){
//  e.target.parentNode.parentNode.remove();
//  // localStorage.removeItem('record');
// }}
// );
// localStorage.setItem('record',historylist.innerHTML+"--");
}
// (function(){
//  if(localStorage.getItem('record')){
//   historylist.innerHTML=localStorage.getItem('record');
//  }
//  else{
//   historylist.innerHTML=`<tr id="main"><td colspan="4" id="space">There is no record!</td></tr>`;
//  }
// })();

function Del(id){
let rowId=document.getElementById(`row${id}`);
let ans=confirm(`Are you sure to delete this No${id}?`);
if(ans){
 rowId.remove();
 localStorage.removeItem(id);
}
// console.log(id);
}

form.addEventListener('submit',(e)=>{
// e.preventDefault();

if(!input.value){
 alert("Please Fill in here !")
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
let dateText=date.toLocaleDateString();
 dateText +=`-`+date.toLocaleTimeString();
let rlt=val2.toFixed(2);
let arr=[dateText,fromtext,totext,rlt];
createTr(arr)
SetItem(arr);
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
function darkMode(){
  body.classList.toggle('darkmode');
  document.getElementById('day').classList.toggle('fa-sun');
}
function move(){
  body.classList.toggle('darkmode');
  document.getElementById('circle').classList.toggle('animation');
}
