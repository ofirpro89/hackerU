export const mangerEria = () => {
    // קריאה ל-localStorage כדי לקבל את הבחירות של המשתמש
    const manger = JSON.parse(localStorage.getItem("usersPicks"));

    // אם יש נתונים עבור המשתמש
    if (manger && manger.userName) {
        const days = ["dayOne", "dayToo", "dayTrey", "dayFore", "dayFive", "daySix", "daySeven"];
        
        // הצגת כותרת עם שם המשתמש
        let output = `<h1>בחירות השבוע של ${manger.userName}</h1>`;
        
        // לולאת forEach להדפסת המשמרות לכל יום
        days.forEach((day, index) => {
            output += `<p>${getDayName(index)}: ${manger[day]}</p>`;
        });
        
        // הצגת התוצאה בדף
        document.body.innerHTML = output;
    } else {
        // אם לא נמצאו נתונים עבור המשתמש
        console.log("לא נמצאו נתונים עבור המשתמש");
    }
}

// פונקציה שמחזירה את שם היום לפי אינדקס
const getDayName = (index) => {
    const dayNames = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
    return dayNames[index];
}

console.log(mange)





mangerEria()