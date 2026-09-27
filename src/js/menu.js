const tabsContentList = document.querySelector('.tabs-content__list');

async function getProducts() {
  try {
    const response = await fetch('./src/data/data.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products = await response.json();
    renderProducts(products);
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