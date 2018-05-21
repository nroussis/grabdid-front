$(document).ready(function(){
var nameList = $(".stores__item-name");

document.addEventListener("click", function(e){
	//The alphabet item soring function

	if (e.target.parentNode.id === 'alpha'){
		$(".alpha__filter--checked").removeClass("alpha__filter--checked");
		e.target.classList.add("alpha__filter--checked");
		var filter = e.target.textContent;
		nameList.each(function(index,el){
			el.parentNode.parentNode.parentNode.style.display = 'none';
			if (filter === "ALL") {
				el.parentNode.parentNode.parentNode.style.display = 'block';
			} else if (filter === "0-9") {
				for (var i = 0; i < 10; i++) {
					if (el.textContent[0] === ('' + i)) {
						el.parentNode.parentNode.parentNode.style.display = 'block';
					}
				}
			} else {
				var c = filter.toLowerCase();
				var literal = $(".liter_" + c);
				// Array.prototype.slice.call(literal);
				literal.each(function(index,el){el.style.display = 'block';});
			}
		});
	}

	//The shipping sorting function -- cosmetic only
	else if (e.target.parentNode.parentNode.id === 'shipping-filter'){
		e.preventDefault();
		var val = document.querySelector(".sorting-shipping__value");
		var alpha = document.querySelector(".alpha");

		if (e.target.textContent === 'Greece') {
			val.classList.add('sorting-shipping__value--greece');
			val.classList.remove('sorting-shipping__value--cyprus');
			val.classList.remove('sorting-shipping__value--ww');
			alpha.classList.add('alpha--greece');
			alpha.classList.remove('alpha--cyprus');
			alpha.classList.remove('alpha--ww');
		} else if (e.target.textContent === 'Cyprus') {
			val.classList.remove('sorting-shipping__value--greece');
			val.classList.add('sorting-shipping__value--cyprus');
			val.classList.remove('sorting-shipping__value--ww');
			alpha.classList.remove('alpha--greece');
			alpha.classList.add('alpha--cyprus');
			alpha.classList.remove('alpha--ww');
		} else {
			val.classList.remove('sorting-shipping__value--greece');
			val.classList.remove('sorting-shipping__value--cyprus');
			val.classList.add('sorting-shipping__value--ww');
			alpha.classList.remove('alpha--greece');
			alpha.classList.remove('alpha--cyprus');
			alpha.classList.add('alpha--ww');
		}
		val.textContent = e.target.textContent;
		$(".allstores__inner-item-wrapper--checked").removeClass("allstores__inner-item-wrapper--checked");
		e.target.parentNode.classList.add("allstores__inner-item-wrapper--checked");
	}
});
});