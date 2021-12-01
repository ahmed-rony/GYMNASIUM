// navbar activation;
$(document).ready(function(){

  //   banner slider   ==============;
  $('.banner-slider').slick({
      arrows: false,
      dots: true,
  });
  
  // gallery venobox   =============;
  $('.venobox').venobox(); 

  // testimonial slider    =============;
  $('.testimonial-slider').slick({
    arrows: false,
    slidesToShow: 2,
    dots: true,
  });

  // funfact counter Up;
  $('.counter').counterUp();

  // brand slider    ==================;
  $('.brand-slider').slick({
    slidesToShow: 5,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: '<i class="fas fa-chevron-left slick-prev prev-arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-right slick-next next-arrow"></i>',
  })

  $('.test-main').slick({
    slidesToShow: 2,
    // centerMode: true,
    // centerPadding: '0px',
    
  })
 

})