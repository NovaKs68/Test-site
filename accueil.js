
// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
/*function jeuxVideo(){
    const jeuxVideo = document.getElementById("jeux_videos");
    const titrePara1 = document.createElement("h2");
    const contenantPara1Elt = document.createElement("nav");

    const tableau = document.createElement("ul");
    tableau.setAttribute("class", "box_sous_partie");
    titrePara1.setAttribute("id", "titrePara1");
    jeuxVideo.appendChild(titrePara1);
    jeuxVideo.appendChild(contenantPara1Elt);
    contenantPara1Elt.appendChild(tableau);
}



function meubles(){
    const meubles = document.getElementById("meubles");
    const titrePara2 = document.createElement("h2");
    const contenantPara2Elt = document.createElement("nav");

    const tableau = document.createElement("ul");
    tableau.setAttribute("class", "box_sous_partie");
    titrePara2.setAttribute("id", "titrePara2");
    meubles.appendChild(titrePara2);
    meubles.appendChild(contenantPara2Elt);
    contenantPara2Elt.appendChild(tableau);
}



function jeuxJouet(){
    const jeuxJouet = document.getElementById("Jeux_et_jouets");
    const titrePara3 = document.createElement("h2");
    const contenantPara3Elt = document.createElement("nav");

    const tableau = document.createElement("ul");
    tableau.setAttribute("class", "box_sous_partie");
    titrePara3.setAttribute("id", "titrePara3");
    jeuxJouet.appendChild(titrePara3);
    jeuxJouet.appendChild(contenantPara3Elt);
    contenantPara3Elt.appendChild(tableau);
}



function sportLoisir(){
    const sportLoisir = document.getElementById("Sports_et_loisirs");
    const titrePara4 = document.createElement("h2");
    const contenantPara4Elt = document.createElement("nav");

    const tableau = document.createElement("ul");
    tableau.setAttribute("class", "box_sous_partie");
    titrePara4.setAttribute("id", "titrePara4");
    sportLoisir.appendChild(titrePara4);
    sportLoisir.appendChild(contenantPara4Elt);
    contenantPara4Elt.appendChild(tableau);
}



function autoMoto(){
    const autoMoto = document.getElementById("Auto_et_Moto");
    const titrePara5 = document.createElement("h2");
    const contenantPara5Elt = document.createElement("nav");

    const tableau = document.createElement("ul");
    tableau.setAttribute("class", "box_sous_partie");
    titrePara5.setAttribute("id", "titrePara5");
    autoMoto.appendChild(titrePara5);
    autoMoto.appendChild(contenantPara5Elt);
    contenantPara5Elt.appendChild(tableau);
}


const contenantElt = document.getElementById("mainSect");

console.log(contenantElt);

/*const test = document.createElement("div");
contenantElt.appendChild(test); 


ajaxGet("http://145.239.32.254:8081/browseShop/categories", function (reponses) {
    var newApiElt = JSON.parse(reponses);
    newApiElt.forEach(article => {
        var newArticle = document.createElement("article");
        newArticle.setAttribute("id", article.nom.replace(/ /gi, "_"))
        contenantElt.appendChild(newArticle);
    });



    jeuxVideo();

    const para1 = newApiElt[0].sousCategorie;
    para1.forEach(sousElement => {
        const partie = document.createElement("il");
        sousElement.textContent = partie;
        var sousPartie = document.getElementsByClassName("box_sous_partie")[0];
        sousPartie.appendChild(partie);
        const ligne = document.createElement("a");
        ligne.textContent = sousElement;
        ligne.setAttribute("class", "liens");
        ligne.setAttribute("href", "#");
        partie.appendChild(ligne);
        console.log(sousElement);
    });


    const titre1 = newApiElt[0].nom;
    console.log(titre1);
    titrePara1.textContent = titre1;





    meubles();

    const para2 = newApiElt[1].sousCategorie;
    para2.forEach(sousElement => {
        const partie = document.createElement("il");
        sousElement.textContent = partie;
        var sousPartie = document.getElementsByClassName("box_sous_partie")[1];
        sousPartie.appendChild(partie);
        const ligne = document.createElement("a");
        ligne.textContent = sousElement;
        ligne.setAttribute("class", "liens");
        partie.appendChild(ligne);
        console.log(sousElement);
    });


    const titre2 = newApiElt[1].nom;
    console.log(titre2);
    titrePara2.textContent = titre2;


    jeuxJouet();

    const para3 = newApiElt[2].sousCategorie;
    para3.forEach(sousElement => {
        const partie = document.createElement("il");
        sousElement.textContent = partie;
        var sousPartie = document.getElementsByClassName("box_sous_partie")[2];
        sousPartie.appendChild(partie);
        const ligne = document.createElement("a");
        ligne.textContent = sousElement;
        ligne.setAttribute("class", "liens");
        partie.appendChild(ligne);
        console.log(sousElement);
    });


    const titre3 = newApiElt[2].nom;
    console.log(titre3);
    titrePara3.textContent = titre3;



    sportLoisir();

    const para4 = newApiElt[3].sousCategorie;
    para4.forEach(sousElement => {
        const partie = document.createElement("il");
        sousElement.textContent = partie;
        var sousPartie = document.getElementsByClassName("box_sous_partie")[3];
        sousPartie.appendChild(partie);
        const ligne = document.createElement("a");
        ligne.textContent = sousElement;
        ligne.setAttribute("class", "liens");
        partie.appendChild(ligne);
        console.log(sousElement);
    });


    const titre4 = newApiElt[3].nom;
    console.log(titre4);
    titrePara4.textContent = titre4;

    autoMoto();

    const para5 = newApiElt[4].sousCategorie;
    para5.forEach(sousElement => {
        const partie = document.createElement("il");
        sousElement.textContent = partie;
        var sousPartie = document.getElementsByClassName("box_sous_partie")[4];
        sousPartie.appendChild(partie);
        const ligne = document.createElement("a");
        ligne.textContent = sousElement;
        ligne.setAttribute("class", "liens");
        partie.appendChild(ligne);
        console.log(sousElement);
    });


    const titre5 = newApiElt[4].nom;
    console.log(titre5);
    titrePara5.textContent = titre5;

});


*/


// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function gererCategorie(categorie){
    const jeuxVideo = document.getElementById(categorie.nom.replace(/ /gi, "_"));
    const titrePara1 = document.createElement("h2");
    titrePara1.textContent = categorie.nom;
    const contenantPara1Elt = document.createElement("nav");

    const tableau = document.createElement("ul");
    tableau.setAttribute("class", "box_sous_partie");
    tableau.id = "tableauSC_"+categorie.id
    titrePara1.setAttribute("id", "titrePara"+categorie.id);
    jeuxVideo.appendChild(titrePara1);
    jeuxVideo.appendChild(contenantPara1Elt);
    contenantPara1Elt.appendChild(tableau);

} 


function gererSousCategorieDansTableau(parent, sousCategorie){
    const lignes = document.getElementById("tableauSC_"+parent.id);
    const partie = document.createElement("il");
    partie.setAttribute("class", "liens");
    partie.textContent = sousCategorie;
    lignes.appendChild(partie);
}


const contenantElt = document.getElementById("mainSect");

console.log(contenantElt);


ajaxGet("http://145.239.32.254:8081/browseShop/categories", function (reponses) {
    var newApiElt = JSON.parse(reponses);
    newApiElt.forEach(article => {
        var newArticle = document.createElement("article");
        newArticle.setAttribute("id", article.nom.replace(/ /gi, "_"))
        contenantElt.appendChild(newArticle);
        gererCategorie(article)
        article.sousCategorie.forEach(sousCategorie => {
            gererSousCategorieDansTableau(article, sousCategorie);
        })    
    });
});
