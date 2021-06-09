const url = new URL(window.location); // creation de l'url
const params = new URLSearchParams(url); // parametre de l'url
const produits_articles = document.getElementById('produits-articles')
const id = url.searchParams.get("id"); // c'est pour recuperer l'id

fetch("http://localhost:3000/api/teddies/" + id) // requette fetch de l'api + l'id de l'article pour afficher le produit
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    // création de l'image
    const imageProduct = document.createElement('img')
    imageProduct.setAttribute('src', `${data.imageUrl}`)
    imageProduct.setAttribute('class', "card-img")
    const containerImg = document.getElementById('containerImg');
    containerImg.appendChild(imageProduct)

    // création du cardBody title et text

    // ici création du name
    const dataName = document.createElement('h5');
    dataName.setAttribute('class', 'card-title text-white')
    var textDataName = document.createTextNode(`${data.name}`)
    dataName.appendChild(textDataName)

    const containerBody = document.getElementById('containerBody');
    containerBody.appendChild(dataName)

    // ici creation description
    const dataDescription = document.createElement('p');
    dataDescription.setAttribute('class', 'card-text text-white')
    var textDataDescription = document.createTextNode(`${data.description}`);
    dataDescription.appendChild(textDataDescription);

    containerBody.appendChild(dataDescription)

    // ici container des options couleurs etc

    // creation du div options

    const divOptions = document.createElement('div')
    divOptions.setAttribute('class', 'options text-white')
    containerBody.appendChild(divOptions);

    // creation du label

    const labelForColors = document.createElement('label');
    labelForColors.setAttribute('for', 'color')
    var labelText = document.createTextNode('Couleurs :  ')
    labelForColors.appendChild(labelText);
    divOptions.appendChild(labelForColors);

    // creation du select
    const selectContainer = document.createElement('select')
    selectContainer.setAttribute('name', 'color')
    selectContainer.setAttribute('id', 'qcolor')
    divOptions.appendChild(selectContainer)

    // creation du label quantité
    const labelForQuantity = document.createElement('label');
    labelForQuantity.setAttribute('for', 'quantity');
    var labelForQuantityText = document.createTextNode('Quantity : ')
    labelForQuantity.appendChild(labelForQuantityText);
    divOptions.appendChild(labelForQuantity)

    // creation du input quantité

    const quantityinput = document.createElement('input')
    quantityinput.setAttribute('name', 'quantity')
    quantityinput.setAttribute('value', '1')
    quantityinput.setAttribute('id', 'quantityUser')
    quantityinput.setAttribute('type', 'number')
    quantityinput.setAttribute('min', '0')
    quantityinput.setAttribute('max', '10')
    divOptions.appendChild(quantityinput)


    // creation du p = price
    const paragPrice = document.createElement('p');
    paragPrice.setAttribute('class', 'card-text')
    var newPrice = data.price / 100;
    var textParagPrice = document.createTextNode("$" + newPrice)
    paragPrice.appendChild(textParagPrice);
    divOptions.appendChild(paragPrice)


    // fin des creation





    for (color of data.colors) { // boucle pour recuperer toutes les couleurs et les afficher dans la page produit 
      const containerOption = document.createElement('option');
      containerOption.setAttribute('id', `${color}`)
      containerOption.setAttribute('value', `${color}`)
      var textConainterOption = document.createTextNode(`${color}`)
      containerOption.appendChild(textConainterOption)
      selectContainer.appendChild(containerOption)
    }

    const ajoutPanier = document.getElementById('ajoutPanier');
    ajoutPanier.addEventListener("click", function (e) {
      e.preventDefault();
      console.log(document.getElementById('qcolor').value)
      // je crée mon produit 
      const product = new Product(data._id, data.name, data.imageUrl, data.price, data.description, document.getElementById('quantityUser').value, document.getElementById('qcolor').value);
      console.log(product)


      //je vérifie si mon local storage est vide
      if (localStorage.getItem("products") == null) {
        const productsArray = [product]; // si oui je crée un tableau  pour mettre mon product
        // ici je récupere tous les données sauf qu'ils sont en bloc
        // ducoup je dois les stringify pour pouvoir les utilisé 

        // ensuite ce tableau je le stringify c'est à dire je le mets sous forme string
        const productString = JSON.stringify(productsArray); // methode stringify
        // ensuite je crée une clé qui a comme valeur product en string
        localStorage.setItem("products", productString); // ici j'enregistre dans le localstorage 
        // clé products qui prends la cons productString

      } else {
        // si il existe déjà alors je parse produit

        const products = JSON.parse(localStorage.getItem("products"));

        // si le produit existe alors je le filtre pour voir l'id et changer la couleur
        const foundProducts = products.filter(item => item.id === product.id).filter(item => item.color === product.color);

        // ici je vérifie si le produit n'existe déjà 
        if (foundProducts.length > 0) {

          // fait moi une incrementation de quantity de 1 pour le product.id

          foundProducts[0].quantity++;


          console.log(foundProducts)


        } else {
          // sinon push le produit
          products.push(product);

        }

        // ici je rends products en string afin de re mettre les nouveaux données
        const productString = JSON.stringify(products);

        localStorage.setItem("products", productString);
      }
    });

    ajoutPanier.addEventListener('click', function () {

      setTimeout(function () {
        var basPage = document.getElementById('basPage');
        basPage.classList.remove("none");

        const divConfirm = document.createElement('div')
        divConfirm.setAttribute('id', 'confirmationMsg');

        const textConfirmation = document.createElement('h1');
        textConfirmation.setAttribute('class', 'textDeConfirmation')

        var textDeConfirmation = document.createTextNode('Votre produit a été ajouté');
        textConfirmation.appendChild(textDeConfirmation)

        divConfirm.appendChild(textConfirmation)
        basPage.appendChild(divConfirm)

        setTimeout(function () {
          var basPage = document.getElementById('basPage');
          basPage.classList.add("none");

        }, 1000)

      }, 100)

    })
  }
  )


class Product {
  constructor(id, name, imageUrl, price, description, quantity, color) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
    this.quantity = quantity;
    this.color = color;
  }
};