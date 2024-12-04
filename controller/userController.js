import { User } from "../model/user.js";
import { showConfirmed } from "../view/userView.js";

export {listaUser, body}

const body = document.querySelector("body")

const button = document.getElementById("enviar");

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const team = document.getElementById("team");

let listaUser = [];

button.addEventListener(
    "click",()=>{
        newUser(showConfirmed)
    }
)

function newUser(callback){
    if (team.value == ""){
        team.value = "Team não especificado."
        listaUser.push(new User(name, email, phone, team))
    }else{
        listaUser.push(new User(name, email, phone, team))
    }
    

    callback()
} 


