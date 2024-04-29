let boxes = document.querySelectorAll(".boxes");
let img = document.querySelector(".img");
let i=0;
document.querySelector(".next").addEventListener("click",()=>
{
    boxes.forEach((box)=>
    {
        box.classList.remove("active");
    });
    i=(i+1) % boxes.length;
    boxes[i].classList.add("active");
    img.src=`images/${i}.jpg`;
});
document.querySelector(".prev").addEventListener("click",()=>
{
    boxes.forEach((box)=>
    {
        box.classList.remove("active");
    });
    img.src=`images/${i}.jpg`;
    i=(i-1+boxes.length) % boxes.length;
    boxes[i].classList.add("active");
    console.log(i);
});