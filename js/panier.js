const items = localStorage.getItem("products");
const produits = JSON.parse(items);
const itemsPanier = document.getElementById('tbody-items');

var prixTotalDesProduits= 0;
for(produit of produits){
  
    const tr = document.createElement('tr')
    const produitName = document.createElement('td')
    var textName = document.createTextNode(`${produit.name}`)
    produitName.appendChild(textName)

    tr.appendChild(produitName)
    itemsPanier.appendChild(tr)
    // Pour afficher les names

    const produitPrice = document.createElement('td');
    var priceUnitaire = produit.price / 100
    var textPrice = document.createTextNode(priceUnitaire);
    produitPrice.appendChild(textPrice)
    
    tr.appendChild(produitPrice)
    itemsPanier.appendChild(tr)
    // pour afficher les prix
    
    const quantitySection = document.createElement('td')
    quantitySection.setAttribute('id', "quanitySectionPanier")

    const moinsOursonsContainer = document.createElement('input');
    moinsOursonsContainer.setAttribute('class', "moinsOursons")
    moinsOursonsContainer.setAttribute('value', "-")
    moinsOursonsContainer.setAttribute('type', "button")
    quantitySection.appendChild(moinsOursonsContainer)

    const quantity = document.createElement('input');
    quantity.setAttribute('class', 'quantity-container')
    quantity.setAttribute('value', produit.quantity)
    var textQuantity = document.createTextNode(`${produit.quantity}`)
    quantity.appendChild(textQuantity)
    quantitySection.appendChild(quantity)

    const plusOursonsContainer = document.createElement('input');
    plusOursonsContainer.setAttribute('class', "plusOursons")
    plusOursonsContainer.setAttribute('value', "+")
    plusOursonsContainer.setAttribute('type', "button")
    quantitySection.appendChild(plusOursonsContainer)


   

    tr.appendChild(quantitySection)
    
    // pour afficher les buttons moins quantité et buttons plus

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
   
   }

   // ici je crée le container avec le prix totale
   const cardContainerPrice = document.querySelector('.card');

   const cardContainerBody = document.createElement('div');
   cardContainerBody.setAttribute('class', 'card-body text-center containerAvecPrixTotal');
   var cardTextBody = document.createTextNode('Le prix Totale est de : ' + `${prixTotalDesProduits}`)
   cardContainerBody.appendChild(cardTextBody)

   cardContainerPrice.appendChild(cardContainerBody)
// fin du container avec le prix totale

   
  

   
   
   

   // ici je crée le containerBTN
const containerBTN = document.getElementById('containerBTN')
  
// je crée l'element button j'affiche ses attributs 
const btnAfficherToutsProduits = document.createElement('button');
btnAfficherToutsProduits.setAttribute('id', 'afficherToutsProduits')
btnAfficherToutsProduits.setAttribute('class', 'btn btn-success')
var textBTN = document.createTextNode('Afficher tous mes produits')
btnAfficherToutsProduits.appendChild(textBTN)

// ici je relie le le button au container pour qu'il s'affiche
containerBTN.appendChild(btnAfficherToutsProduits)

// ici je crée table je lui affiche ses attributs et je le relie au containerBTN
const tableAfficherProduits = document.createElement('table');
 tableAfficherProduits.setAttribute('class', 'table  table-dark')
 containerBTN.appendChild(tableAfficherProduits)

 // ici je crée un tbody et je le relie au table
 const tbodyAfficherProduits = document.createElement('tbody')
 tableAfficherProduits.appendChild(tbodyAfficherProduits)

   
// ici je crée un evenements au click
// qui mets la class none une fois cliquer au btn pour afficher tout


btnAfficherToutsProduits.addEventListener('click', () =>{
   btnAfficherToutsProduits.setAttribute('class', 'none')
   
for(produit of produits){
   // ici je crée un tr qui je le relie au tbody
   const trAfficherProduits = document.createElement('tr');
   tbodyAfficherProduits.appendChild(trAfficherProduits);

   const tdAfficherProduitName = document.createElement('td');
   var textTd = document.createTextNode(`${produit.name}`)
   tdAfficherProduitName.appendChild(textTd)

   trAfficherProduits.appendChild(tdAfficherProduitName);

   const tdAfficherProduitColor = document.createElement('td')
   var textTdColor = document.createTextNode(`${produit.color}`)
   tdAfficherProduitColor.appendChild(textTdColor)

   trAfficherProduits.appendChild(tdAfficherProduitColor)

   const tdAfficherProduitQuantity= document.createElement('td')
   var textTdQuantity = document.createTextNode(`${produit.quantity}`)
   tdAfficherProduitQuantity.appendChild(textTdQuantity)

   trAfficherProduits.appendChild(tdAfficherProduitQuantity)

}
});


   const plusOursons = document.querySelector('.plusOursons')
   const quantityContainer = document.querySelector('.quantity-container')
   const moinsOursons = document.querySelector('.moinsOursons')

   // incrementation plus 
   plusOursons.addEventListener('click' ,function(){
    
    quantityContainer.value = parseInt(quantityContainer.value) + 1
    produit.quantity += 1;
   })    

    // incrementation moins
    moinsOursons.addEventListener('click' ,function(){
      quantityContainer.value = parseInt(quantityContainer.value) - 1;
      if(quantityContainer.value == 0){
         console.log('Votre produit est supprimé')
      }
    })    
   
  