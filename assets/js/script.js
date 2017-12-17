$(document).ready(function(){

  $('.check-block').click(function(){
    $(this).toggleClass('checked-block');
  });

  var customSliderObject = {
    storySlider: $("#storySlider").lightSlider({
      item:1,
      pager: false,
      controls: false,
      loop: true
    }),
    trendingDescription: $("#trendingDescription").lightSlider({
      autoWidth:true,
      pager: false,
      controls: false,
      slideMargin: 20,
      loop: true
    })
  };

  $('.side-right-control .slide-link').on('click', function(e){
    e.preventDefault();
    let slideBlockId = $(this).parents('.post-block').find('.post-slider').attr('id');
    if($(this).hasClass('slide-prev')){
      customSliderObject[slideBlockId].goToPrevSlide();
    } else if($(this).hasClass('slide-next')){
      customSliderObject[slideBlockId].goToNextSlide();
    }
  })

});
