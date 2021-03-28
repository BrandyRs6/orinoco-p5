fetch("http://localhost:3000/api/teddies")
.then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
    const products = document.getElementById('products');
    for(product of data){

      const CardMb2 = document.createElement('div');
      CardMb2.setAttribute('class', ' w-75 p-2 row row-cols-2 row-cols-md-2 g-4');
      products.appendChild(CardMb2)

      const imgCard = document.createElement('img');
      imgCard.setAttribute('class', 'image-card');
      imgCard.setAttribute('src', `${product.imageUrl}`);
      CardMb2.appendChild(imgCard);

      const cardBody = document.createElement('div');
      cardBody.setAttribute('class', 'card-body bg-dark');
      CardMb2.appendChild(cardBody)

      const h4CardTitle = document.createElement('h4');
      h4CardTitle.setAttribute('class', 'card-title text-white');
      var h4CardTitleText = document.createTextNode(`${product.name}`);
      h4CardTitle.appendChild(h4CardTitleText);
      cardBody.appendChild(h4CardTitle);

      const paragText = document.createElement('p')
      paragText.setAttribute('class', 'card-text text-white')
      var paragTextDescription = document.createTextNode(`${product.description}`)
      paragText.appendChild(paragTextDescription)
      cardBody.appendChild(paragText);

      const paragTextPrice = document.createElement('p')
      paragTextPrice.setAttribute('class', 'card-text text-white');
      var paragTextPriceTexte = document.createTextNode(`${product.price}`);
      paragTextPrice.appendChild(paragTextPriceTexte)
      cardBody.appendChild(paragTextPrice);

      const aForId = document.createElement('a')
      aForId.setAttribute('class', 'btn btn-light')
      aForId.setAttribute('href', `produit.html?id=${product._id}`)
      var aForIdTexte = document.createTextNode('Voir le produit')
      aForId.appendChild(aForIdTexte)
      cardBody.append(aForId)
    
       
    }
})
