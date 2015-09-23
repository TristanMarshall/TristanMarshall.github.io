$(document).ready(function(){

////////////////////////////////////////////////////////////////////////////////
//                     J Q U E R Y  A N I M A T I O N
////////////////////////////////////////////////////////////////////////////////

  $('.fixedName').fadeIn(3000);
  $('.nav').fadeIn(3000);
  $('.fullStackTitle').fadeIn(3000);
  $('.contactInfo3').fadeIn(2000);
  $('.dev1').fadeIn(2000);
  $('.logo1').fadeIn(2000);
  $('.illustrate1').fadeIn(2000);
  $('.socialLinks').fadeIn(2000);



  // $('.pics').slick({
  //    slidesToShow: 1,
  //    slidesToScroll: 1,
  //    autoplay: true,
  //    dots: true,
  //    arrows: false,
  //    fade: true,
  //    autoplaySpeed: 1000,
  //  });

////////////////////////////////////////////////////////////////////////////////
//                             V E L O C I T Y
////////////////////////////////////////////////////////////////////////////////

$('.linklink').on('click', function(e) {
  e.preventDefault();
  $('.linklink').removeClass('active');
  $(e.target).addClass('active');
  $($(e.target).attr('href')).velocity('scroll', {
    duration: 1000
  });
});










////////////////////////////////////////////////////////////////////////////////
//                   E N D  O F  D O C U M E N T . R E A D Y
////////////////////////////////////////////////////////////////////////////////
});
