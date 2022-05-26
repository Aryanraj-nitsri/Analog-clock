const box1=document.getElementById("box1");
const box2=document.getElementById("box2");
const box3=document.getElementById("box3");

setInterval(()=>{
    const date=new Date();
    const h=date.getHours();
    const m=date.getMinutes();
    const s=date.getSeconds();
const hrot=30*h+m/2;
const mrot=6*m;
const srot=6*s;
box1.style.transform=`rotate(${hrot}deg)`;
box2.style.transform=`rotate(${mrot}deg)`;
box3.style.transform=`rotate(${srot}deg)`;

},1000)
