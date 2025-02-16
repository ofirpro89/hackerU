// פונקציה ליצירת אלמנט עם עיצוב
const elmentManger = (id, elment, text, style, squre) => {
    const item = document.createElement(elment); 
    item.id = id; 
    item.innerText = text; 
    item.class= "inline"; 


    for (let property in style) {
        item.style[property] = style[property];
    }


    if (squre) {
        for (let index in squre) {
            item.style[index] = squre[index];
        }
    }

    document.body.appendChild(item); 
    return item;
};


const start = () => {
    const userInput = document.getElementById("userInput").value;  
    const slectedUser = document.getElementById("slectedUser").value; 
    const userbg = document.getElementById("sleckBg").value;  
    const usersqure = document.getElementById("shape").value; 
    const userColorShape = document.getElementById("shapeColor").value;
    
 
    const slacted = {
        color: slectedUser, 
        backgroundColor: userbg, 
        padding: "10px",  
        fontSize: "20px", 
    };

  
    let shapeChose = {};  

    if (usersqure === "shape") {  
        shapeChose = {
            width: "100px", 
            height: "100px",
            clipPath: "inset(0)",  
            backgroundColor:userColorShape, 
        }
    }

    if(usersqure === "triangle"){
        shapeChose= {
        width: "100px",
        height: "100px",
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
    
        backgroundColor: userColorShape
        
  
       
    }

    
    }

    if(usersqure === "sercale"){
        shapeChose= {
                width:"100px",      
                height:"100px",         
                border: "10px solid",  
                borderRadius: "50%",     
                backgroundColor: userColorShape
            }
       
    }


    if(usersqure === "star"){

        shapeChose={
        width: "100px",
        height: "100px",
        clipPath:"polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        backgroundColor: userColorShape,
     
    }
      }
       
    
 
    elmentManger("new", "h1", userInput, slacted, shapeChose); 

    const userStyleSave = JSON.stringify(slacted);
    const userShapeSave = JSON.stringify(shapeChose);
    localStorage.setItem("text", userInput);
    localStorage.setItem("style", userStyleSave);
    localStorage.setItem("shape", userShapeSave)



};

function readFile() {
    try {
        // מנסה לקרוא מקובץ (במקרה הזה אנחנו פשוט מדמים זאת)
        let fileContent = readFromFileSystem("testfile.txt"); // פונקציה זו לא קיימת באמת, זו הדמיה
        console.log("תוכן הקובץ: " + fileContent);
    } catch (error) {
        // אם יש חריגה, נטפל בה כאן
        console.log("שגיאה: לא ניתן לקרוא את הקובץ - " + error.message);
    } finally {
        // קוד שמתבצע תמיד, גם אם הייתה חריגה וגם אם לא
        console.log("סיום פעולה, המשאבים שוחררו.");
    }
}

function readFromFileSystem(fileName) {
    // לדוגמה, נזרוק חריגה אם הקובץ לא קיים
    if (fileName !== "existingfile.txt") {
        throw new Error("הקובץ לא נמצא");
    }
    return "תוכן הקובץ: אדון עולם!";
}

readFile()