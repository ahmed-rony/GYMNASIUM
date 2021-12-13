// navbar activation;
$(document).ready(function(){

  // scroll position   ==============;
  $(window).on('scroll',function(){
    var scrolling = $(this).scrollTop();

    // back to top appearance   ===========;
    if(scrolling > 200){
      $('.back-to-top').fadeIn();
    }else{
      $('.back-to-top').fadeOut();
      
    }
    // navbar positioning    ==============;
    if(scrolling > 50){
      $('nav').addClass('nav-fix');
    }else{
      $('nav').removeClass('nav-fix');
    }

  })
  
  // back to top action   ===========;
  $('.back-to-top').on('click',function(){
    $('html,body').animate({
      scrollTop: '0px',
    }, 1500);
  })

  



  //   banner slider   ==============;
  $('.banner-slider').slick({
      arrows: false,
      dots: true,
      autoplay: true,
  });
  
  // gallery venobox   =============;
  $('.venobox').venobox(); 

  // testimonial slider    =============;
  $('.testimonial-slider').slick({
    arrows: false,
    slidesToShow: 2,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        }
      },
    ],
  });

  // funfact counter Up    =============;
  $('.counter').counterUp();

  // brand slider    ==================;
  $('.brand-slider').slick({
    slidesToShow: 5,
    // autoplay: true,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: '<i class="fas fa-chevron-left slick-prev prev-arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-right slick-next next-arrow"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        }
      },
    ],
  })

 

})