const items = localStorage.getItem("products"); // variable pour recuperer le tableau
const produits = JSON.parse(items); // parser le tableau

const itemsPanier = document.getElementById('tbody-items');

var prixTotalDesProduits = 0; // ici je met le prix total à 0 car on entre dans une boucle après

/* Function pour savoir si le panier est vide ou pas et afficher message*/
function lePanierEstVide(){
  if(produits.length > 0){
    document.getElementById("panierVide").classList.add("none")
  }else{
    document.getElementById("panierVide").classList.remove("none")
  }
}
lePanierEstVide()
// fin de la function 


for (let i = 0; i < produits.length; i++) { // boucle pour afficher tous les produits de façon dynamique

  function afficherElementsTable(){
    const tr = document.createElement('tr') // creation du premier element pour mettre les produits en
  tr.setAttribute('id', "cart-rows")      // colonne


  const produitName = document.createElement('td') // je crée l'element
  var textName = document.createTextNode(`${produits[i].name}`) // je fais une variable pour lui mettre un text
  produitName.appendChild(textName) // ensuite je fais le lien entre le texte et l'element

  tr.appendChild(produitName) // ensuite je fais le lien entre l'element et la colonne
  itemsPanier.appendChild(tr) // puis la je fais le lien entre la colonne et le tableau
  // Pour afficher les names

  const produitPrice = document.createElement('td'); // ici on crée l'element td pour le prix du produit
  produitPrice.setAttribute('id', "produitPrice") // ici je met l'id 
  var priceUnitaire = produits[i].price / 100; // la pour chaque prix du produit je divise 100
  var textPrice = document.createTextNode(priceUnitaire); // la je crée le text pour le prix unitaire
  produitPrice.appendChild(textPrice) //ici je fais le lien avec le produitPrice et le text ou j'ai les prix unitaire

  tr.appendChild(produitPrice) // ici je mets les informations dans la colonne
  itemsPanier.appendChild(tr) // ensuite je mets la colonne dans le tableau
  // pour afficher les prix

  const quantitySection = document.createElement('td') // ici je crée l'element td pour la quantité 
  quantitySection.setAttribute('id', "quanitySectionPanier") // ici je mets l'id quantitySectionPanier

  const moinsOursonsContainer = document.createElement('input'); // ici je crée l'element input
  moinsOursonsContainer.setAttribute('class', "moinsOursons") // j'ajoute la classe moinsOursons
  moinsOursonsContainer.setAttribute('value', "-") // je lui mets la value -
  moinsOursonsContainer.setAttribute('type', "button") // et je lui ajoute un type button
  // ici c'est pour la sections -
  quantitySection.appendChild(moinsOursonsContainer) // ensuite je fais la liaison pour affecter les modifications

  const quantity = document.createElement('input'); // je crée l'element quantity en input
  quantity.setAttribute('id', 'quantity-container'); // je mets l'id quantity-container
  quantity.setAttribute('value', produits[i].quantity) // j'ajoute la valeur pour afficher le qnté premiere(produit)
  var textQuantity = document.createTextNode(`${produits[i].quantity}`)// ici je crée le texte 
  quantity.appendChild(textQuantity)// et la j'affecte le texte pour l'afficher
  // la c'est pour la section affichage 
  quantitySection.appendChild(quantity) // puis la j'affecte les modifications a la section 

  const plusOursonsContainer = document.createElement('input');// ici je crée l'input pour l'element+
  plusOursonsContainer.setAttribute('id', "plusOursons")// je lui affecte l'id plusOursons
  plusOursonsContainer.setAttribute('value', "+")// je lui mets la valeur +
  plusOursonsContainer.setAttribute('type', "button") // je lui affecte le type button
  // la c'est pour la section +
  quantitySection.appendChild(plusOursonsContainer)// ensuite je l'affecte a la section

  tr.appendChild(quantitySection)// puis j'affecte la section a une colonne 
  // ici pour quoi je ne mets pas de itemspanier.appendchild(tr) ??


  // pour afficher la couleur
  const produitColor = document.createElement('td'); // je crée l'element td pour faire une colonne
  var textColor = document.createTextNode(`${produits[i].color}`)// je lui affecte le texte avec la boucle pour chaque couleur
  produitColor.appendChild(textColor);// ensuite je lui affecte le texte a la colonne

  tr.appendChild(produitColor);// et j'affecte le tout a la colonne
  itemsPanier.appendChild(tr)// puir au tableau
  // pour afficher les couleurs

  const amount = document.createElement('td');// la je crée le prixTotale
  var prixTotal = produits[i].quantity * produits[i].price / 100;// la je fais le calcul donc de quantité * prix divisé par 100 pour chaque produit
  var textAmount = document.createTextNode(`${prixTotal}`)// ensuite je crée le texte pour le prix total
  amount.appendChild(textAmount);// et je l'affecte a la colonne

  tr.appendChild(amount)// puis je crée la colonne
  itemsPanier.appendChild(tr)// et je l'affecte au tableau  

  prixTotalDesProduits += prixTotal;// la je fais une incrementation pour le prix total de tous les produits
  }
afficherElementsTable()


  // ici pour afficher les btn plus ou moins et la quantité


  // au click que je veux augmenter d'un et supprimer la valeur precedente

  plusOursonsContainer.onclick = function () { // la une function au click sa m'ajotue un produit
    quantity.value++;// donc la sa m'ajoute un produit a la même ligne 

    var prixTotalIncrease = quantity.value * produits[i].price / 100; // ensuite je fais un prix total a la ligne
    var textAmount = document.createTextNode(`${prixTotalIncrease}`)// ensuite je crée un texte pour mettre la nouvelle valeur
    amount.firstChild.remove()// la j'enleve le premier enfant pour mettre le nouveau
    amount.appendChild(textAmount)// ensuite j'affiche le prix 

    // ici je fais le prix total

    prixTotalDesProduits += produits[i].quantity * produits[i].price / 100; // la je fais le prix total des produits
    var cardTextBody = document.createTextNode('Le prix Totale est de : ' + `${prixTotalDesProduits}`) // le texte
    cardContainerBody.firstChild.remove()// j'enleve le premier enfant si il avait un
    cardContainerBody.appendChild(cardTextBody)// et je mets le nouveau prix
    window.location.reload()// et la je reload la page 


    // pour modifier dans le local storage
    if (produits[i].quantity >= 1) {// la je vérifie si la quantité des produits est supérieure à 1
      produits[i].quantity++;// si oui j'incremente afin de modifier dans le localstorage
    }
    localStorage.setItem("products", JSON.stringify(produits))// la je lui mets un set pour modifier 
    localStorage.getItem("products")// ensuite je lui mets un get pour re affecter la quantité
  }


  // j'enleve 1
  moinsOursonsContainer.onclick = function () {// function pour enlever 1
    quantity.value--;// function pour decrementer
    var prixTotalDecrease = quantity.value * produits[i].price / 100;// prix total en enlevant
    var textAmount = document.createTextNode(`${prixTotalDecrease}`)// je crée le texte 
    amount.firstChild.remove()// j'enleve l'ancien qnté
    amount.appendChild(textAmount)// j'affectue le texte une fois enleve l'ancien

    prixTotalDesProduits -= produits[i].quantity * produits[i].price / 100;// je fais le total des produits
    var cardTextBody = document.createTextNode('Le prix Totale est de : ' + `${prixTotalDesProduits}`)// puis je rechange le total
    cardContainerBody.firstChild.remove()// j'enleve l'ancien prix
    cardContainerBody.appendChild(cardTextBody)// et j'affectue à la section

    if (produits[i].quantity > 1) {// ici une function pour enlever un 
      produits[i].quantity--;// notre function pour decrementer
    } else {
      produits.splice(i, 1)// la c'est pour enlever 1 par rapport au i
    }
    localStorage.setItem("products", JSON.stringify(produits))// la je modifie le localstorage
    localStorage.getItem("products")// puis je l'affecte la nouvelle valeur
    window.location.reload();// et la je reload la page
  }

}

// ici je crée le container avec le prix totale

const cardContainerPrice = document.querySelector('.card');// je selection la partie .card

const cardContainerBody = document.createElement('div');// je crée l'element div
cardContainerBody.setAttribute('class', 'text-center');// je lui affectue la class center
var cardTextBody = document.createTextNode('Le prix Totale est de : ' + `${prixTotalDesProduits}`)// je mets le nv texte
cardContainerBody.appendChild(cardTextBody)// je lui affecte le texte au div
cardContainerPrice.appendChild(cardContainerBody)// ensuite je lui affete le body au container .card

// fin du container avec le prix totale


//  ici je veux qu'au click 






const btnSubmit = document.getElementById("acheter") // ici le button pour envoier la requette


btnSubmit.addEventListener("click", function () { // la function en evenement

  // la je crée le dom pour le client
  const prenom = document.getElementById("prenom").value
  const nom = document.getElementById("nom").value
  const adresse = document.getElementById("adresse").value
  const ville = document.getElementById("ville").value
  const email = document.getElementById("email").value
  // fin 



  // ensuite je crée l'objet
  let contact = {
    firstName: prenom,
    lastName: nom,
    address: adresse,
    email: email,
    city: ville,
  };
  // fin 

  let productsId = []; //  ici je crée un tableau pour recuperer les id
  for (let i = 0; i < produits.length; i++) { // boucle pour recuperer chaque id 
    productsId.push(produits[i].id) // je mets seulement les id des produits dans le tableau
  }



  let formulaireClient = JSON.stringify({ // ici je stringify les deux tableau
    contact: contact, // l'objet contact
    products: productsId, // et le tableau id
  });


  fetch("http://localhost:3000/api/teddies/order", { // je fais une requette vers mon api avec /order a la fin 
    method: 'POST', // j'utilise la methode post
    headers: { // j'utilise des headers pour preciser le type du contenu
      'content-type': "application/json"
    },
    body: formulaireClient // et le body il sert a envoyer le corp donc le formulaire en stringify
  })
    .then(function (response) { // ensuite si je recoit une reponse
      return response.json() // je retourne le json 
    }).then(function (rep) {// et une fois que je recois les données
      var creerRef = localStorage.setItem("reponse", rep.orderId) // je crée la reponse pour avoir la reference en ls
      var avoirRef = localStorage.getItem(creerRef)// ensuite je veux avoir la reference
      window.location = "http://127.0.0.1:5501/Orinoco/confirmation.html?"; // et je redirecte l'utilisateur vers la ocnfirmation
      localStorage.removeItem("products")

    }).catch(function (error) { // ici si mon api ne reponds pas j'envoie une erreur
      console.log("erreur")
    });
})

// ici je mets tous les functions