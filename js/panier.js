const items = localStorage.getItem("products");
const produits = JSON.parse(items);
var itemsPanier = document.getElementById('tbody-items');
console.log(produits)

for( produit of produits ){
    let prixTotal = produit.price * produit.quantity;
    itemsPanier.innerHTML+= `
            <tr>
            <td>${produit.name}</td>
            <td id="prix">${produit.price}</td>
            <td id="quantity">${produit.quantity}</td>
            <td>${produit.colors}</td>
            <td id="amount">${prixTotal}</td>
            </tr>
    `

}
