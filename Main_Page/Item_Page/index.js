var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

  });
}

let check = document.querySelector('.check-btn');
let pin = document.querySelector('.pin');

check.addEventListener('click', function() {
  let inputPIN = pin.value;
  if(inputPIN.length < 6) {
    document.querySelector('.show-msg').textContent = 'Please enter a valid PIN!';
    document.querySelector('.show-msg').style.margin = '5px 0 0 13px';
    document.querySelector('.show-msg').style.color = 'red';
  } else {
    document.querySelector('.show-msg').textContent = 'Deliverable';
    document.querySelector('.show-msg').style.margin = '5px 0 0 13px';
    document.querySelector('.show-msg').style.color = 'lightgreen';
  }
});

let addToCartBtn = document.querySelector('.add-to-cart-btn');
let cartNo = document.querySelector('.anchor-no');
let val = parseInt('0');

addToCartBtn.addEventListener('click', function() {
  val = val + 1;
  document.querySelector('.anchor-no').textContent = val;
})
