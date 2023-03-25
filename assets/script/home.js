const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MmUxMmY4MWI0MjAwMTM5YjI3ZGYiLCJpYXQiOjE2NzkwNDQxMTUsImV4cCI6MTY4MDI1MzcxNX0.GpFrU8_YYPPGoAlQVOJxnVlLRSmHjTLzVaccy2Sfyec";

const Url = "https://striveschool-api.herokuapp.com/api/product/";

window.onload = () => {
  fetch(Url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MmUxMmY4MWI0MjAwMTM5YjI3ZGYiLCJpYXQiOjE2Nzk3NTY4MDEsImV4cCI6MTY4MDk2NjQwMX0.OusZNWHs37v-Zr_hda0h81yu-UkGAsUNJ_w3iE7Dhj4",
    },
  })
    .then(res => res.json())
    .then(data => {
      const content = document.getElementById("contenuto");
      content.innerHTML = "";
      data.forEach(product => {
        content.innerHTML += `
        <div id="contenuto" class="row pt-3 row-cols-1 row-cols-md-2 row-cols-lg-4 row-gap-4">
        <div class="col">
        <div class="card">
          <img style="object-fit: cover" src="${product.imageUrl}" class="card-img-top img-fluid" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">
            ${product.description}
            </p>
            <div class="d-flex justify-content-center gap-2">
              <a href="detail.html?id=${product._id}" class="btn btn-primary">Scopri di più</a>
              <a href="backoffice.html?id=${product._id}" class="btn btn-warning">Modifica</a>
            </div>
          </div>
        </div>
        </div>
      </div>`;
      });
    })
    .catch(error => console.log(error));
};
