praha1 = document.getElementById('praha1');
praha2 = document.getElementById('praha2');
ostrava1 = document.getElementById('ostrava1');
brno1 = document.getElementById('brno1');
brno2 = document.getElementById('brno2');



function togglePraha() {
	praha1.classList.toggle('show-the-row');
	praha2.classList.toggle('show-the-row');
}

function toggleOstrava() {
	ostrava1.classList.toggle('show-the-row');	
}

function toggleBrno() {
	brno1.classList.toggle('show-the-row');	
	brno2.classList.toggle('show-the-row');	
}

function toggleAllCities() {
	if ( praha1.classList.contains('show-the-row') && praha2.classList.contains('show-the-row') &&
			ostrava1.classList.contains('show-the-row') && brno1.classList.contains('show-the-row') &&
			brno2.classList.contains('show-the-row') )	{
		praha1.classList.remove('show-the-row');
		praha2.classList.remove('show-the-row');
		ostrava1.classList.remove('show-the-row');
		brno1.classList.remove('show-the-row');	
		brno2.classList.remove('show-the-row');

	}
	else {
		praha1.classList.add('show-the-row');
		praha2.classList.add('show-the-row');
		ostrava1.classList.add('show-the-row');
		brno1.classList.add('show-the-row');	
		brno2.classList.add('show-the-row');
	}
}