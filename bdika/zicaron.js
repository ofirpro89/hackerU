const tileContainer = document.querySelector(".tiles");
const colors = ['😊', '😎', '😍', '🥺', '😂', '😢'];//זה מה שנעשה במשחק
const colorsPicklist=[...colors, ...colors];
const titleCount = colorsPicklist.length;//כמות הכרטיסים
// Game state - איך מתחילים את המשחק

let revealdCount = 0;// כמות הכרטיסים שהפכו
let activeTile = null;//  ,כרטיסים פתוחים ;
let awatingEndOfMove= false; //כמה זמן יהיה למשתמש לחכות עד שהוא יסיים את התור

//פונקציה שבונה את הלוח
const buildTile = (color)=>{
const elment = document.createElement("div");//בונה את הכרטיסים
elment.classList.add("tile");
elment.setAttribute("data-color", color);
elment.addEventListener("click", ()=>{
if(awatingEndOfMove){
    return;
}
elment.innerText = color;
if(!activeTile){
    activeTile = elment; //הלחיצת כפתור שווה לכל האלמנט
    return; //כדי להתחיל בחירה חדשה
}
const matChes = activeTile.getAttribute("data-color")//בודקת התאמות
if(matChes ===color){
    activeTile = null;
    awatingEndOfMove =false;
    activeTile=null;
    revealdCount +=2;

    if(revealdCount === titleCount){
        alert("you win! refresh to play gain")
    }
    return;
}

awatingEndOfMove = true;
setTimeout(()=>{
    elment.innerText = null;
    activeTile.innerText=null;
    awatingEndOfMove=false;//להתחיל מחדש
    activeTile=null;//התחלה מחדש
},1000)
})


return elment;


}



// game bord - בניית הלוח

for(let i=0 ;i<titleCount; i++){

    const randomeIndex = Math.floor(Math.random()  * colorsPicklist.length);//בחירה רנדומלית של סידור הקלפים
    const color = colorsPicklist[randomeIndex]//בחירה אקראית בצבע
    const tile = buildTile(color);
    colorsPicklist.splice(randomeIndex, 1); //בחירה באלמנט אחד בצבע האקראי
    console.log(color)
    tileContainer.appendChild(tile);//המיקום של הכרטיסים לפי הקוורי סלקטור בשורה הראשונה

}


