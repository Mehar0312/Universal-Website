// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 175 || document.documentElement.scrollTop > 175) {
    document.getElementById("fixed").style.top = "0";
  } else {
    document.getElementById("fixed").style.top = "-70px";
  }
}

const searchBtn = document.querySelector('#universal .search-btn');
if (screen.width < '900px') {
  searchBtn.innerHTML = '<button class="btn btn-outline-success btn-outline-dark my-2 my-sm-0 search-btn" type="submit"><i class="fas fa-search"></i></button>'
}

// $('#recipeCarousel').carousel({
//   interval: 10000
// })
// $('.carousel .carousel-item').each(function(){
//     var minPerSlide = 3;
//     var next = $(this).next();
//     if (!next.length) {
//     next = $(this).siblings(':first');
//     }
//     next.children(':first-child').clone().appendTo($(this));
//
//     for (var i=0;i<minPerSlide;i++) {
//         next=next.next();
//         if (!next.length) {
//         	next = $(this).siblings(':first');
//       	}
//
//         next.children(':first-child').clone().appendTo($(this));
//       }
// });

//sign up
$(window, document, undefined).ready(function() {

  $('.input').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });

  });


$('#tab1').on('click' , function(){
    $('#tab1').addClass('login-shadow');
   $('#tab2').removeClass('signup-shadow');
});

$('#tab2').on('click' , function(){
    $('#tab2').addClass('signup-shadow');
   $('#tab1').removeClass('login-shadow');


});
