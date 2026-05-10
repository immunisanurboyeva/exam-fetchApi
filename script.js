const productList = document.querySelector(".product-list");

const API = `https://shop-co-backend-k5f0.onrender.com/api/products`;

function get() {
  fetch(API)
    .then(async (res) => await res.json())
    .then((data) => {
      render(data, productList);
      console.log(data);
    });
}

// get();

function render(arr, parent) {
  parent.innerHTML = arr
    .map((element) => {
      return `
        <li>
            <a href="./details.html?id=${element._id}">
              <h3 class="title">${element.title}</h3>
              <img src="${element.images}" alt="" class="image">
              <span class="price">${element.price}</span>
            </a>
        </li>
        `;
    })
    .join("");
}

function click(e) {
  const clickEl = e.getUrlParams;
  console.log(clickEl);
}
// click();


// newww

const rangeInp = document.querySelector('input')
const text = document.querySelector('p')

rangeInp.addEventListener('input', function() {
    text.textContent = ''
    text.textContent = this.value
})