function openPage(p){

var data = {


beyrouth:{
title:"Beyrouth",
img:"beyrouth.jpg",
desc:"Capitale dynamique du Liban...",
price:"$$$$$$ (plutôt cher)",
when:"Toute l'année, surtout printemps et automne",
rec:"Vie nocturne, restaurants, musées, bord de mer"
},

byblos:{
title:"Byblos",
img:"byblos.jpg",
desc:"Une des plus anciennes villes du monde avec un port magnifique et des ruines historiques impressionnantes.",
price:"$$$$ (modéré)",
when:"Printemps et été",
rec:"Vieille ville, port, sites archéologiques"
},

baalbek:{
title:"Baalbek",
img:"baalbek.jpg",
desc:"Site antique majeur avec des temples romains gigantesques parmi les mieux conservés au monde.",
price:"$$ (abordable)",
when:"Printemps et automne",
rec:"Temples romains, histoire, photographie"
},

tripoli:{
title:"Tripoli",
img:"tripoli.jpg",
desc:"Ville historique du nord avec des souks traditionnels et une architecture ottomane riche.",
price:"$$ (abordable)",
when:"Printemps et automne",
rec:"Souks, vieille ville, cuisine locale"
},

sidon:{
title:"Sidon",
img:"sidon.jpeg",
desc:"Ville côtière connue pour son château de la mer et son atmosphère authentique.",
price:"$$ (abordable)",
when:"Printemps et été",
rec:"Château de la mer, promenade, histoire"
},

tyre:{
title:"Tyre",
img:"tyre.jpg",
desc:"Ville antique classée UNESCO avec de belles plages et des vestiges historiques remarquables.",
price:"$$ (abordable)",
when:"été et printemps",
rec:"Plages, ruines, détente"
},

cedres:{
title:"Cèdres",
img:"cedre.jpg",
desc:"Forêts emblématiques du Liban symbolisant le pays. Un lieu naturel calme et iconique.",
price:"$$ (faible)",
when:"Hiver pour la neige, été pour la randonnée",
rec:"Randonnée, paysages, photos"
},

qadisha:{
title:"Qadisha",
img:"qadisha.jpg",
desc:"Vallée sacrée inscrite à l'UNESCO, idéale pour la randonnée et la découverte spirituelle.",
price:"$$ (faible)",
when:"Printemps et automne",
rec:"Randonnée, nature, monastères"
},

plages:{
title:"Plages",
img:"plage.jpg",
desc:"Le Liban possède de nombreuses plages méditerranéennes idéales pour se détendre.",
price:"$$$$ (variable)",
when:"XC9té",
rec:"Baignade, détente, beach clubs"
},

jeita:{
title:"Jeita",
img:"jeita.jpg",
desc:"Grottes spectaculaires considérées comme l'un des plus beaux sites naturels du pays.",
price:"$$$$",
when:"Toute l'année",
rec:"Grottes, visite guidée, nature"
},

faraya:{
title:"Faraya",
img:"faraya.jpg",
desc:"Station de ski populaire offrant des activités hivernales et des paysages enneigés.",
price:"$$$$$$",
when:"Hiver",
rec:"Ski, snowboard, montagne"
},

tannourine:{
title:"Tannourine",
img:"tannourine.jpg",
desc:"Réserve naturelle connue pour sa biodiversité et ses paysages forestiers magnifiques.",
price:"$$ (faible)",
when:"Printemps et été",
rec:"Randonnée, nature, calme"
},

gastronomie:{
title:"Gastronomie",
img:"nourriture.jpg",
desc:"La cuisine libanaise est riche, variée et mondialement reconnue pour ses saveurs.",
price:"$$ à $$$$",
when:"Toute l'année",
rec:"Mezzés, grillades, desserts"
},

traditions:{
title:"Traditions",
img:"tradition.jpg",
desc:"Le Liban possède un mélange unique de cultures, traditions et influences historiques.",
price:"Gratuit",
when:"Toute l'année",
rec:"Festivités locales, culture"
},

musique:{
title:"Musique",
img:"musique.jpg",
desc:"Une scène musicale dynamique mêlant modernité et influences traditionnelles.",
price:"$$ à $$$$",
when:"Toute l'année",
rec:"Concerts, festivals"
},

festivals:{
title:"Festivals",
img:"festival.jpg",
desc:"Le Liban accueille de nombreux festivals culturels et musicaux renommés.",
price:"$$$$",
when:"été",
rec:"Événements culturels, concerts"
},

artisanat:{
title:"Art",
img:"art.jpg",
desc:"Produits faits main reflétant le savoir-faire traditionnel libanais.",
price:"$$",
when:"Toute l'année",
rec:"Souvenirs, marchés locaux"
},

danse:{
title:"Danse",
img:"danse.jpg",
desc:"La danse traditionnelle dabké est un élément central de la culture libanaise.",
price:"Gratuit",
when:"Toute l'année",
rec:"Spectacles, événements culturels"
},

ruines:{
title:"Ruines",
img:"ruines.jpg",
desc:"Le Liban regorge de vestiges antiques à explorer.",
price:"$$",
when:"Printemps et automne",
rec:"Sites historiques"
},

mer:{
title:"Mer",
img:"mer.jpg",
desc:"La Méditerranée offre détente et activités nautiques.",
price:"$$",
when:"Été",
rec:"Baignade, sports nautiques"
},

randonnee:{
title:"Randonnée",
img:"randonnee.jpg",
desc:"De nombreux sentiers permettent d'explorer les montagnes libanaises.",
price:"Gratuit à $$",
when:"Printemps et automne",
rec:"Nature, trekking"
},

ski:{
title:"Ski",
img:"ski.jpg",
desc:"Stations de ski modernes accessibles en hiver.",
price:"$$$$$$",
when:"Hiver",
rec:"Ski, snowboard"
},

parapente:{
title:"Parapente",
img:"parapente.jpg",
desc:"Activité populaire offrant des vues spectaculaires sur le pays.",
price:"$$$$",
when:"Printemps à automne",
rec:"Expérience aérienne"
},

roadtrip:{
title:"Road Trip",
img:"roadtrip.jpg",
desc:"Parcourir le Liban en voiture permet de découvrir sa diversité.",
price:"Variable",
when:"Toute l'année",
rec:"Voyage, exploration"
}

};

var item = data[p];

var content = `
<h2>${item.title}</h2>
${item.img ? `<img src="${item.img}">` : ""}
<p><b>Description :</b> ${item.desc}</p>
<p><b>Prix :</b> ${item.price}</p>
<p><b>Quand visiter :</b> ${item.when}</p>
<p><b>Expériences :</b> ${item.rec}</p>
`;

document.getElementById("content").innerHTML = content;
document.getElementById("overlay").style.display = "block";
}

function closePage(){
document.getElementById("overlay").style.display = "none";
}