import { Users } from "./users.js";
export let usersList = JSON.parse(localStorage.getItem("users")) || [];

const isValid = (userName,passowrd,email,bgcolor)=>{

    const result = {
        valid: true,
        erorMsg: "",
        elmentId:""
    }


    const regex = /^[a-zA-Z]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const colors = ["green", "blue", "red", "yellow", "purple"];


    if (!regex.test(userName)) {
       result.valid = false;
       result.erorMsg = "שם משתמש לא תקין"
       result.elmentId = "erorrUser"
    } 

 
 
    if (!emailRegex.test(email)) {
       result.valid = false;
       result.erorMsg = "כתובת דוא'ל לא תקינה"
       result.elmentId = "erorrEmail"
    } 

    if (!colors.includes(bgcolor)) {
        result.valid = false;
       result.erorMsg = "בחר צבע מהרשימה"
       result.elmentId = "erorrColor"
    } 

    return result;
}






export const crateUsers = () => {

    const registerEra = document.getElementById("register");

    registerEra.addEventListener("click", (e) => {
        const formEra = document.querySelector(".formEria");
        formEra.innerHTML = `
            <div class="form-container">
                <h2>הרשמה</h2>
                <form id="crateUsers">
                    <label for="usernameField">שם</label>
                    <input type="text" id="usernameField" name="username" required>
                    <small id="erorrUser"></small>
                    <label for="emailField">דוא"ל</label>
                    <input type="email" id="emailField" name="email" required>
                    <small id="erorrEmail"></small>
                    <label for="passwordField">סיסמה</label>
                    <input type="password" id="passwordField" name="password" required>
                     <small id="erorrPass"></small>
                      <label for="colorSelect">בחר צבע רקע:</label>
                    <select id="colorSelect" name="colorSelect">
                        <option value="green">ירוק</option>
                        <option value="blue">כחול</option>
                        <option value="red">אדום</option>
                        <option value="yellow">צהוב</option>
                        <option value="purple">סגול</option>
                         
                    </select>
                    <small id="erorrColor"></small>
                    <button type="submit">הירשם</button>
                    
                </form>
            </div>
        `;

        const crateUser = document.querySelector("#crateUsers");
        crateUser.addEventListener("submit", (e) => {
            e.preventDefault();

            const newUserName = e.target.usernameField.value;
            const newUserEmail = e.target.emailField.value;
            const newUserPass = e.target.passwordField.value;
            const userBgcolor = e.target.colorSelect.value;
            
            const valiedCheck = isValid(newUserName, newUserPass, newUserEmail,  userBgcolor);

            if(!valiedCheck.valid){

              document.getElementById(valiedCheck.elmentId).innerText=valiedCheck.erorMsg
              
                return;
            }

            const newUser = new Users(newUserName,  newUserPass, newUserEmail,userBgcolor);

       
           
        
            usersList.push(newUser);

        
            localStorage.setItem("users", JSON.stringify(usersList));

          
            location.reload();
        });
    });
};


console.log(usersList)



const login = ()=>{
 
const login = document.querySelector("#tofes");
login.addEventListener("submit", (e)=>{
    e.preventDefault();
    const userName = e.target.userName.value;
    const userpassword = e.target.password.value;


const user = usersList.find((user) => user.name == userName && user.password == userpassword);

const adminUser = "atalya";
const adminPass= "12345";


if(adminUser == userName && adminPass == userpassword){

  alert("שלום שף!")
  window.open("test.html", "_blank")
  return
}


if (user) {
  
 

userEra(user)
saveUser(user);

} else {
 
  alert("שם המשתמש או הסיסמה שגויים");

}

})    


}





const  userEra=(user)=>{
    alert("שלום:" + user.name);
    const newWindow = window.open("", "")



    newWindow.document.head.innerHTML=`
    <link rel="stylesheet" href="users.css">
    `
    newWindow.document.body.dir ="rtl";
    newWindow.document.body.style.backgroundColor = user.bgcolor;
    newWindow.document.body.innerHTML = `  <div class="form-container">
    <h1>הזן יום עבודה ${user.name}</h1>

    <form id="workDayForm">

      <!-- שדה של יום ראשון -->
      <div class="day-selection">
        <label for="day1">בחר יום ראשון:</label>
        <select id="day1" name="day1">
          <option value="morning">בוקר</option>
          <option value="afternoon">צהריים</option>
          <option value="evening">ערב</option>
          <option value="dayOff">חופש</option>
        </select>
      </div>

      <!-- שדה של יום שני -->
      <div class="day-selection">
        <label for="day2">בחר יום שני:</label>
        <select id="day2" name="day2">
          <option value="morning">בוקר</option>
          <option value="afternoon">צהריים</option>
          <option value="evening">ערב</option>
          <option value="dayOff">חופש</option>
        </select>
      </div>

      <!-- שדה של יום שלישי -->
      <div class="day-selection">
        <label for="day3">בחר יום שלישי:</label>
        <select id="day3" name="day3">
          <option value="morning">בוקר</option>
          <option value="afternoon">צהריים</option>
          <option value="evening">ערב</option>
          <option value="dayOff">חופש</option>
        </select>
      </div>

      <!-- שדה של יום רביעי -->
      <div class="day-selection">
        <label for="day4">בחר יום רביעי:</label>
        <select id="day4" name="day4">
          <option value="morning">בוקר</option>
          <option value="afternoon">צהריים</option>
          <option value="evening">ערב</option>
          <option value="dayOff">חופש</option>
        </select>
      </div>

      <!-- שדה של יום חמישי -->
      <div class="day-selection">
        <label for="day5">בחר יום חמישי:</label>
        <select id="day5" name="day5">
          <option value="morning">בוקר</option>
          <option value="afternoon">צהריים</option>
          <option value="evening">ערב</option>
          <option value="dayOff">חופש</option>
        </select>
      </div>

      <!-- שדה של יום שישי -->
      <div class="day-selection">
        <label for="day6">בחר יום שישי:</label>
        <select id="day6" name="day6">
          <option value="morning">בוקר</option>
          <option value="afternoon">צהריים</option>
          <option value="evening">ערב</option>
          <option value="dayOff">חופש</option>
        </select>
      </div>

      <!-- שדה של יום שבת -->
      <div class="day-selection">
        <label for="day7">בחר יום שבת:</label>
        <select id="day7" name="day7">
          <option value="morning">בוקר</option>
          <option value="afternoon">צהריים</option>
          <option value="evening">ערב</option>
          <option value="dayOff">חופש</option>
        </select>
      </div>

      <button type="submit">שלח</button>
    </form>
  </div>`;
    
    const scriptLoad = newWindow.document.createElement("script");
    scriptLoad.src="userEra.js";
    scriptLoad.type="module";
    scriptLoad.defer = true;

    newWindow.document.body.appendChild(scriptLoad);

 

    }



 const saveUser = (user)=>{

   localStorage.setItem("userDatta",JSON.stringify(user));

 }   


 



login()
crateUsers();
saveUser()

