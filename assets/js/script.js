let apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2FmOGMwNTgzNTAwMTg1MjMwNzkiLCJpYXQiOjE3MDIzNzgyMzIsImV4cCI6MTcwMzU4NzgzMn0.YBL1RxOKjLMU5vayxaKJmf_Za6E_dcw8-vOyTAwOqio"

fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method : "GET",
    headers: {
        "Authorization": apiKey
    }
})
.then((response) => response.json())
.then((json) => console.log(json))

document.addEventListener("DOMContentLoaded", () => {
    let submitBtn = document.querySelector("#submit")
    submitBtn.addEventListener("click", addProduct);
})

function addProduct() {
    let nameProd = document.querySelector("#name").value
    let descriptionProd = document.querySelector("#description").value
    let brandProd = document.querySelector("#brand").value
    let imageProd = document.querySelector("#imageUrl").value
    let priceProd = document.querySelector("#price").value
    let obj = {
        name: `${nameProd}` ,
        description: `${descriptionProd}`,
        brand: `${brandProd}`,
        imageUrl: `${imageProd}`,
        price: `${priceProd}`

    }
    fetch("https://striveschool-api.herokuapp.com/api/product", {

        // Chiamata di tipo POST
        method: "POST", // Method della chiamata - Salvataggio di una risorsa
        body: JSON.stringify(obj), // nel body della richiesta invio il dato al server
        headers: {
          "Content-Type": "application/json", // il tipo del contenuto che sto inviando
          "Authorization": apiKey
        },
      })
      .then(response => response.json())
        .then(json => {
    console.log("Risposta del server alla chiamata POST:", json);
})
.catch(error => console.error("Errore durante la chiamata POST:", error));

}