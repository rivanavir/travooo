$(document).ready(function(){

  $('.check-block').click(function(){
    $(this).toggleClass('checked-block');
  });

  let slider = $("#lightSlider").lightSlider({
    item:1,
    pager: false,
    controls: false,
    loop: true
  });

  $('.side-right-control .slide-link').on('click', function(e){
    e.preventDefault();
    if($(this).hasClass('slide-prev')){
      slider.goToPrevSlide();
    } else if($(this).hasClass('slide-next')){
      slider.goToNextSlide();
    }
  })

});
