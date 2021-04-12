const items = localStorage.getItem("products"); // variable pour recuperer le tableau
const produits = JSON.parse(items); // parser le tableau

const itemsPanier = document.getElementById('tbody-items');

var prixTotalDesProduits= 0;



for(let i = 0; i < produits.length; i++){
  
    const tr = document.createElement('tr')
    tr.setAttribute('id', "cart-rows")
    const produitName = document.createElement('td')
    var textName = document.createTextNode(`${produits[i].name}`)
    produitName.appendChild(textName)

    tr.appendChild(produitName)
    itemsPanier.appendChild(tr)
    // Pour afficher les names

    const produitPrice = document.createElement('td');
    produitPrice.setAttribute('id', "produitPrice")
    var priceUnitaire = produits[i].price / 100
    var textPrice = document.createTextNode(priceUnitaire);
    produitPrice.appendChild(textPrice)
    
    tr.appendChild(produitPrice)
    itemsPanier.appendChild(tr)
    // pour afficher les prix
    

 
    // ici pour afficher les btn plus ou moins et la quantité

    const quantitySection = document.createElement('td')
    quantitySection.setAttribute('id', "quanitySectionPanier")

    const moinsOursonsContainer = document.createElement('input');
    moinsOursonsContainer.setAttribute('class', "moinsOursons")
    moinsOursonsContainer.setAttribute('value', "-")
    moinsOursonsContainer.setAttribute('type', "button")
  
    
    quantitySection.appendChild(moinsOursonsContainer)

    const quantity = document.createElement('input');
    quantity.setAttribute('id', 'quantity-container')
    quantity.setAttribute('value', produits[i].quantity)
    var textQuantity = document.createTextNode(`${produits[i].quantity}`)
    quantity.appendChild(textQuantity)
    quantitySection.appendChild(quantity)

    const plusOursonsContainer = document.createElement('input');
    plusOursonsContainer.setAttribute('id', "plusOursons")
    plusOursonsContainer.setAttribute('value', "+")
    plusOursonsContainer.setAttribute('type', "button")
    
    quantitySection.appendChild(plusOursonsContainer)

    tr.appendChild(quantitySection)
    

    // pour afficher la couleur
    const produitColor= document.createElement('td');
    var textColor = document.createTextNode(`${produits[i].color}`)
    produitColor.appendChild(textColor);

    tr.appendChild(produitColor);
    itemsPanier.appendChild(tr)
    // pour afficher les couleurs

    const amount = document.createElement('td');
    var prixTotal = produits[i].quantity * produits[i].price / 100;
    var textAmount = document.createTextNode(`${prixTotal}`)
    amount.appendChild(textAmount);

    tr.appendChild(amount)
    itemsPanier.appendChild(tr)    

   prixTotalDesProduits += prixTotal;

   // au click que je veux augmenter d'un et supprimer la valeur precedente

   plusOursonsContainer.onclick = function(){
    quantity.value++;
    var prixTotalIncrease = quantity.value * produits[i].price / 100;
    console.log(prixTotalIncrease)
    var textAmount = document.createTextNode(`${prixTotalIncrease}`)
    amount.firstChild.remove()
    amount.appendChild(textAmount)

    // ici je fais le prix total
    prixTotalDesProduits += produits[i].quantity * produits[i].price / 100 ;
    var cardTextBody = document.createTextNode('Le prix Totale est de : ' + `${prixTotalDesProduits}`)
    cardContainerBody.firstChild.remove()
    cardContainerBody.appendChild(cardTextBody)
}

// j'enleve 1
moinsOursonsContainer.onclick = function(){
    quantity.value--;
    var prixTotalDecrease = quantity.value * produits[i].price / 100;
    console.log(prixTotalDecrease)
    var textAmount = document.createTextNode(`${prixTotalDecrease}`)
    amount.firstChild.remove()
    amount.appendChild(textAmount)

    prixTotalDesProduits -= produits[i].quantity * produits[i].price / 100;
    var cardTextBody = document.createTextNode('Le prix Totale est de : ' + `${prixTotalDesProduits}`)
    cardContainerBody.firstChild.remove()
    cardContainerBody.appendChild(cardTextBody)

   
    
}


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

   
//  ici je veux qu'au click ça m'enleve un produit mais aussi du localstorage
for(let i = 0 ; i < supprimerProduit.length; i++){
    var button = supprimerProduit[i]
    button.addEventListener('click', (event) =>{
        var buttonClicked = event.target
        buttonClicked.parentElement.remove()
          
        
       
    })


  
}

// creation du btn creationaccount btn qui display none le panier pour afficher le formulaire client
var creationAccountBtn = document.getElementById("creationAccountBtn");
creationAccountBtn.addEventListener("click", () =>{
   
})


