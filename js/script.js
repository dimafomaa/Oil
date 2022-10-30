$(document).ready(function(){
	$('.slider').slick({
		slidesToShow:1,
		autoplay:true,
		pauseOnFocus:false,
		pauseOnHover:false,
		draggable:false
	});

	$('.slider__inner').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		slidesToScroll:3,
		draggable:false	,
		responsive:[
			{
				breakpoint: 1020,
				settings: {
					slidesToShow:2,
					slidesToScroll:2
				}
			},{
				breakpoint: 768,
				settings: {
					slidesToShow:1,
					slidesToScroll:1
			}
			
		}]
	});

	$('.oil__inner').slick({
		arrows:false,
		dots:false,
		slidesToShow:4,
		slidesToScroll:4,
		draggable:false	,
		responsive:[
			{
				breakpoint: 1370,
				settings: {
					slidesToShow:3,
					slidesToScroll:3,
					arrows:true,
					dots:true
				}
			},{
				breakpoint: 1025,
				settings: {
					slidesToShow:2,
					slidesToScroll:2,
					arrows:true,
					dots:true
				}
			},{
				breakpoint: 768,
				settings: {
					slidesToShow:1,
					slidesToScroll:1,
					arrows:false,
					dots:true
			}
			
		}]
	});

	$('.header__burger').click(function(event){
		$('.header__burger,.menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});