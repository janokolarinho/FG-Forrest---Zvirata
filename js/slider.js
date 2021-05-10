function changeImage(id) { // bude id parametr
	var slider = document.getElementById("slider");
	// slider.style.backgroundImage = 'url(../img/zebra_big_tmp.jpeg)';

	slider.classList.add("slide1");



	switch (id) {
		case "switcher-box-one":

			if (slider.classList.contains("slide2")) {
				slider.classList.remove("slide2");
			}

			if (slider.classList.contains("slide3")) {
				slider.classList.remove("slide3");
			}

			slider.classList.add("slide1");	
			break;
		case "switcher-box-two":

			if (slider.classList.contains("slide1")) {
				slider.classList.remove("slide1");
			}

			if (slider.classList.contains("slide3")) {
				slider.classList.remove("slide3");
			}

			slider.classList.add("slide2");	
			break;		

		case "switcher-box-three":

			if (slider.classList.contains("slide1")) {
				slider.classList.remove("slide1");
			}

			if (slider.classList.contains("slide2")) {
				slider.classList.remove("slide2");
			}

			slider.classList.add("slide3");	
			break;		
	}	

	// pridat dalsi dva casy



}

function hasOver(id) {
	var switcher1 = document.getElementById("switcher-box-one");
	var switcher2 = document.getElementById("switcher-box-two");
	var switcher3 = document.getElementById("switcher-box-three");

	if ( id != switcher1) {
		switcher1.classList.remove("over1");
	}

	if ( id != switcher2) {
		switcher2.classList.remove("over2");
	}

	if ( id != switcher3) {
		switcher3.classList.remove("over3");
	}

	switch (id) {
		case "switcher-box-one":
			switcher1.classList.add("over1");
			break;
		case "switcher-box-two":
			switcher2.classList.add("over2");
			break;
		case "switcher-box-three":
			switcher3.classList.add("over3");
			break;
	}
}
