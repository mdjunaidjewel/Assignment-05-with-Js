// This is the part of heart icons increaments

const heartChilds = document.getElementsByClassName("heart-child");
for (let heartChild of heartChilds ){
    heartChild.addEventListener('click',function(){
        document.getElementById('heart-parents').innerText++
    })
};


// This is the call button functionality

const callBtns = document.querySelectorAll('.call-btn');
callBtns.forEach(btn => {
    btn.addEventListener('click', function (){

        let coin = parseInt(document.getElementById('coin').innerText);
        let newCoin = coin - 20;
        document.getElementById('coin').innerText = newCoin;
        if ( newCoin < 0){
            document.getElementById('coin').innerText = 0;
            return alert("X আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০-কয়েন লাগবে'।")
        }
        const cards = this.closest('.card');
        const childrens = cards.querySelectorAll('.child');
        let allContent = ' '
        childrens.forEach(child =>{
            allContent += child.innerText += " ";
        })
        alert("Calling"+ allContent +"...");

        const parentDiv = this.closest('.parent-div');
        const childDivs = parentDiv.querySelectorAll('.call-history');
        const historyContainer = document.getElementById('history-container');

        const type = childDivs[0].textContent;
        const name = childDivs[1].textContent;
        console.log(type,name)

        const now = new Date();
        const currentTime = now.toLocaleTimeString(); 

        const historyItem = document.createElement('p');
        historyItem.textContent = `${type} - ${name} ${currentTime}`;
        historyContainer.appendChild(historyItem);

    });

});

// This is clear btn
let clearBtn = document.getElementById('clear-btn')
clearBtn.addEventListener('click', function() {
        document.getElementById('history-container').innerHTML = '';
        // alert("সব কল হিস্টরি মুছে ফেলা হয়েছে!");
 });


