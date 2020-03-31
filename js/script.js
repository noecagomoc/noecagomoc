/* PRELOADER GIF */
$(window).on("load", function() {

	$(".loader .inner").fadeOut(600, function() {
		$(".loader").fadeOut(750);

	});

	/*ISOTOPE PLUGIN*/
	$(".items").isotope({
		filter: '*',
		animationOptions: {
		duration: 1500,
		easing: 'linear',
		queue: false

		}
	});

});






$(document).ready(function() {

	/* initialization of data aos */
	$(function() {
  	AOS.init();
	});


	/* slides animation and slide transition happens here */
	$('#slides').superslides({
		animation: 'fade',
		play: 4500,
		pagination: false,
	});

	/*calling the typed js script*/
	var typed = new Typed(".typed", {
		strings: ["Computer Engineer.", "Web Developer.", "Student."],
		typeSpeed: 80,	
		loop: true,
		startDelay: 1000,
		showCursor: false,
	});

	/* owl carousel responsible for the stats design movement */
	$('.owl-carousel').owlCarousel({
	    loop: true,
	    items: 4,
	    autoplay:true,
        autoplaySpeed: 500,
	    
	    /* items value shows how many carousel item will be shown within a specific resolution */
	    responsive:{
	        0:{
	            items:1,

	        },
	        480:{
	            items:2,
	        },
	        768:{
	            items:3,
	        },
	        938:{
	        	items:3,
	        },
	        1080:{
	        	items:4,
	        }
	    }
	});


	/* jquery object to fix the animation transition when scrolling to the skills section */
		var skillsTopOffset = $(".skillsSection").offset().top;
		
	/* STATS ON SCROLL ANIMATION */
		var statsTopOffset = $(".statsSection").offset().top;
		var countUpFinished = false;

		$(window).scroll(function() {

	/* code for the computation of when the animation to start in scrolling the website */
			if(window.pageYOffset > skillsTopOffset - $(window).height() +200) {
					$('.chart').easyPieChart({
		            easing: 'easeInOut',
		            barColor: '#fff',
		            trackColor: false,
		            scaleColor: false,
		            lineWidth: 4,
		            size: 152,

		            /* this makes the number in skills stats move from 1 to specified number */
		            onStep: function(from, to, percent){
		            	$(this.el).find('.percent').text(Math.round(percent));
		            }
        		});
			}

			/* STATS ON SCROLL ANIMATION */
			if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() +200) {
					$(".counter").each(function() {
					var element = $(this);
					var endVal = parseInt(element.text());

					element.countup(endVal);
				})

					countUpFinished = true;
			}

		});

		/* FANCY BOX */

		$("[data-fancybox]").fancybox();

		/* FILTER FUNCTION ON PORTFOLIO */
		$("#filters a").click(function() {

			$("#filters .current").removeClass("current");
			$(this).addClass("current");

			var selector = $(this).attr("data-filter");

			$(".items").isotope({
					filter: selector,
					animationOptions: {
						duration: 1500,
						easing: 'linear',
						queue: false

					}

				});

				return false;

		});

		/* SLIDING ANIMATION ONCLICK this prevents the instant jump on specific page when clicked */
		$("#navigation li a").click(function(e){
			e.preventDefault();

			var targetElement = $(this).attr("href");
			var targetPosition = $(targetElement).offset().top;
			$("html, body").animate({ scrollTop: targetPosition - 50}, "slow");

		});



		/* CONSTANT VARIABLE FOR STICK NAVBAR */
		const nav = $("#navigation");
		const navTop = nav.offset().top;

		$(window).on("scroll", stickyNavigation);

		function stickyNavigation() {


			var body = $("body");

			if($(window).scrollTop() >= navTop){
				body.css("padding-top", nav.outerHeight() + "px");
				body.addClass("fixedNav");

		}
			else {
				body.css("padding-top", 0);
				body.removeClass("fixedNav");	
		}
	}


	$(window).scroll(function() { // Says this function is preformed continuisly while scrolling.
		    var Scroll = $(window).scrollTop() + 200, // This variable finds the distance you have scrolled from the top.
						slidesSectionOffset = $('#slides').offset().top,
						aboutSectionOffset = $('#about').offset().top, // This variable finds the distance between #section-one and the top. Replace #section-one with the ID of your section.
						skillsSectionOffset = $('#skills').offset().top;
						statsSectionOffset = $('#stats').offset().top;
						contactSectionOffset = $('#contact').offset().top;
						portfolioSectionOffset = $('#portfolio').offset().top; // This variable finds the distance between #section-two and the top. Replace #section-two with the ID of your section. You can duplicate this for as many sections as you want.

		    if (Scroll >= slidesSectionOffset) { // If you have scrolled past section one do this.
		        $(".nav-item1").addClass("current-menu-item"); // Adds class of current-menu-item to the menu item with a class of menu-item-1
		    } else { // If you have not scrolled section one do this.
		        $(".nav-item1").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
		    }

		    if (Scroll >= aboutSectionOffset) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
		        $(".nav-item2").addClass("current-menu-item"); // Adds class of current-menu-item to the menu item with a class of menu-item-2
						$(".nav-item1").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
		    } else { // If you have not scrolled section two do this.
		        $(".nav-item2").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-2
		    }

				if (Scroll >= skillsSectionOffset) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
		        $(".nav-item3").addClass("current-menu-item"); // Adds class of current-menu-item to the menu item with a class of menu-item-2
						$(".nav-item2").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
		    } else { // If you have not scrolled section two do this.
		        $(".nav-item3").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-2
		    }

		    if (Scroll >= statsSectionOffset) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
		        $(".nav-item4").addClass("current-menu-item"); // Adds class of current-menu-item to the menu item with a class of menu-item-2
						$(".nav-item3").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
		    } else { // If you have not scrolled section two do this.
		        $(".nav-item4").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-2
		    }

		     if (Scroll >= contactSectionOffset) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
		        $(".nav-item5").addClass("current-menu-item"); // Adds class of current-menu-item to the menu item with a class of menu-item-2
						$(".nav-item4").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
		    } else { // If you have not scrolled section two do this.
		        $(".nav-item5").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-2
		    }
		   
		    if (Scroll >= portfolioSectionOffset) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
		        $(".nav-item6").addClass("current-menu-item"); // Adds class of current-menu-item to the menu item with a class of menu-item-2
						$(".nav-item5").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
		    } else { // If you have not scrolled section two do this.
		        $(".nav-item6").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-2
		    }





	});

});



