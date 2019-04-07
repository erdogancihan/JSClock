const hands = document.querySelectorAll(".hand");
const secondHand = document.querySelector(".hand__second");
const minuteHand = document.querySelector(".hand__minute");
const hourHand = document.querySelector(".hand__hour");

function clock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondDegrees = (seconds / 60) * 360;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minutes = now.getMinutes();
  const minuteDegrees = (minutes / 60) * 360;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  //removes transition to prevent full rotate at second 0
  seconds === 0
    ? hands.forEach(hand => {
        hand.style.transition = "none";
      })
    : hands.forEach(hand => {
       hand.style.transition = "transform 1000ms";
      });
}

setInterval(clock, 1000);

const indicators =document.querySelectorAll(".dial");
console.log(indicators)
function setIndicators(){
  indicators.forEach((indicator,index)=>{
    if(index===0)return;
    indicator.style.transform=`rotate(${index*30}deg)`;
    console.log(index*30)
  })

}
setIndicators();
