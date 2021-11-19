
const cart = function () {

	const cartBtn = document.querySelector('.button-cart');
	const cart = document.getElementById('modal-cart');
	const modalClose = cart.querySelector('.modal-close');

	cartBtn.addEventListener('click', function () {
		cart.style.display = "flex"
	});
	modalClose.addEventListener('click', function () {
		cart.style.display = ""
	});
}

cart();
