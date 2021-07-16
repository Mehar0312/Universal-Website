let price = document.querySelectorAll('.price');
console.log(price);
let totalPrice = 0;
for(let i=0; i<price.length; i++) {
  intPrice = parseFloat(price[i].textContent);
  console.log(intPrice);
  totalPrice += intPrice;
}
totalPrice = parseFloat(totalPrice).toFixed(2);
document.querySelector('.total').textContent = '$' + totalPrice;
let tax = 0.10 * totalPrice;
tax = parseFloat(tax).toFixed(2);
document.querySelector('.tax').textContent = '$' + tax;
let amount = (totalPrice + (0.10 * totalPrice));
amount = parseFloat(amount).toFixed(2);
document.querySelector('.amount').textContent = '$' + amount;

// let remove = document.querySelectorAll('.remove');
// let dlt = document.querySelectorAll('.delete');
// let hr = document.querySelectorAll('.r-hr');
// for (let i=0; i<remove.length; i++) {
//   for (let j=0; j<dlt.length; j++) {
//     remove[i].addEventListener('click', function() {
//       dlt[j].style.display = 'none';
//       hr[j].style.display = 'none';
//     });
//   }
// }
