const tabsContentList = document.querySelector('.tabs-content__list');
const tabsControl = document.querySelector('.tabs-control');
const tabButtons = document.querySelectorAll('.tabs-control__button');
const btnLoad = document.querySelector('.tabs-content__btn-load');
let allProducts = [];
let currentCategory = 'coffee';
let isLoaded = false;

const isMobile = () => window.innerWidth <= 768;

function updateProducts() {
  const products = allProducts.filter((item) => item.category === currentCategory);
  const shouldLimit = isMobile() && !isLoaded;
  const visibleProducts = shouldLimit ? products.slice(0, 4) : products;
  renderProducts(visibleProducts);

  if (shouldLimit && products.length > 4) {
    btnLoad.classList.add('visible');
  } else {
    btnLoad.classList.remove('visible');
  }
}


tabsControl.addEventListener('click', (event) => {
  const button = event.target.closest('.tabs-control__button');
    if (!button || button.classList.contains('tabs-control__button--active')) {
    return;
  }

  tabButtons.forEach((btn) => btn.classList.remove('tabs-control__button--active'));
  button.classList.add('tabs-control__button--active');

  currentCategory = button.dataset.category;
  isLoaded = false;
  updateProducts();
});

btnLoad.addEventListener('click', () => {
  isLoaded = true;
  updateProducts();
});

window.addEventListener('resize', () => {
  updateProducts();
});

async function getProducts() {
  try {
    const response = await fetch('./src/data/data.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products = await response.json();
    allProducts = products;
    updateProducts();
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

function createItem(item){

    return`
     <li class="tabs-content__item">
          <div class="tabs-content__item-image-wrapper">
            <img src="./src/images/menu-page/${item.image}" alt="${item.name}" width="24" height="24" />
          </div>
          <div class="tabs-content__item-wrapper">
            <h3 class="tabs-content__item__text-wrapper__title">${item.name}</h3>
            <p class="tabs-content__item__text-wrapper__text">
              ${item.description}
            </p>
            <span class="tabs-content__item__text-wrapper__price">${item.price}</span>
          </div>
        </li>
    `
}

function renderProducts(products){
  tabsContentList.innerHTML = products.map(createItem).join('');
} 

getProducts();