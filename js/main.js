const circle = document.getElementById("circle");
const article = document.querySelectorAll("article");

for(let el of article){ /*article의 전체 개수만큼 반복*/
    el.addEventListener("mouseenter", e=>{
        circle.style.animationPlayState = "paused";
    });

    el.addEventListener("mouseleave", e=>{
        circle.style.animationPlayState = "running";
    });
}