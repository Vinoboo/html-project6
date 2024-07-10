const button=document.querySelector("button");
const body=document.querySelector("body");
const color=["#a2c9d9","#EC4382","#340A53","#3C76DA","#F9CC80","#467A56"]
    document.addEventListener('click',function(){
        body.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
})