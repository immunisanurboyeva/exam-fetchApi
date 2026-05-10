const params = new URLSearchParams(window.location.search);
const idEl = params.get("id");
const list = document.querySelector('.list')
const API = `https://shop-co-backend-k5f0.onrender.com/api/products`;

console.log(idEl);

function render(arr, parent) {
parent.innerHTML = arr
    .map((element) => {
        if(element._id === idEl){
            return `
            <li>
                <a href="./details.html?id=${element._id}">
                    <h3 class="title">${element.title}</h3>
                    <img src="${element.images}" alt="" class="image">
                    <span class="price">${element.price}</span>
                </a>
            </li>
            `;
        }
    })
    .join("");
}


function getProductById() {
  fetch(API)
    .then(async (res) => await res.json())
    .then((data) => {
      render(data, list);
    });
}

getProductById()