import{crateUsers} from "./serviseDom.js"
export class Users{
    name;
    password;
    email;
    id;
    bgcolor;
    static usersList = JSON.parse(localStorage.getItem("users")) || [];
    static counter = 0;
    constructor(name,password,email, bgcolor){

        this.name = name;
        this.password = password;
        this.email = email
        this.bgcolor = bgcolor
        this.id = ++Users.usersList.length;
       
       
    }
    
    
}