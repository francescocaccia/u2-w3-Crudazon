const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MmUxMmY4MWI0MjAwMTM5YjI3ZGYiLCJpYXQiOjE2NzkwNDQxMTUsImV4cCI6MTY4MDI1MzcxNX0.GpFrU8_YYPPGoAlQVOJxnVlLRSmHjTLzVaccy2Sfyec";

const Url = "https://striveschool-api.herokuapp.com/api/product/";
const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get("id");

const endpoint = selectedId ? Url + selectedId : Url;

window.onload = () => {
  fetch(endpoint, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MmUxMmY4MWI0MjAwMTM5YjI3ZGYiLCJpYXQiOjE2Nzk3NTY4MDEsImV4cCI6MTY4MDk2NjQwMX0.OusZNWHs37v-Zr_hda0h81yu-UkGAsUNJ_w3iE7Dhj4",
    },
  })
    .then(res => res.json())
    .then(data => {})
    .catch(error => console.log(error));
};
