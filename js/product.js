const url = new URL(window.location);
const params = new URLSearchParams(url);
const produits_articles = document.getElementById('produits-articles')
const id = url.searchParams.get("id");

fetch("http://localhost:3000/api/teddies/" + id)
.then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
    produits_articles.innerHTML = `
    <div class="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${data.imageUrl}" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <p class="card-text">${data.description}</p>

             <div class="options">

            
                <label for="color">Couleurs</label>
                <select name="color" id="qcolor">
                
                </select>


                <label for="quantity">Quantité : <span>1</span> </label>
             </div>
             <p class="card-text price change-price"><b>${data.price}</b></p>
            </div>
          </div> 
          <div class="produit-buttons">

          <a href=":javascript" id="ajoutPanier" class="btn btn-dark" >Ajouter au panier</a>

          <a href="index.html" class="btn btn-dark"> <b> Continuer vos achats</b></a>
          <a href="panier.html" class="btn btn-dark"> <b> Voir le panier</b></a>  
         </div>
        </div>
      </div>
    ` 
    const selectColor = document.getElementById('qcolor');
    for(color  of data.colors){
      selectColor.innerHTML += `
      <option value="${color}">${color}</option>
      `
    }
    const ajoutPanier = document.getElementById('ajoutPanier');
    ajoutPanier.addEventListener("click", function (e){
      e.preventDefault();
      const product = new Product(data._id, data.name,data.imageUrl, data.price, data.description, 1);
      console.log(product)
      if(localStorage.getItem("products") == null){
        const productsArray = [product];
        const productString = JSON.stringify(productsArray);
        localStorage.setItem("products", productString);
      } else {
        const products = JSON.parse(localStorage.getItem("products"));
        const foundProducts = products.filter(item => item.id === product.id);
        if(foundProducts.length > 0) {
          foundProducts[0].quantity++;
        } else {
          products.push(product);
        }
        const productString = JSON.stringify(products);
        localStorage.setItem("products", productString);
      }
    });
    
 }
)

class Product {
  constructor (id, name, imageUrl, price, description, quantity){
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.price  = price;
    this.description = description;
    this.quantity = quantity;
  }
};