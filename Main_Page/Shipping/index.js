const addAddressModal = document.getElementById('add-modal');

const openAddressModal = document.querySelector('.add-new-address');

const backdrop = document.getElementById('backdrop');

const cancelAddAddressButton = addAddressModal.querySelector('button.btn--passive');

const addAddressButton = addAddressModal.querySelector('button.btn--success');

const userInputs = addAddressModal.querySelectorAll('.input');

const entryTextSection = document.getElementById('entry-text');

const deleteAddressModal = document.getElementById('delete-modal');

const shipping = document.getElementById('shipping');

const deleteIcon = document.querySelector('.delete-icon');

const submitButton = document.getElementById('submit-btn');

const success = document.getElementById('successful');

const shoppingButton = document.getElementById('continue-shopping-btn');

const address = [];

const toggleBackdrop = () => {
	backdrop.classList.toggle('visible');
};

const updateUI = () => {
	if (address.length === 0) {
		entryTextSection.style.display = 'block';
	} else {
		entryTextSection.style.display = 'none';
	}
};

const closeAddressDeletionModal = () => {
	toggleBackdrop();
	deleteAddressModal.classList.remove('visible');
};

const deleteAddressHandler = (addressId) => {
	let addressIndex = 0;
	for (const addr of address){
		if (addr.id === addressId){
			break;
		}
		addressIndex++;
	}
	address.splice(addressIndex, 1);
	const listRoot = document.getElementById('address-list');
	listRoot.children[addressIndex].remove();
	// listRoot.removeChild(listRoot.children[addressIndex]);
	closeAddressDeletionModal();
	updateUI();
};

const startDeleteAddressHandler = (addressId) => {
	deleteAddressModal.classList.add('visible');
	toggleBackdrop();

	const cancelDeletionButton = deleteAddressModal.querySelector('button.btn--passive');
	let confirmDeletionButton = deleteAddressModal.querySelector('button.btn--danger');

	confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

  confirmDeletionButton = deleteAddressModal.querySelector('button.btn--danger');
	// confirmDeletionButton.removeEventListener('click', deleteAddressHandler.bind(null, addressId));
	// will not work :(

	cancelDeletionButton.removeEventListener('click', closeAddressDeletionModal);

	cancelDeletionButton.addEventListener('click', closeAddressDeletionModal);
	confirmDeletionButton.addEventListener('click', deleteAddressHandler.bind(null, addressId));
};

const renderNewAddressElement = (id, firstName, lastName, email, mobile, country, pin, houseno, area, landmark, city, state) => {
	const newAddressElement = document.createElement('div');
	newAddressElement.className = 'address-element row';
	newAddressElement.innerHTML = `
    <div class="col-1" style="text-align: right;">
      <input type="radio" name="address-select" value="" checked>
    </div>
		<div class="address-element__info col-9">
			<h4>${firstName} ${lastName}</h4>
			<h6>${houseno}</h6>
      <h6>${area}</h6>
      <h6>${city}, ${state} ${pin}</h6>
      <h6>${country}</h6>
      <h6>${mobile}</h6>
		</div>
    <div class="col-2">
      <button class="edit-btn btn btn-outline-info" type="button" name="button">Edit</button>
      <a class="delete-icon"><i class="fas fa-trash"></i></a>
    </div>
	`;
	newAddressElement.addEventListener('click', startDeleteAddressHandler.bind(null, id));
	const listRoot = document.getElementById('address-list');
	listRoot.append(newAddressElement);
};

const closeAddressModal = () => {
	addAddressModal.classList.remove('visible');
};

const showAddressModal = () => {	//function toggleAddressModal(){}
	addAddressModal.classList.add('visible');
	toggleBackdrop();
};

const clearAddressInput = () => {
	// userInputs[0].value = '';
	// userInputs[1].value = '';
	// userInputs[2].value = '';
	for (const userInput of userInputs) {
		userInput.value = '';
	}
};

const cancelAddAddressHandler = () => {
	closeAddressModal();
	toggleBackdrop();
	clearAddressInput();
};

const submitButtonHandler = () => {
	success.classList.add('visible');
	toggleBackdrop();
	// backdrop.classList.add('visible');
	backdrop.addEventListener('click', function() {
		backdrop.classList.remove('visible');
		success.classList.remove('visible');
	});
	// shoppingButton.addEventListener('click', function() {
	// 	document.querySelector('#continue-shopping-btn').setAttribute('href', '../index.html');
	// });
};

const addAddressHandler = () => {
	const firstName = userInputs[0].value;
	const lastName = userInputs[1].value;
	const email = userInputs[2].value;
  const mobile = userInputs[3].value;
  const pin = userInputs[4].value;
  const houseno = userInputs[5].value;
  const area = userInputs[6].value;
  const landmark = userInputs[7].value;
  const city = userInputs[8].value;
  const state = userInputs[9].value;
  const country = userInputs[10].value;

	if (firstName.trim() === '' ||
		lastName.trim() === '' ||
		email.trim() === '' ||
    mobile.trim() === '' ||
    country.trim() === '' ||
    pin.trim() === '' ||
    houseno.trim() === '' ||
    area.trim() === '' ||
    landmark.trim() === '' ||
    city.trim() === '' ||
    state.trim() === ''
	) {
		alert('Please enter valid input!');
		return;
	}

	const newAddress = {
		id: Math.random.toString(),
		firstName: firstName,
		lastName: lastName,
		email: email,
    mobile: mobile,
    country: country,
    pin: pin,
    houseno: houseno,
    area: area,
    landmark: landmark,
    city: city,
    state: state
	};

	address.push(newAddress);
	console.log(address);
	closeAddressModal();
	toggleBackdrop();
	clearAddressInput();
	renderNewAddressElement(
    newAddress.id,
    newAddress.firstName,
    newAddress.lastName,
    newAddress.email,
    newAddress.mobile,
    newAddress.country,
    newAddress.pin,
    newAddress.houseno,
    newAddress.area,
    newAddress.landmark,
    newAddress.city,
    newAddress.state
  );
	updateUI();
};

const backdropClickHandler = () => {
	closeAddressModal();
	closeAddressDeletionModal();
	// clearAddressInput();  // He has done it to delete the input when backdrop is clicked, which you didn't want to execute.
	// You wanted this feature.
};

openAddressModal.addEventListener('click', showAddressModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddAddressButton.addEventListener('click', cancelAddAddressHandler);
addAddressButton.addEventListener('click', addAddressHandler);
submitButton.addEventListener('click', submitButtonHandler);
