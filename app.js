var acc = document.getElementsByClassName('accordion');
var i;
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function () {
		this.classList.toggle('active');

		var card = this.nextElementSibling;
		if (card.style.display === 'block') {
			card.style.display = 'none';
		} else {
			card.style.display = 'block';
		}
	});
}
