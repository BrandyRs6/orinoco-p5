const items = localStorage.getItem("products");
const produits = JSON.parse(items);
const itemsPanier = document.getElementById('tbody-items');

var prixTotalDesProduits= 0;



for(produit of produits){
  
    const tr = document.createElement('tr')
    tr.setAttribute('id', "cart-rows")
    const produitName = document.createElement('td')
    var textName = document.createTextNode(`${produit.name}`)
    produitName.appendChild(textName)

    tr.appendChild(produitName)
    itemsPanier.appendChild(tr)
    // Pour afficher les names

    const produitPrice = document.createElement('td');
    produitPrice.setAttribute('id', "produitPrice")
    var priceUnitaire = produit.price / 100
    var textPrice = document.createTextNode(priceUnitaire);
    produitPrice.appendChild(textPrice)
    
    tr.appendChild(produitPrice)
    itemsPanier.appendChild(tr)
    // pour afficher les prix
    

 

    const quantitySection = document.createElement('td')
    quantitySection.setAttribute('id', "quanitySectionPanier")

    const moinsOursonsContainer = document.createElement('input');
    moinsOursonsContainer.setAttribute('id', "moinsOursons")
    moinsOursonsContainer.setAttribute('value', "-")
    moinsOursonsContainer.setAttribute('type', "button")
    quantitySection.appendChild(moinsOursonsContainer)

    const quantity = document.createElement('input');
    quantity.setAttribute('id', 'quantity-container')
    quantity.setAttribute('value', produit.quantity)
    var textQuantity = document.createTextNode(`${produit.quantity}`)
    quantity.appendChild(textQuantity)
    quantitySection.appendChild(quantity)

    const plusOursonsContainer = document.createElement('input');
    plusOursonsContainer.setAttribute('id', "plusOursons")
    plusOursonsContainer.setAttribute('value', "+")
    plusOursonsContainer.setAttribute('type', "button")
    quantitySection.appendChild(plusOursonsContainer)


   

    tr.appendChild(quantitySection)
    

    const produitColor= document.createElement('td');
    var textColor = document.createTextNode(`${produit.color}`)
    produitColor.appendChild(textColor);

    tr.appendChild(produitColor);
    itemsPanier.appendChild(tr)
    // pour afficher les couleurs

    const amount = document.createElement('td');
    var prixTotal = produit.quantity * produit.price / 100;
    var textAmount = document.createTextNode(`${prixTotal}`)
    amount.appendChild(textAmount);

    tr.appendChild(amount)
    itemsPanier.appendChild(tr)    

   prixTotalDesProduits += prixTotal;

   const supprimerProduit = document.createElement('button')
   supprimerProduit.setAttribute('class', 'btn btn-danger btn-supp')
   var textSupprimer = document.createTextNode('Remove')
   supprimerProduit.appendChild(textSupprimer)
   supprimerProduit.setAttribute('id', 'supprimerProduit')
  

   tr.appendChild(supprimerProduit)
   itemsPanier.appendChild(tr)


  

   }

   // ici je crée le container avec le prix totale
   const cardContainerPrice = document.querySelector('.card');

   const cardContainerBody = document.createElement('div');
   cardContainerBody.setAttribute('class', 'card-body text-center containerAvecPrixTotal');
   var cardTextBody = document.createTextNode('Le prix Totale est de : ' + `${prixTotalDesProduits}`)
   cardContainerBody.appendChild(cardTextBody)

   cardContainerPrice.appendChild(cardContainerBody)
// fin du container avec le prix totale

   
for(let i = 0 ; i < supprimerProduit.length; i++){
    var button = supprimerProduit[i]
    button.addEventListener('click', (event) =>{
        var buttonClicked = event.target
        buttonClicked.parentElement.remove()
       updatePanier()
    })
}

function updatePanier(){
    // si un produit à été enlever ou as été modifié, ajout ou enlever qnty
    // modifié le prix
    
    loadPanier()
}
function ajoutQnty(){
    // function pour ajouter une quantité
    // la quantité comprise entre 1 et 10 par exemple
 
    updatePanier()
}

function removeQnty(){
    // function pour enlever une quantité
    // la quantité ne doit pas afficher des negatives
    updatePanier()
}


function loadPanier(){
    localStorage.getItem('products', JSON.stringify(items));
    console.log("hey")
}


/*
    à faire pour la semaine prochaine 

*/
