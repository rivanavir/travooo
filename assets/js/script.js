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
    }),
    discoverNewDestination: $("#discoverNewDestination").lightSlider({
      autoWidth:true,
      pager: false,
      controls: false,
      slideMargin: 20,
      loop: true
    }),
    trendingActivity: $("#trendingActivity").lightSlider({
      autoWidth:true,
      pager: false,
      controls: false,
      slideMargin: 20,
      loop: true
    }),
    trendingActivity2: $("#trendingActivity2").lightSlider({
      autoWidth:true,
      pager: false,
      controls: false,
      slideMargin: 20,
      loop: true
    }),
    placeYouMightLike: $("#placeYouMightLike").lightSlider({
      autoWidth:true,
      pager: false,
      controls: false,
      slideMargin: 20,
      loop: true
    }),
    placeYouMightLikePostCard: $("#placeYouMightLikePostCard").lightSlider({
      autoWidth:true,
      pager: false,
      controls: false,
      slideMargin: 20,
      loop: true
    }),
    videoYouMightLikePostCard: $("#videoYouMightLikePostCard").lightSlider({
      autoWidth:true,
      pager: false,
      controls: false,
      slideMargin: 20,
      loop: true
    }),
    placeInfoPostCard: $("#placeInfoPostCard").lightSlider({
      autoWidth:true,
      pager: false,
      controls: false,
      slideMargin: 20,
      loop: true
    }),
    newPeopleDiscover: $("#newPeopleDiscover").lightSlider({
      autoWidth:true,
      pager: false,
      controls: false,
      slideMargin: 9,
      loop: true
    }),
    newTravelerDiscover: $("#newTravelerDiscover").lightSlider({
      autoWidth:true,
      pager: false,
      controls: false,
      slideMargin: 9,
      loop: true
    })
  };

  $('.post-block .slide-link').on('click', function(e){
    e.preventDefault();
    let slideBlockId = $(this).parents('.post-block').find('.post-slider').attr('id');
    if($(this).hasClass('slide-prev')){
      customSliderObject[slideBlockId].goToPrevSlide();
    } else if($(this).hasClass('slide-next')){
      customSliderObject[slideBlockId].goToNextSlide();
    }
  });

  $("#postProfileSlider").lightSlider({
    item:1,
    pager: false,
    slideMargin: 0,
    prevHtml: '<i class="fa fa-angle-left"></i>',
    nextHtml: '<i class="fa fa-angle-right"></i>',
    addClass: 'post-profile-block'
  });
  $("#postDestSlider").lightSlider({
    pager: false,
    autoWidth:true,
    slideMargin: 8,
    prevHtml: '<i class="fa fa-angle-left"></i>',
    nextHtml: '<i class="fa fa-angle-right"></i>',
    addClass: 'post-dest-slider-wrap'
  });
  $("#postFollowSlider").lightSlider({
    item:1,
    pager: false,
    slideMargin: 0,
    prevHtml: '<i class="fa fa-angle-left"></i>',
    nextHtml: '<i class="fa fa-angle-right"></i>',
    addClass: 'post-follow-slider-wrap'
  });
  $("#postDestSliderInner1, #postDestSliderInner2, #postDestSliderInner3").lightSlider({
    pager: false,
    autoWidth:true,
    slideMargin: 8,
    prevHtml: '<i class="fa fa-angle-left"></i>',
    nextHtml: '<i class="fa fa-angle-right"></i>',
    addClass: 'post-dest-slider-wrap'
  });
  
});
