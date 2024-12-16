let reports = [
    "Festa da agência que trabalhava em 2016. Um rapaz se ofereceu para ajudar uma moça a descer as escadas porque ela tava muito bêbada e ela respondeu: ‘NÃO PRECISO DE AJUDA, SEU PRETO FILHO DA ****’ – exatamente com essas palavras. No dia seguinte, foram conversar com ela sobre o que aconteceu e ela sem querer se desculpar, disse que foi apenas uma brincadeira. Uma das coisas mais revoltantes foi que a empresa não tomou nenhuma atitude",

     "Já aconteceu de policiais pararem o carro do meu pai (negro e eu branca de olhos claros), mandarem ele descer rispidamente e me perguntarem se eu estava bem, se estava em perigo ou se era meu pai mesmo. Ao responder com grosseria (não tenho medo), ouvi que não era normal (????) “um preto com carrão e uma loirinha atrás.",

     "Eu estava andando na rua e um menino olhou pra mim e falou pra mãe dele: ‘Nossa mãe, olha o cabelo dela.’ E a mãe dele falou: ‘coitada filho, ela é negra", "Uma vez eu desci atrasado pro colégio (eu estudava à noite, e tinha um caminho considerável do metrô até a escola), lembro que fui passar do um lado de um senhor e acelerei o passo, quando cheguei do lado dele ele me deu uma cotovelada no estômago e disse que eu não ia conseguir assaltar ele",  
    
     "Saudades de quando preto só era escravo",
     "Estava conversando com uma amiga no elevador do prédio de propaganda do Mackenzie. Disse a ela para não andar sem o RG que se dar qualquer B.O. você pode precisar dele. Um professor ouviu e disse em tom de deboche: - Ela pode andar sem RG, mas olha você… Você que não pode andar sem ele", 

     "Eu branca, olhos claros. Meu pai, negro, cabelo bem afro, usava black power quando eu era criança. Passei minha infância INTEIRA ouvindo dos familiares e amigos que eu não era sua filha. Ouvindo ‘piadinhas’ sobre isso, que pai é aquele que cria, sobre como ‘um preto feio tinha feito uma filha tão linda’, que eu era filha do padeiro, do vizinho, do açougueiro… Ou sobre como era a alimentação em casa, se nós comíamos bananas como o macaco do meu pai’. Nunca achei graça, sempre me doeu, sempre chorei e quanto mais eu chorava mais as pessoas riam e achavam engraçadinho…",

     "Em 2011 eu trabalhava pra uma família como babá e a mãe do meu chefe era extremamente racista. Teve um almoço de domingo que eu fui na casa dela com os pais da menina. Tava todo mundo ao redor da mesa se sentando pra almoçar, nisso a mãe do meu chefe se aproximou e me disse que eu não podia comer junto com a família, porque ela não gostava de preto.", 
     
     "Disseram que eu tinha que ter tomado leite de magnésia pra minha filha nascer branca. A pessoa tava com ela no colo e ela tinha nascido horas antes."
    ];

const report1 = document.getElementById("report1");
const report2 = document.getElementById("report2");
const dad = document.getElementById("dad");

// report1.textContent =  reports[0];
// report2.textContent  = reports[1];
const userReport = document.getElementById("reportUser");
const submit = document.getElementById("submit");

submit.addEventListener("click", ()=>{
    reports.push(userReport.value); 
    userReport.value = "";


    const article = document.createElement("article");
    dad.appendChild(article);
    
    const titleCard = document.createElement("h2");
    titleCard.textContent = `Relato ${i + 1}`
    article.appendChild(titleCard);
    
    
    const paragraph = document.createElement("p");
    paragraph.textContent = reports[i];
    article.appendChild(paragraph);

});

let i = 0;

    while(i< reports.length){
       
    const article = document.createElement("article");
    dad.appendChild(article);
    
    const titleCard = document.createElement("h2");
    titleCard.textContent = `Relato ${i + 1}`
    article.appendChild(titleCard);
    
    
    const paragraph = document.createElement("p");
    paragraph.textContent = reports[i];
    article.appendChild(paragraph);
    
    i++;
    }
