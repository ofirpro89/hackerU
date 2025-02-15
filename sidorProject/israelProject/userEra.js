let usersList = JSON.parse(localStorage.getItem("userDatta")) || [];
// קריאה ל-localStorage כדי לקבל את המידע
let settingsDays = JSON.parse(localStorage.getItem("usersPicks")) || []; 

if (!Array.isArray(settingsDays)) {
    settingsDays = [];
}

class UserChoise{

userName;
dayOne;
dayToo;
dayTrey;
dayFore;
dayFive;
daySix;
daySeven;
static settingsDays = JSON.parse(localStorage.getItem("userDatta")) || []

static choises = JSON.parse(localStorage.getItem("userDatta")) || [];
constructor(userName,dayOne,dayToo,dayTrey, dayFore,dayFive, daySix, daySeven ){

    this.userName= userName;
    this.dayOne = dayOne;
    this.dayToo = dayToo;
    this.dayTrey = dayTrey; 
    this.dayFore = dayFore;
    this.dayFive = dayFive;
    this.daySix = daySix;
    this.daySeven = daySeven
}


}









const eimpoliodChoise = ()=>{

const form = document.querySelector("#workDayForm");

form.addEventListener("submit", (e)=>{

e.preventDefault()

const userName = usersList.name
const dayOne = e.target.elements.day1.value;
const dayToo = e.target.elements.day2.value;
const dayTrey = e.target.elements.day3.value;
const dayFore = e.target.elements.day4.value;
const dayFive = e.target.elements.day5.value;
const daySix = e.target.elements.day6.value;
const daySeven = e.target.elements.day7.value;

const eimploid = new UserChoise(userName, dayOne, dayToo, dayTrey, dayFore, dayFive, daySix, daySeven);

settingsDays.push(eimploid)


localStorage.setItem("usersPicks", JSON.stringify(settingsDays));

alert("בחירותיך נשמרו");

window.close();

})


}



eimpoliodChoise()

