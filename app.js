// your code goes here
//ĶMI = kg : cm**2
console.log("JS loaded everything is fine ");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const button = document.getElementById("calc");
const outputContainer = document.getElementById("output");
const historyList = document.getElementById("history");
button.addEventListener("click", handleClick);
let sum =0;
let mass =0;
let sum2 =0;
let sum3
function handleClick(){
    sum =    heightInput.value/100 ;
    sum2 = weightInput.value / sum ;
    sum3 = 18.5;
    sum3 > sum2 ;
    sum3=(sum2 ,"nav pietiekama svara")
    outputContainer.innerHTML = `Jūsu ķmi ir : ${sum2} `   ;
}
let historyListItem = document.createElement('li');
historyListItem.innerHTML = `Jūsu ķmi ir : ${sum2.value}`;
historyList.appendChild(historyListItem);