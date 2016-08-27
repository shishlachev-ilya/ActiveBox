$(function(){
   
	/* подключение анимации */
    new WOW().init();
    
	/* анимация в блоке works */
    $('.link img').hover(function(e){
        $(this).animate({ marginLeft:'-50px', marginTop:'-50px', height:'400px'}, 500);
    }, function(e){
        $(this).animate({ marginLeft:'0', marginTop:'0', height:'350px'}, 500);
    });
	
	/* анимированная навигация */
    $(window).scroll(function() {
		if ($(this).scrollTop() > 1){
			$('.navigation').addClass("scroll");
		}
		else{
			$('.navigation').removeClass("scroll");
		}
	});
	
	/* плавный скрол */
	$(".navigation").on("click","a", function (event) {

		event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

    });
	
	
	/* горизонтальное меню */
	function menu() {

        var trig = $('.trigger-js'),
            menu = $('.menu-js');

        trig.click(function() {
            $(this).next(menu).slideToggle();
        });

        $(window).resize(function() {

            if ($(window).width() > 732) {
                menu.removeAttr('style');
            }
        });
    }
    menu();
	
	$('.menu-js li a').click(function(){
		if ($(window).width() < 992) {
            $('.menu-js').hide();
        }else{
			$('.menu-js').show();
		}
	});
	
});


	