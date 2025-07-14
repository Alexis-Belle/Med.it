// Attend que la page soit prête
jQuery(document).ready(function($){

  // Quand on clique sur la croix de la popup, la cache
  $('.popup-close').click(function(){
    $(this).closest('.popup-salon').parent().hide();
  });
});
