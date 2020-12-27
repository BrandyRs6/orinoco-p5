fetch("http://localhost:3000/api/teddies")
.then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
    const products = document.getElementById('products');
    for(product of data){
        products.innerHTML +=  
        `
        <div class="card mb-2">
        <img class="image-card" src="${product.imageUrl}" alt="Card image cap" >
        <div class="card-body">
          <h4 class="card-title">${product.name}</h4>
          <p class="card-text">${product.description}</p>
            <p class="card-text price change-price"><b>${product.price}</b></p>
          <a class="btn btn-dark" href="produit.html?id=${product._id}">Voir le produit</a>
        </div>
      </div>
      `
    }
})

