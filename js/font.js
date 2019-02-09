jQuery(document).ready(function(){
    $('h1').mousemove(function(e){
      var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
      var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
      $('h1').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(255,152,146,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,205,146,1), '+rXP/70+'px '+rYP/12+'px rgba(146,183,255,.7)');
    });
 });


 $(".card").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });