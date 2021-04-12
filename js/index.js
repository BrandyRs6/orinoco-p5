// requêtte fetch pour recuperer les donnéesde l'api
fetch("http://localhost:3000/api/teddies")
.then(function(response){ // function pour récupere la reponse en json
    return response.json();
}).then(function(data){ // function qui recupere les données en nom data
    console.log(data);
    const products = document.getElementById('products');
    for(product of data){ // boucle pour prendre chaque element de nos données


      // création de l'html
      const CardMb2 = document.createElement('div');
      CardMb2.setAttribute('class', ' w-75 p-2 row row-cols-2 row-cols-md-2 g-4');
      products.appendChild(CardMb2)

      // creation pour l'image recupere
      const imgCard = document.createElement('img');
      imgCard.setAttribute('class', 'image-card');
      imgCard.setAttribute('src', `${product.imageUrl}`);
      CardMb2.appendChild(imgCard);

      // creation du body pour chaque container avec les details du produit
      const cardBody = document.createElement('div');
      cardBody.setAttribute('class', 'card-body bg-dark');
      CardMb2.appendChild(cardBody)

      // creation du titre du produit
      const h4CardTitle = document.createElement('h4');
      h4CardTitle.setAttribute('class', 'card-title text-white');
      var h4CardTitleText = document.createTextNode(`${product.name}`);
      h4CardTitle.appendChild(h4CardTitleText);
      cardBody.appendChild(h4CardTitle);

      // creation de l'element description du produit
      const paragText = document.createElement('p')
      paragText.setAttribute('class', 'card-text text-white')
      var paragTextDescription = document.createTextNode(`${product.description}`)
      paragText.appendChild(paragTextDescription)
      cardBody.appendChild(paragText);

      // creation de l'element prix du produit
      const paragTextPrice = document.createElement('p')
      paragTextPrice.setAttribute('class', 'card-text text-white');
      var paragTextPriceTexte = document.createTextNode(`${product.price}`);
      paragTextPrice.appendChild(paragTextPriceTexte)
      cardBody.appendChild(paragTextPrice);

      // creation de l'element link pour envoyer vers la page produit avec le id en url
      const aForId = document.createElement('a')
      aForId.setAttribute('class', 'btn btn-light')
      aForId.setAttribute('href', `produit.html?id=${product._id}`)
      var aForIdTexte = document.createTextNode('Voir le produit')
      aForId.appendChild(aForIdTexte)
      cardBody.append(aForId)
    
       
    }
})
// fin du promise