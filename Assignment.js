$(document).ready(function(){
	$('body').on('click', '.color-name' ,function() {
		var selectedColor = $(this).find('.color').text();
		console.log(selectedColor);
		$('#selected-color').text(selectedColor);
	});

	let lastScroll = 0;
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		var headerHeight = $('#header').outerHeight();
		if(scroll > headerHeight) {
			if (scroll > lastScroll) {
				$("#header").removeClass('fixed topreached');
			} else if (scroll < lastScroll) {
				$("#header").addClass('fixed');
				if($(window).scrollTop() == 0) {
					$('#header').addClass('topreached').removeClass('fixed');
				}
			}
		}
		lastScroll = scroll;
	});
});

$.ajax({
	url:'https://mocki.io/v1/480f7637-55c0-4350-a0e9-cc749e1da78c',
	success: function (data) {
		console.log(data);
		var x = data.chalhoub.nav;
		for (const item in x) {
			$('ul.navingation').append('<li><a href="#">' + x[item] + '</a></li>')
		}
		
		var sizes = data.chalhoub.sizes;
		for (const size in sizes) {
			$('#size-swatches').append('<a class="size" href="#">'+sizes[size]+'</a>');
		}
		
		var images = data.chalhoub.images;
		for (const img in images) {
			$('#recommended-products').append('<div class="recommandation-product"><a><img src="'+images[img]+ '"/></a></div>');
		}
		var product = data.chalhoub.product;
		$('#product-name').append(product.productname);
		$('#product-description').append(product.despcription);
	},
	error: function () {
		console.log("Error");
	},
});
