const bookDetails = document.getElementById('book-details');
const title = bookDetails.querySelector('.title').textContent;
const author = bookDetails.querySelector('.author').textContent;
const publications = bookDetails.querySelector('.publications').textContent;
const price = bookDetails.querySelector('.price').textContent;
const image = bookDetails.querySelector('.book').getAttribute('src');

const addtoCartBtn = bookDetails.querySelector('.add-to-cart-btn');

myBooksList.details = [];

function addToCart(title, author, publications, price, image) {
  const sendDetails = {
    title: title,
    author: author,
    publications: publications,
    price: price,
    image: image
  };
  myBooksList.details.push(sendDetails);
  console.log(myBooksList.details);
  console.log(myBooksList);
}

addtoCartBtn.addEventListener('click', addToCart.bind(null, title, author, publications, price, image));
