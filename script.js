const dec=document.getElementById("decrease");
const res=document.getElementById("reset");
const inc=document.getElementById("increase");
const cnt=document.getElementById("countlabel");
let count = 0;

inc.onclick=function(){
    count++;
    cnt.textContent=count;
}
res.onclick=function(){
    count=0;
    cnt.textContent=count;
}
dec.onclick=function(){
    count--;
    cnt.textContent=count;
}