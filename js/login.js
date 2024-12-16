const body = document.querySelector("body");
const user = document.getElementById("email");
const senha = document.getElementById("password");
const button = document.getElementById("submit");
const label1 = document.querySelector("label");
const label2 = document.getElementById("label2");
const loginh1 = document.getElementById("login");
const href = document.getElementById("a");
const form = document.querySelector("form");

const feito = document.getElementById("loginFeito");

const nome = document.getElementById("emailCad");

const logout = document.getElementById("logout");

disable(feito);

if (localStorage.getItem("ativado")){
    exibeUserLS();
    // disable(user, button, label);
}

function exibeUserLS(){
    const atual = localStorage.getItem("ativado");

    nome.innerText = atual;
    // body.appendChild(nome)

    feito.style.display = "flex";
    feito.style.flexDirection = "Column";
    // localStorage.setItem("ativado",user.value)

    disable(user, senha, button, loginh1, label1, label2, href);
}

function exibeUser(user){

    nome.innerText = user.value;
    // body.appendChild(nome)

    localStorage.setItem("ativado",user.value);

    disable(user, senha, button, loginh1, label1, label2, href);
}

function disable(...x){
    console.log(x);
    let i = 0;
    while(i<=x.length-1){
        x[i].style.display = "none";
        i++;
    }
}

function able(...x){
    console.log(x);
    let i = 0;
    while(i<=x.length-1){
        x[i].style.display = "block";
        i++;
    }
}

// button.addEventListener("click",()=>{exibeUser(user)})
button.addEventListener("click", () => {
    if (user.value.trim() !== "" && senha.value.trim() !== "") {
        exibeUser(user);
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
});

logout.addEventListener("click",()=>{
    localStorage.clear();
    feito.style.display = "none";
    able(user, senha, button, loginh1, label1, label2, href);
    form.style.display = "flex";
})