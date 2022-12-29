const popupLinks = document.querySelectorAll('.popup-link');
const popupCloseIcon = document.querySelectorAll('.close-popup');
const body = document.body;
const popupActive = document.querySelector('.popup.open');

popupLinks.forEach(popupLink => {
	popupLink.addEventListener('click', function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const currentPopup = document.getElementById(popupName);
			popupOpen(currentPopup);
			e.preventDefault();
		});
});

popupCloseIcon.forEach(el => {
	el.addEventListener('click', function (e) {
		popupClose(el.closest('.popup'));
		e.preventDefault();
	});
});

function popupOpen(currentPopup) {
		if (popupActive) {
			popupClose(popupActive);
		}
		currentPopup.classList.add('open');
		body.classList.add('lock');
		currentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
			
		});
	//}
	
}

function popupClose(popupActive) {
	popupActive.classList.remove('open');
	body.classList.remove('lock');
}

document.addEventListener('keydown', function (e) {
	if (e.code == 'Escape') {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});