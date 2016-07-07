$(function(){
    $(window).scroll(function() {
    $('.mov').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+800) {
        $(this).addClass('tada');
      }
    });
  });
    
    
    
    $('.link img').hover(function(e){
        $(this).animate({ marginLeft:'-50px', marginTop:'-50px', height:'400px'}, 500);
    }, function(e){
        $(this).animate({ marginLeft:'0', marginTop:'0', height:'350px'}, 500);
    });
    
});
