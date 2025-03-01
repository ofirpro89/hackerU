let rowindex = 1;
let colindex = 1;
let currentWord = "";
const words = ["שולחן", "מדינה", "ספרים", "גיבור", "ארוחה", "חולצה", "כביסה", "גזירה"];
const rundomIndex = Math.floor(Math.random() * words.length ) +1;
const word = words[rundomIndex];
let chakeWord = words[rundomIndex].split("");


console.log(chakeWord);

let start = (object)=>{

    let cell = document.querySelector("div[data-row='"+rowindex + "'][data-col='"+colindex+"']");
    currentWord = currentWord + object.value;
    cell.innerHTML = object.value;
   
    colindex++;
  
    if(colindex == 6){
        if(currentWord === word){
            alert("victori");
        
        }
    


        
        if(currentWord ==! chakeWord){
            styleCell = cell.style
            cell.style.bgcolor = "red";
        }

        if(rowindex ==5){
            alert("game Over");
            return;
        }

        rowindex++;
        colindex=1;

    }

}



console.log(word)