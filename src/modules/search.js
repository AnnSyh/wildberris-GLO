const search = function () {

	const input = document.querySelector('.search-block > input');
	const searchBtn = document.querySelector('.search-block > button');


	try {
		searchBtn.addEventListener('click', (event) => {
			console.log('input.value = ', input.value)
		});

	} catch (e) {
		console.error(e.message)
	}

}

export default search