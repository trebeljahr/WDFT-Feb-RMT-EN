// ITERATION 1

function updateSubtotal(product) {
  console.log('This is the product in updateSubtotal', product);
  // console.log('Calculating subtotal, yey!');
  const priceElement = product.querySelector('.price span');
  // console.log(priceElement);
  const price = Number(priceElement.innerText);

  const quantityElement = product.querySelector('.quantity input');
  // console.log(quantityElement);
  // console.log(quantityElement.value);
  const quantity = Number(quantityElement.value);
  const subtotal = price * quantity;

  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerText = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  const products = document.querySelectorAll('.product');
  const productsArray = [...products];

  let total = 0;
  productsArray.forEach((product) => {
    total += updateSubtotal(product);
  });

  // ITERATION 3
  const totalElement = document.querySelector('#total-value span');
  totalElement.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productWeWantToRemove = target.parentNode.parentNode;
  productWeWantToRemove.parentNode.removeChild(productWeWantToRemove);
  console.log(target.parentNode.parentNode);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log('Creating a product');
  const nameElement = document.querySelector(
    '.create-product input[type="text"]'
  );
  const priceElement = document.querySelector(
    '.create-product input[type="number"]'
  );

  const newTableRow = document.createElement('tr');
  newTableRow.className = 'product';
  const htmlStringOfProduct = `
  <td class="name">
    <span>${nameElement.value}</span>
  </td>
  <td class="price">$<span>${priceElement.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
        `;
  newTableRow.innerHTML = htmlStringOfProduct;

  const removeButton = newTableRow.querySelector('button');
  removeButton.addEventListener('click', removeProduct);

  const tableBodyElement = document.querySelector('tbody');
  tableBodyElement.appendChild(newTableRow);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
  //... your code goes here

  const removeButtons = document.querySelectorAll('.product button');
  const removeButtonsArray = [...removeButtons];
  removeButtonsArray.forEach((removeButton) => {
    removeButton.addEventListener('click', removeProduct);
  });
});
