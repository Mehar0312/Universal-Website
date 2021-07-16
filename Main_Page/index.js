// When the user scrolls down 7px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 175 || document.documentElement.scrollTop > 175) {
    document.getElementById("fixed").style.top = "0";
  } else {
    document.getElementById("fixed").style.top = "-70px";
  }
}

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

const addModal = document.getElementById('myModal');
const userInput1 = addModal.querySelector('.inputs1');
const userInput2 = addModal.querySelector('.inputs2');
const submitButton = addModal.querySelector('.submit');
const names = [];

const renderName = (name, firstName) => {
  const showName = document.createElement('div');
  showName.className = 'col';
  showName.innerHTML = `
    <p>Hello ${name || firstName}</p>
  `;
  const displayName = document.getElementById('display-name');
  displayName.append(showName);
};

submitButton.addEventListener('click', function() {
  console.log('ji');
  const name = userInput1.value;
  const firstName = userInput2.value;
  const showName = {
    name: name,
    firstName: firstName
  };
  names.push(showName);
  renderName(showName.name, showName.firstName);
});
