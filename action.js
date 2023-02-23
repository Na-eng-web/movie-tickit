let sit= document.querySelector(".sit");


for(let i=1;i<=6;i++){
   let a= document.createElement("div");
   for(let j=1;j<=8;j++){
    let b =document.createElement("div");
    b.classList.add("chair");
    a.appendChild(b);
   }

   sit.appendChild(a);
}
let x1=document.querySelector("body > section > div.sit > div:nth-child(2) > div:nth-child(4)");
let x2=document.querySelector("body > section > div.sit > div:nth-child(2) > div:nth-child(5)");
let x3=document.querySelector("body > section > div.sit > div:nth-child(3) > div:nth-child(7)");
let x4=document.querySelector("body > section > div.sit > div:nth-child(3) > div:nth-child(8)");
let x5=document.querySelector("body > section > div.sit > div:nth-child(6) > div:nth-child(1)");

x1.classList.remove("chair");
x1.classList.add("chair_book");
x2.classList.remove("chair");
x2.classList.add("chair_book");
x3.classList.remove("chair");
x3.classList.add("chair_book");
x4.classList.remove("chair");
x4.classList.add("chair_book");
x5.classList.remove("chair");
x5.classList.add("chair_book");


let count =0;
let chair_selected = false;
let prise=document.querySelector(".prise");

let available = document.querySelectorAll(".chair");
for(let e of available){
    e.addEventListener("mouseover",()=>{
        e.style.scale="1.2";
    });

    e.addEventListener("mouseout",()=>{
        e.style.scale="1";
    });
    e.addEventListener("click",()=>{
        if(!e.classList.contains("chair_sel")){
            e.classList.add("chair_sel");
            count++;
            prise.innerHTML=`You have selected ${count} seats for a price of $${count*12}`
        }else{
            e.classList.remove("chair_sel");
            count--;
            prise.innerHTML=`You have selected ${count} seats for a price of $${count*12}`
        }
    })
}


