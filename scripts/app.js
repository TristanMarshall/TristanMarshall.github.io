$(document).ready(function(){

////////////////////////////////////////////////////////////////////////////////
//                     J Q U E R Y  A N I M A T I O N
////////////////////////////////////////////////////////////////////////////////

  // $(window).load(function(){
    $('.fixedName').fadeIn(3000);
    $('.nav').fadeIn(3000);
    $('.fullStackTitle').fadeIn(3000);
    $('.contactInfo3').fadeIn(2000);
    $('.dev1').delay(2000).fadeIn(2000);
    $('.logo1').delay(2000).fadeIn(2000);
    $('.about1').delay(2000).fadeIn(2000);
    $('.contact1').delay(2000).fadeIn(2000);
    $('.illustrate1').delay(2000).fadeIn(2000);
    $('.socialLinks').fadeIn(2000);
    $('.loadDiv').delay(1000).fadeOut(3000);
  // });
  $('.pics').slick({
    dots: true,
    infinite: true,
    speed: 700,
    fade: true,
    arrows: true,
    cssEase: 'linear',
   });

//    $(function () {
//     var $element = $('.load');
//     setInterval(function () {
//         $element.fadeIn(700).delay(100).fadeOut(900).fadeIn(500);
//     }, 1000);
// });

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
