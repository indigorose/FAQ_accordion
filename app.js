var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function () {
		this.classList.toggle('active');

		var card = this.nextElementSibling;
		var plus = this.querySelector('.plus');
		var minus = this.querySelector('.minus');

		if (card.style.display === 'block') {
			card.style.display = 'none';
			plus.style.display = 'block';
			minus.style.display = 'none';
		} else {
			card.style.display = 'block';
			plus.style.display = 'none';
			minus.style.display = 'block';
		}
	});
}
// TODO run test - not sure if host ready
