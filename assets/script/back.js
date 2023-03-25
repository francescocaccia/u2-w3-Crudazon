const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MmUxMmY4MWI0MjAwMTM5YjI3ZGYiLCJpYXQiOjE2NzkwNjA2MDEsImV4cCI6MTY4MDI3MDIwMX0.0N4lvm_9ze56ENmkWVaHRrC-5F0JvIKIRlsuEFNFuys";

const Url = "https://striveschool-api.herokuapp.com/api/product/";
const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get("id");

const endpoint = selectedId ? Url + selectedId : Url;
const method = selectedId ? "PUT" : "POST";

window.onload = () => {
  if (selectedId) {
    document.getElementById("titolo").innerText = "Modifica Prodotto";
    document.getElementById("edit").classList.remove("d-none");
    document.getElementById("delete").classList.remove("d-none");
    document.getElementById("create").classList.add("d-none");

    fetch(endpoint, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MmUxMmY4MWI0MjAwMTM5YjI3ZGYiLCJpYXQiOjE2Nzk3NTY4MDEsImV4cCI6MTY4MDk2NjQwMX0.OusZNWHs37v-Zr_hda0h81yu-UkGAsUNJ_w3iE7Dhj4",
      },
    })
      .then(res => res.json())
      .then(data => {
        const { name, description, brand, imageUrl, price } = data;
        document.getElementById("name").value = name;
        document.getElementById("description").value = description;
        document.getElementById("brand").value = brand;
        document.getElementById("imgUrl").value = imageUrl;
        document.getElementById("price").value = price;
      })
      .catch(error => console.log(error));
  }
};

const gestisciSubmit = event => {
  event.preventDefault();
  const newProduct = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageUrl: document.getElementById("imgUrl").value,
    price: document.getElementById("price").value,
  };
  fetch(endpoint, {
    method,
    body: JSON.stringify(newProduct),
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MmUxMmY4MWI0MjAwMTM5YjI3ZGYiLCJpYXQiOjE2Nzk3NTY4MDEsImV4cCI6MTY4MDk2NjQwMX0.OusZNWHs37v-Zr_hda0h81yu-UkGAsUNJ_w3iE7Dhj4",
    }),
  }).catch(error => console.log(error));
  window.location.replace("/home.html");
};

const cancellaProdotto = () => {
  const hasAccepted = confirm("Sei sicuro di voler eliminare il prodotto?");
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
