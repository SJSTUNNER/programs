
function rollbtn(){
    const diceNum = document.getElementById("diceNum").value;
    const diceResult = document.getElementById("diceResult");
    const imgs = document.getElementById("imgs");

    const images = [];
    const value = [];

    for(let i = 0;i<diceNum;i++){
        const num = (Math.floor(Math.random()*6))+1;
        value.push(num);
        images.push(`<img src = ${num}.png  alt= Dice ${num} style= "width:50px; height:50px">`);

    }

    diceResult.textContent= `Dice:${value.join(', ')}`;
    imgs.innerHTML = images.join(" ");
}