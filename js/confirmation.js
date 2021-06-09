function reponseConfirmation(){
var reponse = localStorage.getItem("reponse")
var orderRef = document.getElementById("orderRef")
var orderRefText = document.createTextNode(reponse)
orderRef.appendChild(orderRefText);
}
reponseConfirmation();