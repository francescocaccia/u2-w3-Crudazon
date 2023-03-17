const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MmUxMmY4MWI0MjAwMTM5YjI3ZGYiLCJpYXQiOjE2NzkwNDQxMTUsImV4cCI6MTY4MDI1MzcxNX0.GpFrU8_YYPPGoAlQVOJxnVlLRSmHjTLzVaccy2Sfyec";

const Url = "https://striveschool-api.herokuapp.com/api/product/";
const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get("id");

const endpoint = selectedId ? Url + selectedId : Url;
const method = selectedId ? "PUT" : "POST";

fetch(endpoint, {
  method,
  body: JSON.stringify(newProduct),
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

window.onload = () => {
  if (selectedId) {
    document.getElementById("titolo").innerText = "Modifica Prodotto";
    document.getElementById("edit").classList.remove("d-none");
    document.getElementById("delete").classList.remove("d-none");
    document.getElementById("create").classList.add("d-none");

    fetch(endpoint, {
      headers: {
        Authorization: `Bearer  ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        const { name, description, brand, imgUrl, price } = data;
        document.getElementById("name").value = name;
        document.getElementById("description").value = description;
        document.getElementById("brand").value = brand;
        document.getElementById("imgUrl").value = imgUrl;
        document.getElementById("price").value = price;
      })
      .catch(error => console.log(error));
  }
};

const gestisciSubmit = event => {
  const newProduct = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imgUrl: document.getElementById("imgUrl").value,
    price: document.getElementById("price").value,
  };
  fetch(endpoint, {
    method: method,
    body: JSON.stringify(newProduct),
    header: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).catch(error => console.log(error));
};

const cancellaProdotto = () => {
  const hasAccepted = confirm("Sei convinto di voler eliminare il prodotto?");
  if (hasAccepted) {
    fetch(endpoint, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .catch(error => console.log(error));
  }
};
