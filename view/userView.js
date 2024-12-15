import { listaUser, main } from "../controller/userController.js"

export function showConfirmed(){
    const confirmed = document.createElement("artice");
    confirmed.innerHTML = `<h1>Cadastro confirmado!</h1>
    <p>Name: ${listaUser[listaUser.length-1].name.value}</p>
    <p>Email: ${listaUser[listaUser.length-1].email.value}</p>
    <p>Phone: ${listaUser[listaUser.length-1].phone.value}</p>
    <p>Team: ${listaUser[listaUser.length-1].team.value}</p>`;
    confirmed.style.display = "flex";
    confirmed.style.flexDirection = "column";
    confirmed.style.alignItems = "center";
    confirmed.style.border = "solid";
    confirmed.style.borderRadius = "20px";
    confirmed.style.marginLeft = "400px";
    confirmed.style.marginRight = "400px";
    confirmed.style.backgroundColor = "#FFBA4B";

    // console.log(listaUser.length)
    main.appendChild(confirmed);

    setTimeout(()=>main.removeChild(confirmed), 4000);
}