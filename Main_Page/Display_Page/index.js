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

let addToCartBtn = document.querySelectorAll('.add-to-cart-btn');
// console.log(addToCartBtn);
let cartNo = document.querySelector('.anchor-no');
let val = parseInt('1');

for (let i=0; i<addToCartBtn.length; i++) {
  addToCartBtn[i].addEventListener('click', function() {
    val = val + 1;
    document.querySelector('.anchor-no').textContent = val;
  });
}
