function pythagore() 
{

    var AB, AC, BC;
    AB=parseFloat(document.getElementById('AB').value);
    AC=parseFloat(document.getElementById('AC').value);
    BC=parseFloat(document.getElementById('BC').value);

    if (AB**2==AC**2+BC**2) 
	{
        document.getElementById('reponse1').innerHTML='Le triangle est rectangle en C';
    }
    else if (AC**2==AB**2+BC**2) 
	{
        document.getElementById('reponse1').innerHTML='Le triangle est rectangle en B';
    }
    else if (BC**2==AB**2+AC**2) 
	{
        document.getElementById('reponse1').innerHTML='Le triangle est rectangle en A';
    }
    else 
	{
        document.getElementById('reponse1').innerHTML="Le triangle n'est pas rectangle";
    }
}
function hypothenuse()
{

    var AB, AC, BC;
    AB=parseFloat(document.getElementById('AB1').value);
    AC=parseFloat(document.getElementById('AC1').value);

    BC =parseFloat((AB**2 + AC**2)**0.5);

    document.getElementById('reponse2').innerHTML = "L'hypothénuse est de: " + BC;

}

function compterE() 
{
    var mot = document.getElementById('mot').value;
    var compteur = 0;
    var i = 0;
    while(i < mot.length) {
        if(mot[i] == 'e' || mot[i] == 'E') {
            compteur=compteur+1;
        }
        i=i+1;
    }
    document.getElementById('reponse3').innerHTML = "Nombre de e : " + compteur;
}
var secret = Math.floor(Math.random() * 100) + 1
var tentative = 0
function jeu()
{
let essai = parseInt(document.getElementById("essai").value);
if(essai== secret){
document.getElementById("reponse4").innerHTML = "Bravo ! Trouvé en " + tentative +" tentatives.";
tentative= tentative +1
}
else if(essai < secret){
document.getElementById("reponse4").innerHTML = "Plus grand";
tentative=tentative+1
}
else{
document.getElementById("reponse4").innerHTML = "Plus petit";
tentative=tentative+1
}
}

var reponses = ["","","",""];

function choose(question, value, btn)
{
    reponses[question-1] = value;

    if (btn.style.fontWeight === "bold") {
        btn.style.fontWeight = "normal";
    } else {
        btn.style.fontWeight = "bold";
    }
}

function verifier()
{
    var score = 0;

    if(reponses[0] === "Beyrouth") score=score+1;
    if(reponses[1] === "Asie") score=score+1;
    if(reponses[2] === "Mer Méditerranée") score=score+1;
    if(reponses[3] === "Byblos") score=score+1;

    document.getElementById("result").innerHTML = "Score: " + score + "/4";
    let buttons = document.getElementsByTagName("button");

    for(let i = 0; i < buttons.length; i=i+1){
        buttons[i].style.fontWeight = "normal";
    }
}