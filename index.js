// jQuery

(function($) {
	$.fn.extend({
		jParallax: function(opt) {
			var defaults = { moveFactor: 5, targetContainer: 'body' },
				o = $.extend(defaults, opt);
			return this.each(function() {
				var background = $(this);
				$(o.targetContainer).on('mousemove', function(e){
					mouseX = e.pageX;
					mouseY = e.pageY;
					windowWidth = $(window).width();
					windowHeight = $(window).height();
					percentX = (0-((mouseX/windowWidth)*o.moveFactor) - (o.moveFactor/2)+o.moveFactor)/2;
					percentY = (0-((mouseY/windowHeight)*o.moveFactor) - (o.moveFactor/2)+o.moveFactor)/2;
					background[0].style.transform = "translate("+percentX+"%,"+percentY+"%)";
				});
			});
		}					
	});
}(jQuery));


$(".landImg").jParallax({ moveFactor: -3, targetContainer: ".landingPage" });


// end of jQuery

var togglebtn = document.querySelector('.toggle-btn');
function myFunction(x) {
    x.classList.toggle('change');
    document.getElementById('sidebar').classList.toggle('active');
}


var lastKnownScrollPosition = 0;
let ticking = false;

function doSomething() {

    if (!sidebar.classList.contains('active')) {
        if (lastKnownScrollPosition >= 200) {
            document.querySelector('.header').classList.add('active');
        } else {
            document.querySelector('.header').classList.remove('active');
        }
    }
}

document.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;
  
    if (!ticking) {
      window.requestAnimationFrame(function() {
        doSomething(lastKnownScrollPosition);
        ticking = false;
      });
  
      ticking = true;
    }
});