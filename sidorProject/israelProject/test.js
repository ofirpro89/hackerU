const userPicks = JSON.parse(localStorage.getItem("usersPicks"));



const getUserNames = (userPicks) => {
    const userNames = [];
    for (let user of userPicks) {
        userNames.push(user["userName"]);
    }
    return userNames;
};

const print = (userPicks, userName) => {
    const user = {
        userName: "",
        sunday: "",
        monday: "",
        Tuesday: "",
        Wednesday: "",
        Thursday: "",
        Friday: "",
        Saturday: ""
    };

   
    const userInfo = userPicks.find(user => user.userName === userName);
    if (userInfo) {
        user.userName = userInfo.userName;
        user.sunday = userInfo.dayOne;
        user.monday = userInfo.dayToo;
        user.Tuesday = userInfo.dayTrey;
        user.Wednesday = userInfo.dayFore;
        user.Thursday = userInfo.dayFive;
        user.Friday = userInfo.daySix;
        user.Saturday = userInfo.daySeven;
    }

    return user;
};



let allUsers = [];
for (let user of userPicks) {
    const userNames = user["userName"];
    const userInfo = print(userPicks, userNames);
    allUsers.push(userInfo); 
}









const createP = document.createElement("p");
createP.style.whiteSpace = "pre-wrap";  
createP.style.fontSize = "18px";  
createP.style.lineHeight = "1.5";  
createP.style.color = "#333";  
createP.style.fontFamily = "'Arial', sans-serif"; 

// הדפסת כל המשתמשים עם ימות השבוע
let outputText = "רשימת המשמרות הנבחרות:\n\n";
for (let user of allUsers) {
    outputText += `User: ${user.userName}\n`;
    outputText += `Sunday: ${user.sunday}\n`;
    outputText += `Monday: ${user.monday}\n`;
    outputText += `Tuesday: ${user.Tuesday}\n`;
    outputText += `Wednesday: ${user.Wednesday}\n`;
    outputText += `Thursday: ${user.Thursday}\n`;
    outputText += `Friday: ${user.Friday}\n`;
    outputText += `Saturday: ${user.Saturday}\n`;
    outputText += "\n------------------------\n";  
}

createP.innerText = outputText;  

// הוספת הפסקה ל-body
document.body.appendChild(createP);


