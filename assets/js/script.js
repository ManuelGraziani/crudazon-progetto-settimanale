fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method : "GET",
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2FmOGMwNTgzNTAwMTg1MjMwNzkiLCJpYXQiOjE3MDIzNzgyMzIsImV4cCI6MTcwMzU4NzgzMn0.YBL1RxOKjLMU5vayxaKJmf_Za6E_dcw8-vOyTAwOqio"
    }
})
.then((response) => response.json())
.then((obj) => console.log(obj))