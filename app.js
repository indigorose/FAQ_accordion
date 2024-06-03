var acc = document.getElementsByClassName('accordion');
var plus = document.getElementsByClassName('plus');
var minus = document.getElementsByClassName('minus');
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
// TODO run test - not sure if host ready
