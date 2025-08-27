// This is the part of heart icons increaments

const heartChilds = document.getElementsByClassName("heart-child");
for (let heartChild of heartChilds ){
    heartChild.addEventListener('click',function(){
        document.getElementById('heart-parents').innerText++
    })
}