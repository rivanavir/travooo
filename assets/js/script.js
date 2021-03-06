$(document).ready(function(){
  
  $('#createPostTxt').on('keyup', function(){
    let inputVal = $(this).val();
    let postBtn = $(this).parents('.post-create-block').find('.btn-light-primary');
    if(inputVal.length >= 3){
      $('body').addClass('postWritted');
      $(postBtn).removeClass('btn-disabled');
    } else{
      $('body').removeClass('postWritted');
      $(postBtn).addClass('btn-disabled');
    }
  });

  $('.check-block').click(function(){
    $(this).toggleClass('checked-block');
  });

  $('#filterToggler').on('click', function(e){
    e.preventDefault();
    $(this).addClass('hidden');
    $('#leftOutsideMenu').toggleClass('filter-open');
  });
  $('#sidebarToggler, #tripSidebarToggler').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('hidden');
    $('#sidebarLayer').toggleClass('sidebar-open');
  });
  $('#leftSidebarToggler').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('hidden');
    $('#sidebarSetting').toggleClass('sidebar-open');
  });
  $('#commentToggler').on('click', function(e){
    e.preventDefault();
    $('#galleryCommentWrap').toggleClass('comment-open');
  });

  // class changes binding
  (function( func ) {
    $.fn.addClass = function() { // replace the existing function on $.fn
      func.apply( this, arguments ); // invoke the original function
      this.trigger('classChanged'); // trigger the custom event
      return this; // retain jQuery chainability
    }
  })($.fn.addClass); // pass the original function as an argument

  (function( func ) {
    $.fn.removeClass = function() {
      func.apply( this, arguments );
      this.trigger('classChanged');
      return this;
    }
  })($.fn.removeClass);

  let mainHeaderHeight = $('.main-header').outerHeight();
  
  $('.btn-mobile-side').each(function(){
    let el = this;
    $(el).css('top', mainHeaderHeight);
  })
  $('.sidebar-layer').css('top', mainHeaderHeight);
  
  $('#sidebarSetting, #sidebarLayer, #leftOutsideMenu').on('classChanged', function(){
    if ($('#sidebarSetting').hasClass('sidebar-open') || $('#sidebarLayer').hasClass('sidebar-open') || $('#leftOutsideMenu').hasClass('filter-open')) {
      $('body').css('overflow','hidden');
    } else {
      $('body').removeAttr('style');
    }
  });
  
  $('header.main-header, .main-content-layer, .top-banner-wrap, .trip-map').on('click', function(){
    if($('#leftOutsideMenu').hasClass('filter-open')){
      $('#leftOutsideMenu').removeClass('filter-open');
      setTimeout(function(){
        $('#filterToggler').removeClass('hidden');
      }, 400);
    }
    if($('#sidebarLayer, #sidebarSetting').hasClass('sidebar-open')){
      $('#sidebarLayer, #sidebarSetting').removeClass('sidebar-open');
      setTimeout(function(){
        $('#sidebarToggler, #leftSidebarToggler, #tripSidebarToggler').removeClass('hidden');
      }, 400);
    }
  });
  
  $(window).scroll(function() {    
    let scroll = $(window).scrollTop();
    let scrollVar = mainHeaderHeight;
    // let scrollVar = 50;
    // if($(window).width() >= 576){
    //   scrollVar = 70;
    // }
    if (scroll >= scrollVar && $(window).width() <= 991) {
      $("#leftOutsideMenu, #sidebarLayer, #sidebarSetting").addClass('scrolled');
      $(".btn-mobile-side:not(.trip-sidebar-toggler)").css('top', 0);
      $("#sidebarSetting, #sidebarLayer:not(.trip-side), #leftOutsideMenu").css('top', 0);
    } else{
      $("#leftOutsideMenu, #sidebarLayer, #sidebarSetting").removeClass('scrolled');
      $(".btn-mobile-side").removeAttr('style');
      // $("#sidebarSetting, #sidebarLayer, #leftOutsideMenu").css('top', mainHeaderHeight);
      // $("#filterToggler, #sidebarToggler, #leftSidebarToggler").removeAttr('style');
    }
    if (scroll >= scrollVar) {
      $('#headerTripPlan').addClass('scrolled');
      $('#headerTripPlan .head-trip-plan_trip-line').show();
    } else{
      $('#headerTripPlan').removeClass('scrolled');
      $('#headerTripPlan .head-trip-plan_trip-line').hide();
    }

    // page of places follow scroll
    if(scroll >= 80 && $('#followHeader')){
      $('#followHeader').addClass('scrolled');
    } else{
      $('#followHeader').removeClass('scrolled');
    }
  });

  // lightslider initialization
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
    citiesSlider: $("#citiesSlider").lightSlider({
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
    nationalHoliday: $("#nationalHoliday").lightSlider({
      autoWidth:true,
      pager: false,
      controls: false,
      slideMargin: 20,
      loop: true
    }),
    emergencyNumbers: $("#emergencyNumbers").lightSlider({
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
      loop: true,
      responsive:[{
        breakpoint:575,
        settings: {
          item: 1,
          autoWidth: false
        }
      }]
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
    if(!$(this).parents('.post-block').hasClass('modal-post-slider')){
      let slideBlockId = $(this).parents('.post-block').find('.post-slider').attr('id');
      if($(this).hasClass('slide-prev')){
        customSliderObject[slideBlockId].goToPrevSlide();
      } else if($(this).hasClass('slide-next')){
        customSliderObject[slideBlockId].goToNextSlide();
      }
    }
  });

  $("#postProfileSlider").lightSlider({
    item:1,
    pager: false,
    slideMargin: 0,
    prevHtml: '<i class="trav-angle-left"></i>',
    nextHtml: '<i class="trav-angle-right"></i>',
    addClass: 'post-profile-block'
  });
  $("#postDestSlider, #postDestSliderInner1, #postDestSliderInner2, #postDestSliderInner3").lightSlider({
    pager: false,
    autoWidth:true,
    slideMargin: 8,
    prevHtml: '<i class="trav-angle-left"></i>',
    nextHtml: '<i class="trav-angle-right"></i>',
    addClass: 'post-dest-slider-wrap'
  });
  $("#tripDestSlider").lightSlider({
    pager: false,
    controls: false,
    autoWidth:true,
    slideMargin: 0,
    addClass: 'trip-destination-slider-block'
  });
  $("#weatherHourCarousel").lightSlider({
    pager: false,
    controls: true,
    autoWidth:true,
    slideMargin: 0,
    onSliderLoad: function(el) {
      $('.weather-carousel-control>a').on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('slide-prev')){
          el.goToPrevSlide();
        }
        if($(this).hasClass('slide-next')){
          el.goToNextSlide();
        }
      })
    }

  });
  $("#postFollowSlider").lightSlider({
    item:1,
    pager: false,
    slideMargin: 20,
    enableDrag: false,
    prevHtml: '<i class="trav-angle-left"></i>',
    nextHtml: '<i class="trav-angle-right"></i>',
    addClass: 'post-follow-slider-wrap'
  });
  $("#tripLineSlider").lightSlider({
    autoWidth:true,
    pager: false,
    slideMargin: 10,
    prevHtml: '<i class="trav-angle-left"></i>',
    nextHtml: '<i class="trav-angle-right"></i>',
    addClass: 'trip-line-slider-wrap',
    onSliderLoad: function(){
      $('#headerTripPlan .head-trip-plan_trip-line').hide();
    }
  });
  // $("#postTabBlock").lightSlider({
  //   autoWidth: true,
  //   pager: false,
  //   controls: false,
  //   slideMargin: 0,
  //   addClass: 'post-tab-slider-wrap'
  //   // prevHtml: '<i class="trav-angle-left"></i>',
  //   // nextHtml: '<i class="trav-angle-right"></i>'
  // });

  $('.modal-child').on('hidden.bs.modal', function () {
    $('body').addClass('modal-open').css('padding-right', '15px');
  });

  $('#mapModePopup').on('shown.bs.modal', function(){
    if(!$("#tripMapSlider").hasClass('lightSlider')){
      $("#tripMapSlider").lightSlider({
        item:1,
        pager: false,
        slideMargin: 20,
        enableDrag: false,
        prevHtml: '<i class="trav-angle-left"></i>',
        nextHtml: '<i class="trav-angle-right"></i>',
        addClass: 'post-modal-follow-slider-wrap'
      });
    }
    if(!$("#tripDestSlider1, #tripDestSlider2, #tripDestSlider3").hasClass('lightSlider')){
      $("#tripDestSlider1, #tripDestSlider2, #tripDestSlider3").lightSlider({
        pager: false,
        autoWidth:true,
        slideMargin: 0,
        prevHtml: '<i class="trav-angle-left"></i>',
        nextHtml: '<i class="trav-angle-right"></i>',
        addClass: 'trip-destination-slider-block',
        onSliderLoad: function(el){
          $(el).css('opacity', 1);
        }
      });
    }
  });

  $('.trip-map_wrapper .destination-point').on('click', function(){
    $(this).toggleClass('selected');
  })

  $('#mapPopup').on('shown.bs.modal', function(){
    let getTheDirect = function(elem){
      let sliderController = $(elem).find('.lslide.active .dest-slide-vector');
      let leftDirect, rightDirect;
      if(sliderController.data('direct') == 'left'){
        leftDirect = sliderController;
      }
      if(sliderController.data('direct') == 'right'){
        rightDirect = sliderController;
      }
      $(leftDirect).on('click', function(){
        elem.goToPrevSlide();
      });
      $(rightDirect).on('click', function(){
        elem.goToNextSlide();
      });
    }
    
    $("#modalMapSlider").lightSlider({
      item:1,
      pager: false,
      controls: false,
      enableDrag: false,
      addClass: 'post-map-slider',
      onSliderLoad: function(el){
        getTheDirect(el);
      },
      onAfterSlide: function(el){
        getTheDirect(el);
      }
    });
  });

  var inputFocusBlur = (id) => {
    $(id).on('focus', function(){
      $(this).parents('.search-block-wrap').addClass('show');
      if(!$("#searchFilterList").hasClass('lightSlider')){
        $("#searchFilterList").lightSlider({
          autoWidth:true,
          pager: false,
          slideMargin: 0,
          prevHtml: '<i class="trav-angle-left"></i>',
          nextHtml: '<i class="trav-angle-right"></i>',
          addClass: 'filter-slider-wrap'
        });
      };
    });
    $(id).on('blur', function(){
      $(this).parents('.search-block-wrap').removeClass('show');
    });
  };

  $('#addPlacePopup, #wouldVisitPlacePopup').on('shown.bs.modal', function(){
    inputFocusBlur('#placeSearchInput');
    inputFocusBlur('#placeSearchInput2');
  });

  // message input dropdown
  $('#messageSearchInput').keyup(function(e){
    let value = $(e.target).val();
    if(value.length >= 3){
      $(this).parents('.header-search-block').addClass('show');
    } else{
      $(this).parents('.header-search-block').removeClass('show');
    }
  });
  $('.search-block .delete-search').on('click', function(e){
    $(e.target).parents('.header-search-block').removeClass('show').find('input').val(null);
    // $(e.target).parents('.search-block').find('input').val(null);
  })

  $('#inputCountry1, #inputCountry2').keyup(function(e){
    let value = $(e.target).val();
    if(value.length >= 3){
      $(this).parents('.input-wrap').addClass('show');
    } else{
      $(this).parents('.input-wrap').removeClass('show');
    }
  });

  $('#storyModePopup, #storiesModePopup').on('shown.bs.modal', function(){
    let placeNameList = $(this).find('.place-name-list');
    let currentItem = $(placeNameList).find('.current');
    $.each(currentItem, function(){
      let itemWidth = $(this).outerWidth()/2;
      let parentBlock = $(this).parent();
      let parentBlockWidth = $(this).parent().width();
      let itemOffsetToParent = $(this).offset().left - parentBlock.offset().left;

      let calcCount = itemWidth + itemOffsetToParent;

      $(parentBlock).css('left', -calcCount);
    });

    if(!$("#moreStorySlider").hasClass('lightSlider')){
      $("#moreStorySlider").lightSlider({
        autoWidth:true,
        pager: false,
        controls: false,
        slideMargin: 10,
        loop: true,
        addClass: 'more-story-slider',
        onSliderLoad: function(el){
          $(el).parents('.post-block').find('.slide-link').on('click', function(e){
            e.preventDefault();
            let slideBlockId = $(this).parents('.post-block').find('.post-slider').attr('id');
            if($(this).hasClass('slide-prev')){
              el.goToPrevSlide();
            } else if($(this).hasClass('slide-next')){
              el.goToNextSlide();
            }
          });
        }
      });
    }
    
    if(!$("#calendarSlider").hasClass('lightSlider')){
      $("#calendarSlider").lightSlider({
        item:3,
        pager: false,
        controls: false,
        loop:false,
        slideMove:1,
        slideMargin: 0,
        centerSlider: true,
        addClass: 'head-calendar-slider',
        onSliderLoad: function(el){
          $('.day-slider a.prevDay').on('click', function(e){
            e.preventDefault();
            el.goToPrevSlide();
          });
          $('.day-slider a.nextDay').on('click', function(e){
            e.preventDefault();
            el.goToNextSlide();
          });
        }
      });
    }
    
    if(!$("#tripLineSliderModal").hasClass('lightSlider')){
      $("#tripLineSliderModal").lightSlider({
        autoWidth:true,
        pager: false,
        slideMargin: 10,
        prevHtml: '<i class="trav-angle-left"></i>',
        nextHtml: '<i class="trav-angle-right"></i>',
        addClass: 'trip-line-slider-wrap',
        onSliderLoad: function(el){
          $(el).parents('#modalHeadTripPlan').hide();
        }
      });
    }

    $(this).scroll(function() {    
      let scroll = $(this).scrollTop();
      let scrollVar = 50;
      if($(window).width() >= 576){
        scrollVar = 140;
      }
      if (scroll >= scrollVar) {
        $('#storyModePopup .modal-close').css('top', '17px');
        $('#modalHeadTripPlan').addClass('scrolled').show();
      } else{
        $('#storyModePopup .modal-close').css('top', '30px');
        $('#modalHeadTripPlan').removeClass('scrolled').hide();
      }
    })
    
  });

  if(!$("#createTripCalendarSlider").hasClass('lightSlider')){
    $("#createTripCalendarSlider").lightSlider({
      item:3,
      pager: false,
      controls: false,
      loop:false,
      slideMove:1,
      slideMargin: 0,
      centerSlider: true,
      addClass: 'head-calendar-slider',
      onSliderLoad: function(el){
        $('.day-slider a.prevDay').on('click', function(e){
          e.preventDefault();
          el.goToPrevSlide();
        });
        $('.day-slider a.nextDay').on('click', function(e){
          e.preventDefault();
          el.goToNextSlide();
        });
      }
    });
  };
  $('#storyModePopup').on('hidden.bs.modal', function(){
    $('#storyModePopup .modal-close').css('top', '30px');
    $('#modalHeadTripPlan').removeClass('scrolled').hide();
  });

  $('#storiesModePopup, #placeOneDayPopup, #tripPlansPopup').on('show.bs.modal', function(){
    $(this).find("#storiesModeSlider").lightSlider({
      autoWidth: true,
      pager: false,
      slideMargin: 15,
      prevHtml: '<i class="trav-angle-left"></i>',
      nextHtml: '<i class="trav-angle-right"></i>'
    });
    $(this).find("#postDestSliderInner4").lightSlider({
      pager: false,
      autoWidth:true,
      slideMargin: 8,
      prevHtml: '<i class="trav-angle-left"></i>',
      nextHtml: '<i class="trav-angle-right"></i>',
      addClass: 'post-dest-slider-wrap'
    });
  });

  $('.modal').on('shown.bs.modal', function(){
    let headComment = $(this).find('.post-comment-head');
    let headHeight = $(headComment).outerHeight();
    let scrollVar = 30;
    $(this).scroll(function() {
      let scroll = $(this).scrollTop();
      let headTop = scroll - scrollVar - 1;
      if (scroll >= scrollVar) {
        $(this).find('.post-modal-comment').addClass('head-fixed').css('padding-top',headHeight);
        $(headComment).css('top',headTop);
      } else{
        $(this).find('.post-modal-comment').removeClass('head-fixed').removeAttr('style');
        $(headComment).removeAttr('style');
      }
    });
    
    $('#requestPopup .trip-plan-row .trip-check-layer').on('click', function(){
      let tripPlan = $(this).parents('.trip-plan-inner').find('.trip-plan-row');
      $(tripPlan).removeClass('checked-plan');
      $(this).parents('.trip-plan-row').addClass('checked-plan');
    });

    $('#writeReviewLink').on('click', function(e){
      e.preventDefault();
      $(this).hide();
      $("#reviewAddCommentBlock").show();
    });

    $("#reviewAddCommentBlock .btn-cancel").on('click', function(e){
      e.preventDefault();
      $(this).parents('#reviewAddCommentBlock').hide();
      $("#writeReviewLink").show();
    });


  });


  $("#mobileIconShow").on('click', function(e){
    e.preventDefault();
    let iconList = $(this).parents('.smile-link-wrap').find('.smile-list');
    $(iconList).toggleClass('show');
  });

  $('.message-chat').after().on('click', function(){
    $(this).parents('.message-block').addClass('hide-side');

  });
  $("#mobileSideToggler").on('click', function(){
    let messageBlock = $(this).parents('.message-block');
    $(messageBlock).toggleClass('hide-side');
  });

  $('#lightGalleryTrigger').on('click', function(){
    
    let $lg = $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
        "src": 'https://sachinchoolur.github.io/lightGallery/static/img/1-1600.jpg',
        'thumb': 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-1.jpg',
        'subHtml': `<div class='cover-block' style='display:none;'>
          <div class='cover-block-inner'>
            <div class="top-gallery-content">
              <div class="top-info-layer">
                <div class="top-avatar-wrap">
                  <img src="http://placehold.it/50x50" alt="">
                </div>
                <div class="top-info-txt">
                  <div class="preview-txt">
                    <p class="dest-name">Rabat sale airport</p> 
                    <p class="dest-place">Airport in <span>Rabat-sale, Morocco</span></p>
                  </div>
                </div>
              </div>
              <div class="sub-post-info">
                <ul class="sub-list">
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-popularity-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">#4</div>
                      <div class="sub-txt">Popularity</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-safety-big-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">9/10</div>
                      <div class="sub-txt">Safety</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-user-rating-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">4.8/5</div>
                      <div class="sub-txt">User rating</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="map-preview">
              <img src="./assets/image/map-preview.jpg" alt="map">
            </div>
            <div class='post-map-info-caption map-black'>
              <div class='map-avatar'>
                <img src='http://placehold.it/25x25'>
              </div>
              <div class='map-label-txt'><b>Suzanne</b> checked on <b>2 Sep</b> at <b>8:30 am</b> and stayed <b>30 min</b></div>
            </div>
          </div>
        </div>`
      }, {
        "src": 'https://sachinchoolur.github.io/lightGallery/static/img/2-1600.jpg',
        'thumb': 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-2.jpg',
        'subHtml': `<div class='cover-block' style='display:none;'>
          <div class='cover-block-inner comment-block'>
            <div class="map-preview">
              <img src="./assets/image/map-preview.jpg" alt="map">
            </div>
            <div class='gallery-comment-wrap'>
              <div class='gallery-comment-inner mCustomScrollbar'>
                <div class="top-gallery-content gallery-comment-top">
                  <div class="top-info-layer">
                    <div class="top-avatar-wrap">
                      <img src="http://placehold.it/50x50" alt="">
                    </div>
                    <div class="top-info-txt">
                      <div class="preview-txt">
                        <p class="dest-name" href="#">Rabat sale airport</p> 
                        <p class="dest-place">Airport in <span>Rabat-sale, Morocco</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="gallery-comment-top-line">
                    <p>
                      <a href="#" class="gallery-link">Photo</a>
                      by
                      <img src="http://placehold.it/22x22" alt="avatar">
                      <a href="#" class="gallery-link">Suzanne</a>
                      <span class="dot">·</span> 18 Jun 2017
                    </p>
                  </div>
                  <div class="gallery-comment-top-line">
                    <p>
                      Trip Plan
                      <a href="#" class="gallery-link">From Morocco to Japan in 7 Days</a>
                    </p>
                  </div>
                  <div class="gal-com-footer-info">
                    <div class="post-foot-block post-reaction">
                      <img src="./assets/image/reaction-icon-smile-only.png" alt="smile">
                      <span><b>2</b> Reactions</span>
                    </div>
                  </div>
                </div>
                <div class="post-comment-layer">
                  <div class="post-comment-top-info">
                    <div class="comm-count-info">
                      5 Comments
                    </div>
                    <div class="comm-count-info">
                      3 / 20
                    </div>
                  </div>
                  <div class="post-comment-wrapper">
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>21</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Amine</a>
                          <a href="#" class="comment-nickname">@ak0117</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-like.png" alt="">
                            <span>19</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>15</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <a href="#" class="load-more-link">Load more...</a>
                  </div>
                </div>
              </div>
              <div class="post-add-comment-block">
                <div class="avatar-wrap">
                  <img src="http://placehold.it/45x45" alt="">
                </div>
                <div class="post-add-com-input">
                  <input type="text" placeholder="Write a comment">
                </div>
              </div>
            </div>
          </div>
        </div>`
      }, {
        "src": 'https://sachinchoolur.github.io/lightGallery/static/img/2-1600.jpg',
        'thumb': 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-2.jpg',
        'subHtml': `<div class='cover-block' style='display:none;'>
          <div class='cover-block-inner comment-block'>
            <ul class="modal-outside-link-list white-bg">
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-angle-left"></i>
                  </div>
                  <span>Back</span>
                </a>
              </li>
            </ul>
            <div class="top-gallery-content">
              <div class="sub-post-info">
                <ul class="sub-list">
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-popularity-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">#4</div>
                      <div class="sub-txt">Popularity</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-safety-big-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">9/10</div>
                      <div class="sub-txt">Safety</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-user-rating-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">4.8/5</div>
                      <div class="sub-txt">User rating</div>
                    </div>
                  </li>
                </ul>
                <div class="follow-btn-wrap">
                  <button type="button" class="btn btn-light-primary btn-bordered btn-icon-side btn-icon-right">
                    Interested
                    <span class="icon-wrap"><i class="trav-view-plan-icon"></i></span>
                  </button>
                </div>
              </div>
            </div>
            <div class="map-preview">
              <img src="./assets/image/map-preview.jpg" alt="map">
            </div>
            <div class='gallery-comment-wrap'>
              <div class='gallery-comment-inner mCustomScrollbar'>
                <div class="top-gallery-content gallery-comment-top">
                  <div class="top-info-layer">
                    <div class="top-avatar-wrap">
                      <img src="http://placehold.it/50x50" alt="">
                    </div>
                    <div class="top-info-txt">
                      <div class="preview-txt">
                        <p class="dest-name" href="#">Grand Legacy At The Park</p> 
                        <p class="dest-place">Hotel - 6.27 km from Disneyland</p>
                      </div>
                    </div>
                  </div>
                  <div class="gal-com-footer-info">
                    <div class="post-foot-block post-reaction">
                      <img src="./assets/image/reaction-icon-smile-only.png" alt="smile">
                      <span><b>2</b> Reactions</span>
                    </div>
                  </div>
                </div>
                <div class="post-comment-layer">
                  <div class="post-comment-top-info">
                    <div class="comm-count-info">
                      5 Comments
                    </div>
                    <div class="comm-count-info">
                      3 / 20
                    </div>
                  </div>
                  <div class="post-comment-wrapper">
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>21</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Amine</a>
                          <a href="#" class="comment-nickname">@ak0117</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-like.png" alt="">
                            <span>19</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>15</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <a href="#" class="load-more-link">Load more...</a>
                  </div>
                </div>
              </div>
              <div class="post-add-comment-block">
                <div class="avatar-wrap">
                  <img src="http://placehold.it/45x45" alt="">
                </div>
                <div class="post-add-com-input">
                  <input type="text" placeholder="Write a comment">
                </div>
              </div>
            </div>
          </div>
        </div>`
      }, {
        "src": 'https://sachinchoolur.github.io/lightGallery/static/img/2-1600.jpg',
        'thumb': 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-2.jpg',
        'subHtml': `<div class='cover-block' style='display:none;'>
          <div class='cover-block-inner comment-block'>
            <ul class="modal-outside-link-list white-bg">
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-angle-left"></i>
                  </div>
                  <span>Back</span>
                </a>
              </li>
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-flag-icon"></i>
                  </div>
                  <span>Report</span>
                </a>
              </li>
            </ul>
            <div class="top-gallery-content">
              <div class="sub-post-info">
                <ul class="sub-list">
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-popularity-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">#4</div>
                      <div class="sub-txt">Popularity</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-safety-big-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">9/10</div>
                      <div class="sub-txt">Safety</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-user-rating-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">4.8/5</div>
                      <div class="sub-txt">User rating</div>
                    </div>
                  </li>
                </ul>
                <div class="follow-btn-wrap">
                  <button type="button" class="btn btn-light-primary btn-bordered btn-icon-side btn-icon-right">
                    Interested
                    <span class="icon-wrap"><i class="trav-view-plan-icon"></i></span>
                  </button>
                </div>
              </div>
            </div>
            <div class="map-preview">
              <img src="./assets/image/map-preview.jpg" alt="map">
            </div>
            <div class='gallery-comment-wrap'>
              <div class='gallery-comment-inner mCustomScrollbar'>
                <div class="top-gallery-content gallery-comment-top">
                  <div class="top-info-layer">
                    <div class="post-top-round-icon-wrap">
                      <i class="trav-event-icon"></i>
                    </div>
                    <div class="top-info-txt">
                      <div class="preview-txt">
                        <a class="post-name-link" href="#">Quick Chek New Jersey Festival of Ballooning</a>
                        <p>
                          <span>By</span>
                          <a href="#" class="post-name-link">Donec Ultrices Nunc</a>
                          <span class="dot">·</span>
                          <span>8 Days left</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="gal-com-footer-info">
                    <div class="post-foot-block post-reaction">
                      <img src="./assets/image/reaction-icon-smile-only.png" alt="smile">
                      <span><b>2</b> Reactions</span>
                    </div>
                    <div class="post-foot-block post-comment-place">
                      <i class="trav-location"></i>
                      <span class="place-name">New York City</span>
                    </div>
                  </div>
                </div>
                <div class="post-comment-layer">
                  <div class="post-comment-top-info">
                    <div class="comm-count-info">
                      5 Comments
                    </div>
                    <div class="comm-count-info">
                      3 / 20
                    </div>
                  </div>
                  <div class="post-comment-wrapper">
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>21</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Amine</a>
                          <a href="#" class="comment-nickname">@ak0117</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-like.png" alt="">
                            <span>19</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>15</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <a href="#" class="load-more-link">Load more...</a>
                  </div>
                </div>
              </div>
              <div class="post-add-comment-block">
                <div class="avatar-wrap">
                  <img src="http://placehold.it/45x45" alt="">
                </div>
                <div class="post-add-com-input">
                  <input type="text" placeholder="Write a comment">
                </div>
              </div>
            </div>
          </div>
        </div>`
      }, {
        "src": 'https://sachinchoolur.github.io/lightGallery/static/img/2-1600.jpg',
        'thumb': 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-2.jpg',
        'subHtml': `<div class='cover-block' style='display:none;'>
          <div class='cover-block-inner comment-block'>
            <ul class="modal-outside-link-list white-bg">
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-angle-left"></i>
                  </div>
                  <span>Back</span>
                </a>
              </li>
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-flag-icon"></i>
                  </div>
                  <span>Report</span>
                </a>
              </li>
            </ul>
            <div class="top-gallery-content">
              <div class="sub-post-info">
                <ul class="sub-list">
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-popularity-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">#4</div>
                      <div class="sub-txt">Popularity</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-safety-big-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">9/10</div>
                      <div class="sub-txt">Safety</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-user-rating-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">4.8/5</div>
                      <div class="sub-txt">User rating</div>
                    </div>
                  </li>
                </ul>
                <div class="follow-btn-wrap">
                  <button type="button" class="btn btn-light-primary btn-bordered btn-icon-side btn-icon-right">
                    Interested
                    <span class="icon-wrap"><i class="trav-view-plan-icon"></i></span>
                  </button>
                </div>
              </div>
            </div>
            <div class="map-preview">
              <img src="./assets/image/map-preview.jpg" alt="map">
            </div>
            <div class='gallery-comment-wrap'>
              <div class='gallery-comment-inner mCustomScrollbar'>
                <div class="top-gallery-content gallery-comment-top">
                  <div class="top-info-layer">
                    <div class="top-avatar-wrap">
                      <img src="http://placehold.it/50x50" alt="">
                    </div>
                    <div class="top-info-txt">
                      <div class="preview-txt">
                        <a class="dest-name" href="#">Julie</a> 
                        <p class="dest-place">uploaded a <b>photo</b> <span class="date">2 hours ago</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="gallery-comment-txt">
                    <p>This is an amazing street to walk around and do some shopping</p>
                  </div>
                  <div class="gal-com-footer-info">
                    <div class="post-foot-block post-reaction">
                      <i class="trav-heart-fill-icon"></i>
                      <span><b>185</b></span>
                    </div>
                    <div class="post-foot-block post-comment-place">
                      <i class="trav-location"></i>
                      <span class="place-name">510 LaGuardia Pl, Paris, France</span>
                    </div>
                  </div>
                </div>
                <div class="post-comment-layer">
                  <div class="post-comment-top-info">
                    <div class="comm-count-info">
                      5 Comments
                    </div>
                    <div class="comm-count-info">
                      3 / 20
                    </div>
                  </div>
                  <div class="post-comment-wrapper">
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>21</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row happen-event">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Amine</a>
                          <a href="#" class="comment-nickname">@ak0117</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-like.png" alt="">
                            <span>19</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>15</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <a href="#" class="load-more-link">Load more...</a>
                  </div>
                </div>
              </div>
              <div class="post-add-comment-block">
                <div class="avatar-wrap">
                  <img src="http://placehold.it/45x45" alt="">
                </div>
                <div class="post-add-com-input">
                  <input type="text" placeholder="Write a comment">
                </div>
              </div>
            </div>
          </div>
        </div>`
      }, {
        "src": 'https://sachinchoolur.github.io/lightGallery/static/img/13-1600.jpg',
        'thumb': 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-13.jpg',
        'subHtml': `<div class='cover-block' style='display:none;'>
          <div class='cover-block-inner'>
            <div class="top-gallery-content">
              <div class="top-info-layer">
                <div class="top-avatar-wrap">
                  <img src="http://placehold.it/50x50" alt="">
                </div>
                <div class="top-info-txt">
                  <div class="preview-txt">
                    <p class="dest-name" href="#">Rabat sale airport</p> 
                    <p class="dest-place">Airport in <span>Rabat-sale, Morocco</span></p>
                  </div>
                </div>
              </div>
              <div class="sub-post-info">
                <ul class="sub-list">
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-popularity-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">#4</div>
                      <div class="sub-txt">Popularity</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-safety-big-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">9/10</div>
                      <div class="sub-txt">Safety</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-user-rating-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">4.8/5</div>
                      <div class="sub-txt">User rating</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="map-preview">
              <img src="./assets/image/map-preview.jpg" alt="map">
            </div>
            <div class='post-map-info-caption map-black'>
              <div class='map-avatar'>
                <img src='http://placehold.it/25x25'>
              </div>
              <div class='map-label-txt'><b>Suzanne</b> checked on <b>2 Sep</b> at <b>8:30 am</b> and stayed <b>30 min</b></div>
            </div>
          </div>
        </div>`
      }, {
        "src": 'https://sachinchoolur.github.io/lightGallery/static/img/4-1600.jpg',
        'thumb': 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-4.jpg',
        'subHtml': `<div class='cover-block' style='display:none;'>
          <div class='cover-block-inner'>
            <div class="top-gallery-content">
              <div class="top-info-layer">
                <div class="top-avatar-wrap">
                  <img src="http://placehold.it/50x50" alt="">
                </div>
                <div class="top-info-txt">
                  <div class="preview-txt">
                    <p class="dest-name" href="#">Rabat sale airport</p> 
                    <p class="dest-place">Airport in <span>Rabat-sale, Morocco</span></p>
                  </div>
                </div>
              </div>
              <div class="sub-post-info">
                <ul class="sub-list">
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-popularity-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">#4</div>
                      <div class="sub-txt">Popularity</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-safety-big-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">9/10</div>
                      <div class="sub-txt">Safety</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-user-rating-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">4.8/5</div>
                      <div class="sub-txt">User rating</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="map-preview">
              <img src="./assets/image/map-preview.jpg" alt="map">
            </div>
            <div class='post-map-info-caption map-black'>
              <div class='map-avatar'>
                <img src='http://placehold.it/25x25'>
              </div>
              <div class='map-label-txt'><b>Suzanne</b> checked on <b>2 Sep</b> at <b>8:30 am</b> and stayed <b>30 min</b></div>
            </div>
          </div>
        </div>`
      }],
      
      addClass: 'main-gallery-block',
      pager: false,
      hideControlOnEnd: true,
      loop: false,
      slideEndAnimatoin : false,
      thumbnail:true,
      toogleThumb: false,
      thumbHeight: 100,
      thumbMargin: 20,
      thumbContHeight: 180,
      actualSize: false,
      zoom: false,
      autoplayControls: false,
      fullScreen: false,
      download: false,
      counter: false,
      mousewheel: false,
      appendSubHtmlTo: 'lg-item',
      prevHtml: '<i class="trav-angle-left"></i>',
      nextHtml: '<i class="trav-angle-right"></i>',
      hideBarsDelay: 100000000
    });

    $lg.on('onAfterOpen.lg',function(){
      $('body').css('overflow','hidden');
      let itemArr = [], thumbArr = [];
      let galleryBlock = $('.main-gallery-block');
      let galleryItem = $(galleryBlock).find('.lg-item');
      let galleryThumb = $(galleryBlock).find('.lg-thumb-item');
      $.each(galleryItem, function(i, val){
        // itemArr.push(val);
      });
      $.each(galleryThumb, function(i, val){
        // thumbArr.push(val);
        let startCnt = `<div class="thumb-txt"><i class="trav-flag-icon"></i> start</div>`;
        let startCntEmpty = `<div class="thumb-txt">&nbsp;</div>`;
        let placetxt = 'rabar-sale airport'
        let placeName = `<div class="thumb-txt">${placetxt}</div>`;
        if(i == 0){
          $(val).addClass('place-thumb');
          $(val).append(placeName).prepend(startCnt);
        }
        if(i == 2){
          $(val).addClass('place-thumb');
          $(val).append(placeName).prepend(startCntEmpty);
        }
      });
    });
    $lg.on('onBeforeClose.lg',function(){
      $('body').removeAttr('style');
    });
    let setWidth = function(){
      let mainBlock = $('.main-gallery-block');
      let subTtlWrp = $(mainBlock).find('.lg-current .cover-block');
      let subTtl = $(mainBlock).find('.lg-current .cover-block-inner');

      let slide = $('.main-gallery-block .lg-item');
      let currentItem = $('.main-gallery-block .lg-current');
      let currentImgWrap = $('.main-gallery-block .lg-current .lg-img-wrap');
      let currentImg = $('.main-gallery-block .lg-current .lg-image');
      let currentCommentIs = $(subTtl).hasClass('comment-block');
      let currentImgPos = $(currentImg).position().top;
      setTimeout(function(){
        let commentWidth = $('.main-gallery-block .lg-current .gallery-comment-wrap').width();
        let currentWidth = $(mainBlock).find('.lg-current .lg-object').width();
        if(currentCommentIs){
          // console.log('yes');
          $(currentImgWrap).css('padding-right', commentWidth);
          $(subTtl).css('width', currentWidth + commentWidth);
        } else{
          $(currentImgWrap).removeAttr('style');
          $(subTtl).css('width', currentWidth);
        }
        $(subTtlWrp).show();
        $('.mCustomScrollbar').mCustomScrollbar();
      }, 500);
    }

    $lg.on('onSlideItemLoad.lg',function(e){
      
      setWidth();
      $(window).on('resize', function(){
        setWidth();
      })
    });
    $lg.on('onAfterSlide.lg',function(){
      setWidth();
    });
  });

  // pages of places popup
  $('#photoPopupTrigger').on('click', function(){
    
    let $lg = $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
        "src": 'https://sachinchoolur.github.io/lightGallery/static/img/2-1600.jpg',
        'thumb': 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-2.jpg',
        'subHtml': `<div class='cover-block' style='display:none;'>
          <div class='cover-block-inner comment-block'>
            <ul class="modal-outside-link-list white-bg">
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-angle-left"></i>
                  </div>
                  <span>Back</span>
                </a>
              </li>
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-flag-icon"></i>
                  </div>
                  <span>Report</span>
                </a>
              </li>
            </ul>
            <div class='gallery-comment-wrap'>
              <div class='gallery-comment-inner mCustomScrollbar'>
                <div class="top-gallery-content gallery-comment-top">
                  <div class="top-info-layer">
                    <div class="top-avatar-wrap">
                      <img src="http://placehold.it/50x50" alt="">
                    </div>
                    <div class="top-info-txt">
                      <div class="preview-txt">
                        <a class="dest-name" href="#">Julie</a> 
                        <p class="dest-place">uploaded a <b>photo</b> <span class="date">2 hours ago</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="gallery-comment-txt">
                    <p>This is an amazing street to walk around and do some shopping</p>
                  </div>
                  <div class="gal-com-footer-info">
                    <div class="post-foot-block post-reaction">
                      <i class="trav-heart-fill-icon"></i>
                      <span><b>185</b></span>
                    </div>
                    <div class="post-foot-block post-comment-place">
                      <i class="trav-location"></i>
                      <span class="place-name">510 LaGuardia Pl, Paris, France</span>
                    </div>
                  </div>
                </div>
                <div class="post-comment-layer">
                  <div class="post-comment-top-info">
                    <div class="comm-count-info">
                      5 Comments
                    </div>
                    <div class="comm-count-info">
                      3 / 20
                    </div>
                  </div>
                  <div class="post-comment-wrapper">
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>21</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row happen-event">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Amine</a>
                          <a href="#" class="comment-nickname">@ak0117</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-like.png" alt="">
                            <span>19</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>15</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <a href="#" class="load-more-link">Load more...</a>
                  </div>
                </div>
              </div>
              <div class="post-add-comment-block">
                <div class="avatar-wrap">
                  <img src="http://placehold.it/45x45" alt="">
                </div>
                <div class="post-add-com-input">
                  <input type="text" placeholder="Write a comment">
                </div>
              </div>
            </div>
          </div>
        </div>`
      },{
        "src": 'https://sachinchoolur.github.io/lightGallery/static/img/2-1600.jpg',
        'thumb': 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-2.jpg',
        'subHtml': `<div class='cover-block' style='display:none;'>
          <div class='cover-block-inner comment-block'>
            <ul class="modal-outside-link-list white-bg">
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-angle-left"></i>
                  </div>
                  <span>Back</span>
                </a>
              </li>
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-flag-icon"></i>
                  </div>
                  <span>Report</span>
                </a>
              </li>
            </ul>
            <div class='gallery-comment-wrap'>
              <div class='gallery-comment-inner mCustomScrollbar'>
                <div class="top-gallery-content gallery-comment-top">
                  <div class="top-info-layer">
                    <div class="top-avatar-wrap">
                      <img src="http://placehold.it/50x50" alt="">
                    </div>
                    <div class="top-info-txt">
                      <div class="preview-txt">
                        <a class="dest-name" href="#">Julie</a> 
                        <p class="dest-place">uploaded a <b>photo</b> <span class="date">2 hours ago</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="gallery-comment-txt">
                    <p>This is an amazing street to walk around and do some shopping</p>
                  </div>
                  <div class="gal-com-footer-info">
                    <div class="post-foot-block post-reaction">
                      <i class="trav-heart-fill-icon"></i>
                      <span><b>185</b></span>
                    </div>
                    <div class="post-foot-block post-comment-place">
                      <i class="trav-location"></i>
                      <span class="place-name">510 LaGuardia Pl, Paris, France</span>
                    </div>
                  </div>
                </div>
                <div class="post-comment-layer">
                  <div class="post-comment-top-info">
                    <div class="comm-count-info">
                      5 Comments
                    </div>
                    <div class="comm-count-info">
                      3 / 20
                    </div>
                  </div>
                  <div class="post-comment-wrapper">
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>21</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row happen-event">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Amine</a>
                          <a href="#" class="comment-nickname">@ak0117</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-like.png" alt="">
                            <span>19</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>15</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <a href="#" class="load-more-link">Load more...</a>
                  </div>
                </div>
              </div>
              <div class="post-add-comment-block">
                <div class="avatar-wrap">
                  <img src="http://placehold.it/45x45" alt="">
                </div>
                <div class="post-add-com-input">
                  <input type="text" placeholder="Write a comment">
                </div>
              </div>
            </div>
          </div>
        </div>`
      },{
        "src": 'https://sachinchoolur.github.io/lightGallery/static/img/2-1600.jpg',
        'thumb': 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-2.jpg',
        'subHtml': `<div class='cover-block' style='display:none;'>
          <div class='cover-block-inner comment-block'>
            <ul class="modal-outside-link-list white-bg">
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-angle-left"></i>
                  </div>
                  <span>Back</span>
                </a>
              </li>
            </ul>
            <div class="top-gallery-content">
              <div class="sub-post-info">
                <ul class="sub-list">
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-popularity-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">#4</div>
                      <div class="sub-txt">Popularity</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-safety-big-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">9/10</div>
                      <div class="sub-txt">Safety</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-user-rating-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">4.8/5</div>
                      <div class="sub-txt">User rating</div>
                    </div>
                  </li>
                </ul>
                <div class="follow-btn-wrap">
                  <button type="button" class="btn btn-light-primary btn-bordered btn-icon-side btn-icon-right">
                    Interested
                    <span class="icon-wrap"><i class="trav-view-plan-icon"></i></span>
                  </button>
                </div>
              </div>
            </div>
            <div class="map-preview">
              <img src="./assets/image/map-preview.jpg" alt="map">
            </div>
            <div class='gallery-comment-wrap'>
              <div class='gallery-comment-inner mCustomScrollbar'>
                <div class="top-gallery-content gallery-comment-top">
                  <div class="top-info-layer">
                    <div class="top-avatar-wrap">
                      <img src="http://placehold.it/50x50" alt="">
                    </div>
                    <div class="top-info-txt">
                      <div class="preview-txt">
                        <p class="dest-name" href="#">Grand Legacy At The Park</p> 
                        <p class="dest-place">Hotel - 6.27 km from Disneyland</p>
                      </div>
                    </div>
                  </div>
                  <div class="gal-com-footer-info">
                    <div class="post-foot-block post-reaction">
                      <img src="./assets/image/reaction-icon-smile-only.png" alt="smile">
                      <span><b>2</b> Reactions</span>
                    </div>
                  </div>
                </div>
                <div class="post-comment-layer">
                  <div class="post-comment-top-info">
                    <div class="comm-count-info">
                      5 Comments
                    </div>
                    <div class="comm-count-info">
                      3 / 20
                    </div>
                  </div>
                  <div class="post-comment-wrapper">
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>21</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Amine</a>
                          <a href="#" class="comment-nickname">@ak0117</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-like.png" alt="">
                            <span>19</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>15</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <a href="#" class="load-more-link">Load more...</a>
                  </div>
                </div>
              </div>
              <div class="post-add-comment-block">
                <div class="avatar-wrap">
                  <img src="http://placehold.it/45x45" alt="">
                </div>
                <div class="post-add-com-input">
                  <input type="text" placeholder="Write a comment">
                </div>
              </div>
            </div>
          </div>
        </div>`
      },{
        "src": 'https://sachinchoolur.github.io/lightGallery/static/img/2-1600.jpg',
        'thumb': 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-2.jpg',
        'subHtml': `<div class='cover-block' style='display:none;'>
          <div class='cover-block-inner comment-block'>
            <ul class="modal-outside-link-list white-bg">
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-angle-left"></i>
                  </div>
                  <span>Back</span>
                </a>
              </li>
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-flag-icon"></i>
                  </div>
                  <span>Report</span>
                </a>
              </li>
            </ul>
            <div class="top-gallery-content">
              <div class="sub-post-info">
                <ul class="sub-list">
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-popularity-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">#4</div>
                      <div class="sub-txt">Popularity</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-safety-big-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">9/10</div>
                      <div class="sub-txt">Safety</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-user-rating-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">4.8/5</div>
                      <div class="sub-txt">User rating</div>
                    </div>
                  </li>
                </ul>
                <div class="follow-btn-wrap">
                  <button type="button" class="btn btn-light-primary btn-bordered btn-icon-side btn-icon-right">
                    Interested
                    <span class="icon-wrap"><i class="trav-view-plan-icon"></i></span>
                  </button>
                </div>
              </div>
            </div>
            <div class="map-preview">
              <img src="./assets/image/map-preview.jpg" alt="map">
            </div>
            <div class='gallery-comment-wrap'>
              <div class='gallery-comment-inner mCustomScrollbar'>
                <div class="top-gallery-content gallery-comment-top">
                  <div class="top-info-layer">
                    <div class="post-top-round-icon-wrap">
                      <i class="trav-event-icon"></i>
                    </div>
                    <div class="top-info-txt">
                      <div class="preview-txt">
                        <a class="post-name-link" href="#">Quick Chek New Jersey Festival of Ballooning</a>
                        <p>
                          <span>By</span>
                          <a href="#" class="post-name-link">Donec Ultrices Nunc</a>
                          <span class="dot">·</span>
                          <span>8 Days left</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="gal-com-footer-info">
                    <div class="post-foot-block post-reaction">
                      <img src="./assets/image/reaction-icon-smile-only.png" alt="smile">
                      <span><b>2</b> Reactions</span>
                    </div>
                    <div class="post-foot-block post-comment-place">
                      <i class="trav-location"></i>
                      <span class="place-name">New York City</span>
                    </div>
                  </div>
                </div>
                <div class="post-comment-layer">
                  <div class="post-comment-top-info">
                    <div class="comm-count-info">
                      5 Comments
                    </div>
                    <div class="comm-count-info">
                      3 / 20
                    </div>
                  </div>
                  <div class="post-comment-wrapper">
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>21</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Amine</a>
                          <a href="#" class="comment-nickname">@ak0117</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-like.png" alt="">
                            <span>19</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>15</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <a href="#" class="load-more-link">Load more...</a>
                  </div>
                </div>
              </div>
              <div class="post-add-comment-block">
                <div class="avatar-wrap">
                  <img src="http://placehold.it/45x45" alt="">
                </div>
                <div class="post-add-com-input">
                  <input type="text" placeholder="Write a comment">
                </div>
              </div>
            </div>
          </div>
        </div>`
      }],
      addClass: 'main-gallery-block',
      pager: false,
      hideControlOnEnd: true,
      loop: false,
      slideEndAnimatoin : false,
      thumbnail:true,
      toogleThumb: false,
      thumbHeight: 100,
      thumbMargin: 20,
      thumbContHeight: 180,
      actualSize: false,
      zoom: false,
      autoplayControls: false,
      fullScreen: false,
      download: false,
      counter: false,
      mousewheel: false,
      appendSubHtmlTo: 'lg-item',
      prevHtml: '<i class="trav-angle-left"></i>',
      nextHtml: '<i class="trav-angle-right"></i>',
      hideBarsDelay: 100000000
    });

    $lg.on('onAfterOpen.lg',function(){
      $('body').css('overflow','hidden');
      let itemArr = [], thumbArr = [];
      let galleryBlock = $('.main-gallery-block');
      let galleryItem = $(galleryBlock).find('.lg-item');
      let galleryThumb = $(galleryBlock).find('.lg-thumb-item');
      $.each(galleryItem, function(i, val){
        // itemArr.push(val);
      });
      $.each(galleryThumb, function(i, val){
        // thumbArr.push(val);
        // let startCnt = `<div class="thumb-txt"><i class="trav-flag-icon"></i> start</div>`;
        // let startCntEmpty = `<div class="thumb-txt">&nbsp;</div>`;
        // let placetxt = 'rabar-sale airport'
        // let placeName = `<div class="thumb-txt">${placetxt}</div>`;
        // if(i == 0){
        //   $(val).addClass('place-thumb');
        //   $(val).append(placeName).prepend(startCnt);
        // }
        // if(i == 2){
        //   $(val).addClass('place-thumb');
        //   $(val).append(placeName).prepend(startCntEmpty);
        // }
      });
    });
    $lg.on('onBeforeClose.lg',function(){
      $('body').removeAttr('style');
    });
    let setWidth = function(){
      let mainBlock = $('.main-gallery-block');
      let subTtlWrp = $(mainBlock).find('.lg-current .cover-block');
      let subTtl = $(mainBlock).find('.lg-current .cover-block-inner');

      let slide = $('.main-gallery-block .lg-item');
      let currentItem = $('.main-gallery-block .lg-current');
      let currentImgWrap = $('.main-gallery-block .lg-current .lg-img-wrap');
      let currentImg = $('.main-gallery-block .lg-current .lg-image');
      let currentCommentIs = $(subTtl).hasClass('comment-block');
      let currentImgPos = $(currentImg).position().top;
      setTimeout(function(){
        let commentWidth = $('.main-gallery-block .lg-current .gallery-comment-wrap').width();
        let currentWidth = $(mainBlock).find('.lg-current .lg-object').width();
        if(currentCommentIs){
          // console.log('yes');
          $(currentImgWrap).css('padding-right', commentWidth);
          $(subTtl).css('width', currentWidth + commentWidth);
        } else{
          $(currentImgWrap).removeAttr('style');
          $(subTtl).css('width', currentWidth);
        }
        $(subTtlWrp).show();
        $('.mCustomScrollbar').mCustomScrollbar();
      }, 500);
    }

    $lg.on('onSlideItemLoad.lg',function(e){
      
      setWidth();
      $(window).on('resize', function(){
        setWidth();
      })
    });
    $lg.on('onAfterSlide.lg',function(){
      setWidth();
    });
  });

  // country gallery popup
  $('#countryPopupTrigger').on('click', function(){
    
    let $lg = $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
        "src": 'https://placehold.it/750x500',
        'thumb': 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-2.jpg',
        'subHtml': `<div class='cover-block' style='display:none;'>
          <div class='cover-block-inner'>
            <ul class="modal-outside-link-list white-bg">
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-comment-icon"></i>
                    <span class="count">189</span>
                  </div>
                  <span>Comments</span>
                </a>
              </li>
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-flag-icon"></i>
                  </div>
                  <span>Report</span>
                </a>
              </li>
            </ul>
            <div class="top-gallery-content">
              <div class="top-info-layer photo-layer">
                <div class="top-avatar-wrap">
                  <img src="http://placehold.it/50x50" alt="">
                </div>
                <div class="top-info-txt">
                  <div class="preview-txt">
                    <p class="photo-name" href="#">Julie</p> 
                    <p class="photo-txt">
                      <span>uploaded a</span>&nbsp;
                      <b>photo</b>&nbsp;
                      <span>2 hours ago</span>
                    </p>
                  </div>
                  <div class="reaction-wrap">
                    <img src="./assets/image/smile-heart.svg" alt="smile">
                    <span>185</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="photo-bottom">
              <div class="photo-caption">
                <div class="avatar-wrap">
                  <img src="http://placehold.it/25x25" alt="ava">
                </div>
                <div class="photo-label-txt">Where did you take this picture?</div>
              </div>
              <div class="photo-caption">
                <div class="avatar-wrap">
                  <img src="http://placehold.it/25x25" alt="ava">
                </div>
                <div class="photo-label-txt">I really love to walk in this beautiful street</div>
              </div>
            </div>
          </div>
        </div>`
      },{
        "src": 'https://sachinchoolur.github.io/lightGallery/static/img/2-1600.jpg',
        'thumb': 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-2.jpg',
        'subHtml': `<div class='cover-block' style='display:none;'>
          <div class='cover-block-inner comment-block'>
            <ul class="modal-outside-link-list white-bg">
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-angle-left"></i>
                  </div>
                  <span>Back</span>
                </a>
              </li>
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-flag-icon"></i>
                  </div>
                  <span>Report</span>
                </a>
              </li>
            </ul>
            <div class='gallery-comment-wrap'>
              <div class='gallery-comment-inner mCustomScrollbar'>
                <div class="top-gallery-content gallery-comment-top">
                  <div class="top-info-layer">
                    <div class="top-avatar-wrap">
                      <img src="http://placehold.it/50x50" alt="">
                    </div>
                    <div class="top-info-txt">
                      <div class="preview-txt">
                        <a class="dest-name" href="#">Julie</a> 
                        <p class="dest-place">uploaded a <b>photo</b> <span class="date">2 hours ago</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="gallery-comment-txt">
                    <p>This is an amazing street to walk around and do some shopping</p>
                  </div>
                  <div class="gal-com-footer-info">
                    <div class="post-foot-block post-reaction">
                      <i class="trav-heart-fill-icon"></i>
                      <span><b>185</b></span>
                    </div>
                    <div class="post-foot-block post-comment-place">
                      <i class="trav-location"></i>
                      <span class="place-name">510 LaGuardia Pl, Paris, France</span>
                    </div>
                  </div>
                </div>
                <div class="post-comment-layer">
                  <div class="post-comment-top-info">
                    <div class="comm-count-info">
                      5 Comments
                    </div>
                    <div class="comm-count-info">
                      3 / 20
                    </div>
                  </div>
                  <div class="post-comment-wrapper">
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>21</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row happen-event">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Amine</a>
                          <a href="#" class="comment-nickname">@ak0117</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-like.png" alt="">
                            <span>19</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>15</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <a href="#" class="load-more-link">Load more...</a>
                  </div>
                </div>
              </div>
              <div class="post-add-comment-block">
                <div class="avatar-wrap">
                  <img src="http://placehold.it/45x45" alt="">
                </div>
                <div class="post-add-com-input">
                  <input type="text" placeholder="Write a comment">
                </div>
              </div>
            </div>
          </div>
        </div>`
      },{
        "src": 'https://sachinchoolur.github.io/lightGallery/static/img/2-1600.jpg',
        'thumb': 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-2.jpg',
        'subHtml': `<div class='cover-block' style='display:none;'>
          <div class='cover-block-inner'>
            <ul class="modal-outside-link-list white-bg">
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-comment-icon"></i>
                    <span class="count">189</span>
                  </div>
                  <span>Comments</span>
                </a>
              </li>
            </ul>
            <div class="top-gallery-content">
              <div class="top-info-layer">
                <div class="top-avatar-wrap">
                  <img src="http://placehold.it/50x50" alt="">
                </div>
                <div class="top-info-txt">
                  <div class="preview-txt">
                    <p class="dest-name" href="#">U.S.Embassy in Morocco</p> 
                    <p class="dest-place">Embassy</p>
                  </div>
                  <div class="follow-btn-wrap">
                    <button type="button" class="btn btn-light-primary btn-bordered btn-icon-side btn-icon-right">
                      Follow
                      <span class="icon-wrap"><i class="trav-view-plan-icon"></i></span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="sub-post-info">
                <ul class="sub-list">
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-popularity-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">#4</div>
                      <div class="sub-txt">Popularity</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-safety-big-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">9/10</div>
                      <div class="sub-txt">Safety</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-user-rating-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">4.8/5</div>
                      <div class="sub-txt">User rating</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="map-preview">
              <img src="./assets/image/map-preview.jpg" alt="map">
            </div>
          </div>
        </div>`
      },{
        "src": './assets/image/event-map-image.jpg',
        'thumb': 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-2.jpg',
        'subHtml': `<div class='cover-block' style='display:none;'>
          <div class='cover-block-inner comment-block map-layout'>
            <ul class="modal-outside-link-list white-bg">
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-angle-left"></i>
                  </div>
                  <span>Back</span>
                </a>
              </li>
            </ul>
            <div class="top-gallery-content">
              <div class="sub-post-info">
                <ul class="sub-list">
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-popularity-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">#4</div>
                      <div class="sub-txt">Popularity</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-safety-big-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">9/10</div>
                      <div class="sub-txt">Safety</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-user-rating-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">4.8/5</div>
                      <div class="sub-txt">User rating</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="follow-btn-wrap">
                <button type="button" class="btn btn-light-primary btn-bordered btn-icon-side btn-icon-right">
                  Follow
                  <span class="icon-wrap"><i class="trav-view-plan-icon"></i></span>
                </button>
              </div>
            </div>
            <div class="map-preview">
              <img src="./assets/image/event-image.jpg" alt="map">
            </div>
            <div class='gallery-comment-wrap'>
              <div class='gallery-comment-inner mCustomScrollbar'>
                <div class="top-gallery-content gallery-comment-top">
                  <div class="top-info-layer">
                    <div class="top-avatar-wrap">
                      <img src="http://placehold.it/50x50" alt="" class="mCS_img_loaded">
                    </div>
                    <div class="top-info-txt">
                      <div class="preview-txt">
                        <p class="dest-name">U.S. Embassy in Morocco</p> 
                        <p class="dest-place">Embassy</p>
                      </div>
                    </div>
                  </div>
                  <div class="gal-com-footer-info">
                    <div class="post-foot-block post-reaction">
                      <img src="./assets/image/reaction-icon-smile-only.png" alt="smile">
                      <span><b>2</b> Reactions</span>
                    </div>
                  </div>
                </div>
                <div class="post-comment-layer">
                  <div class="post-comment-top-info">
                    <div class="comm-count-info">
                      5 Comments
                    </div>
                    <div class="comm-count-info">
                      3 / 20
                    </div>
                  </div>
                  <div class="post-comment-wrapper">
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>21</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Amine</a>
                          <a href="#" class="comment-nickname">@ak0117</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-like.png" alt="">
                            <span>19</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>15</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <a href="#" class="load-more-link">Load more...</a>
                  </div>
                </div>
              </div>
              <div class="post-add-comment-block">
                <div class="avatar-wrap">
                  <img src="http://placehold.it/45x45" alt="">
                </div>
                <div class="post-add-com-input">
                  <input type="text" placeholder="Write a comment">
                </div>
              </div>
            </div>
          </div>
        </div>`
      },{
        "src": 'https://sachinchoolur.github.io/lightGallery/static/img/2-1600.jpg',
        'thumb': 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-2.jpg',
        'subHtml': `<div class='cover-block' style='display:none;'>
          <div class='cover-block-inner'>
            <ul class="modal-outside-link-list white-bg">
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-comment-icon"></i>
                    <span class="count">189</span>
                  </div>
                  <span>Comments</span>
                </a>
              </li>
            </ul>
            <div class="top-gallery-content">
              <div class="top-info-layer">
                <div class="top-avatar-wrap">
                  <img src="http://placehold.it/50x50" alt="">
                </div>
                <div class="top-info-txt">
                  <div class="preview-txt">
                    <p class="dest-name" href="#">New York City</p> 
                    <p class="dest-place">City in New York, United States</p>
                  </div>
                  <div class="follow-btn-wrap">
                    <button type="button" class="btn btn-light-primary btn-bordered btn-icon-side btn-icon-right">
                      Interested
                      <span class="icon-wrap"><i class="trav-view-plan-icon"></i></span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="sub-post-info">
                <ul class="sub-list">
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-popularity-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">8.538 M</div>
                      <div class="sub-txt">Population</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-safety-big-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">9/10</div>
                      <div class="sub-txt">Safety</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-user-rating-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">4.8/5</div>
                      <div class="sub-txt">User rating</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="map-preview">
              <img src="./assets/image/map-preview.jpg" alt="map">
            </div>
          </div>
        </div>`
      },{
        "src": './assets/image/event-map-image.jpg',
        'thumb': 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-2.jpg',
        'subHtml': `<div class='cover-block' style='display:none;'>
          <div class='cover-block-inner comment-block map-layout'>
            <ul class="modal-outside-link-list white-bg">
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-angle-left"></i>
                  </div>
                  <span>Back</span>
                </a>
              </li>
            </ul>
            <div class="top-gallery-content">
              <div class="sub-post-info">
                <ul class="sub-list">
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-popularity-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">8.538 M</div>
                      <div class="sub-txt">Population</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-safety-big-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">9/10</div>
                      <div class="sub-txt">Safety</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-user-rating-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">4.8/5</div>
                      <div class="sub-txt">User rating</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="follow-btn-wrap">
                <button type="button" class="btn btn-light-primary btn-bordered btn-icon-side btn-icon-right">
                  Follow
                  <span class="icon-wrap"><i class="trav-view-plan-icon"></i></span>
                </button>
              </div>
            </div>
            <div class="map-preview">
              <img src="./assets/image/event-image.jpg" alt="map">
            </div>
            <div class='gallery-comment-wrap'>
              <div class='gallery-comment-inner mCustomScrollbar'>
                <div class="top-gallery-content gallery-comment-top">
                  <div class="top-info-layer">
                    <div class="top-avatar-wrap">
                      <img src="http://placehold.it/50x50" alt="" class="mCS_img_loaded">
                    </div>
                    <div class="top-info-txt">
                      <div class="preview-txt">
                        <p class="dest-name">New York City</p> 
                        <p class="dest-place">City in New York, United States</p>
                      </div>
                    </div>
                  </div>
                  <div class="gal-com-footer-info">
                    <div class="post-foot-block post-reaction">
                      <img src="./assets/image/reaction-icon-smile-only.png" alt="smile">
                      <span><b>2</b> Reactions</span>
                    </div>
                  </div>
                </div>
                <div class="post-comment-layer">
                  <div class="post-comment-top-info">
                    <div class="comm-count-info">
                      5 Comments
                    </div>
                    <div class="comm-count-info">
                      3 / 20
                    </div>
                  </div>
                  <div class="post-comment-wrapper">
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>21</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Amine</a>
                          <a href="#" class="comment-nickname">@ak0117</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-like.png" alt="">
                            <span>19</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>15</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <a href="#" class="load-more-link">Load more...</a>
                  </div>
                </div>
              </div>
              <div class="post-add-comment-block">
                <div class="avatar-wrap">
                  <img src="http://placehold.it/45x45" alt="">
                </div>
                <div class="post-add-com-input">
                  <input type="text" placeholder="Write a comment">
                </div>
              </div>
            </div>
          </div>
        </div>`
      },{
        "src": 'https://sachinchoolur.github.io/lightGallery/static/img/2-1600.jpg',
        'thumb': 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-2.jpg',
        'subHtml': `<div class='cover-block' style='display:none;'>
          <div class='cover-block-inner'>
            <ul class="modal-outside-link-list white-bg">
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-comment-icon"></i>
                    <span class="count">189</span>
                  </div>
                  <span>Comments</span>
                </a>
              </li>
            </ul>
            <div class="top-gallery-content">
              <div class="top-info-layer">
                <div class="top-avatar-wrap">
                  <img src="http://placehold.it/50x50" alt="">
                </div>
                <div class="top-info-txt">
                  <div class="preview-txt">
                    <p class="dest-name" href="#">Grand Legacy at the Park</p> 
                    <p class="dest-place">Hotel &nbsp;<span class="dot">·</span>&nbsp; <span>6.27 km</span></p>
                  </div>
                  <div class="follow-btn-wrap">
                    <button type="button" class="btn btn-light-primary btn-bordered btn-icon-side btn-icon-right">
                      Interested
                      <span class="icon-wrap"><i class="trav-view-plan-icon"></i></span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="sub-post-info">
                <ul class="sub-list">
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-popularity-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">#4</div>
                      <div class="sub-txt">Popularity</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-safety-big-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">9/10</div>
                      <div class="sub-txt">Safety</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-user-rating-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">4.8/5</div>
                      <div class="sub-txt">User rating</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="map-preview">
              <img src="./assets/image/map-preview.jpg" alt="map">
            </div>
          </div>
        </div>`
      },{
        "src": './assets/image/event-map-image.jpg',
        'thumb': 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-2.jpg',
        'subHtml': `<div class='cover-block' style='display:none;'>
          <div class='cover-block-inner comment-block'>
            <ul class="modal-outside-link-list white-bg">
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-angle-left"></i>
                  </div>
                  <span>Back</span>
                </a>
              </li>
            </ul>
            <div class="top-gallery-content">
              <div class="sub-post-info">
                <ul class="sub-list">
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-popularity-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">#4</div>
                      <div class="sub-txt">Popularity</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-safety-big-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">9/10</div>
                      <div class="sub-txt">Safety</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-user-rating-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">4.8/5</div>
                      <div class="sub-txt">User rating</div>
                    </div>
                  </li>
                </ul>
                <div class="follow-btn-wrap">
                  <button type="button" class="btn btn-light-primary btn-bordered btn-icon-side btn-icon-right">
                    Follow
                    <span class="icon-wrap"><i class="trav-view-plan-icon"></i></span>
                  </button>
                </div>
              </div>
            </div>
            <div class="map-preview">
              <img src="./assets/image/event-image.jpg" alt="map">
            </div>
            <div class='gallery-comment-wrap'>
              <div class='gallery-comment-inner mCustomScrollbar'>
                <div class="top-gallery-content gallery-comment-top">
                  <div class="top-info-layer">
                    <div class="top-avatar-wrap">
                      <img src="http://placehold.it/50x50" alt="">
                    </div>
                    <div class="top-info-txt">
                      <div class="preview-txt">
                        <p class="dest-name" href="#">Grand Legacy At The Park</p> 
                        <p class="dest-place">Hotel - 6.27 km from Disneyland</p>
                      </div>
                    </div>
                  </div>
                  <div class="gal-com-footer-info">
                    <div class="post-foot-block post-reaction">
                      <img src="./assets/image/reaction-icon-smile-only.png" alt="smile">
                      <span><b>2</b> Reactions</span>
                    </div>
                  </div>
                </div>
                <div class="post-comment-layer">
                  <div class="post-comment-top-info">
                    <div class="comm-count-info">
                      5 Comments
                    </div>
                    <div class="comm-count-info">
                      3 / 20
                    </div>
                  </div>
                  <div class="post-comment-wrapper">
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>21</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Amine</a>
                          <a href="#" class="comment-nickname">@ak0117</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-like.png" alt="">
                            <span>19</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>15</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <a href="#" class="load-more-link">Load more...</a>
                  </div>
                </div>
              </div>
              <div class="post-add-comment-block">
                <div class="avatar-wrap">
                  <img src="http://placehold.it/45x45" alt="">
                </div>
                <div class="post-add-com-input">
                  <input type="text" placeholder="Write a comment">
                </div>
              </div>
            </div>
          </div>
        </div>`
      },{
        "src": 'https://sachinchoolur.github.io/lightGallery/static/img/1-1600.jpg',
        'thumb': 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-1.jpg',
        'subHtml': `<div class='cover-block' style='display:none;'>
          <div class='cover-block-inner'>
            <ul class="modal-outside-link-list white-bg">
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-comment-icon"></i>
                    <span class="count">189</span>
                  </div>
                  <span>Comments</span>
                </a>
              </li>
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-flag-icon"></i>
                  </div>
                  <span>Report</span>
                </a>
              </li>
            </ul>
            <div class="top-gallery-content">
              <div class="top-info-layer">
                <div class="post-top-round-icon-wrap">
                  <i class="trav-event-icon"></i>
                </div>
                <div class="top-info-txt">
                  <div class="preview-txt">
                    <a class="post-name-link" href="#">Quick Chek New Jersey Festival of Ballooning</a>
                    <p>
                      <span>By</span>
                      <a href="#" class="post-name-link">Donec Ultrices Nunc</a>
                      <span>on 2 Nov 2017</span>
                    </p>
                  </div>
                  <div class="follow-btn-wrap">
                    <button type="button" class="btn btn-light-primary btn-bordered btn-icon-side btn-icon-right">
                      Follow
                      <span class="icon-wrap"><i class="trav-view-plan-icon"></i></span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="sub-post-info">
                <ul class="sub-list">
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-comment-plus-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">28K</div>
                      <div class="sub-txt">Followers</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-day-duration-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">3 Days</div>
                      <div class="sub-txt">Duration</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-user-rating-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">4.8/5</div>
                      <div class="sub-txt">User rating</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="map-preview">
              <img src="./assets/image/map-preview.jpg" alt="map">
            </div>
          </div>
        </div>`
      },{
        "src": './assets/image/event-map-image.jpg',
        'thumb': 'https://sachinchoolur.github.io/lightGallery/static/img/thumb-2.jpg',
        'subHtml': `<div class='cover-block' style='display:none;'>
          <div class='cover-block-inner comment-block map-layout'>
            <ul class="modal-outside-link-list white-bg">
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-angle-left"></i>
                  </div>
                  <span>Back</span>
                </a>
              </li>
              <li class="outside-link">
                <a href="#">
                  <div class="round-icon">
                    <i class="trav-flag-icon"></i>
                  </div>
                  <span>Report</span>
                </a>
              </li>
            </ul>
            <div class="top-gallery-content">
              <div class="sub-post-info">
                <ul class="sub-list">
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-comment-plus-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">28K</div>
                      <div class="sub-txt">Followers</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-day-duration-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">3 Days</div>
                      <div class="sub-txt">Duration</div>
                    </div>
                  </li>
                  <li>
                    <div class="icon-wrap">
                      <i class="trav-user-rating-icon"></i>
                    </div>
                    <div class="ctxt">
                      <div class="top-txt">4.8/5</div>
                      <div class="sub-txt">User rating</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="follow-btn-wrap">
                <button type="button" class="btn btn-light-primary btn-bordered btn-icon-side btn-icon-right">
                  Follow
                  <span class="icon-wrap"><i class="trav-view-plan-icon"></i></span>
                </button>
              </div>
            </div>
            <div class="map-preview">
              <img src="./assets/image/event-image.jpg" alt="map">
            </div>
            <div class='gallery-comment-wrap'>
              <div class='gallery-comment-inner mCustomScrollbar'>
                <div class="top-gallery-content gallery-comment-top">
                  <div class="top-info-layer">
                    <div class="post-top-round-icon-wrap">
                      <i class="trav-event-icon"></i>
                    </div>
                    <div class="top-info-txt">
                      <div class="preview-txt">
                        <a class="post-name-link" href="#">Quick Chek New Jersey Festival of Ballooning</a>
                        <p>
                          <span>By</span>
                          <a href="#" class="post-name-link">Donec Ultrices Nunc</a>
                          <span class="dot">·</span>
                          <span>8 Days left</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="gal-com-footer-info">
                    <div class="post-foot-block post-reaction">
                      <img src="./assets/image/reaction-icon-smile-only.png" alt="smile">
                      <span><b>2</b> Reactions</span>
                    </div>
                    <div class="post-foot-block post-comment-place">
                      <i class="trav-location"></i>
                      <span class="place-name">New York City</span>
                    </div>
                  </div>
                </div>
                <div class="post-comment-layer">
                  <div class="post-comment-top-info">
                    <div class="comm-count-info">
                      5 Comments
                    </div>
                    <div class="comm-count-info">
                      3 / 20
                    </div>
                  </div>
                  <div class="post-comment-wrapper">
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>21</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Amine</a>
                          <a href="#" class="comment-nickname">@ak0117</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-like.png" alt="">
                            <span>19</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <div class="post-comment-row">
                      <div class="post-com-avatar-wrap">
                        <img src="http://placehold.it/45x45" alt="">
                      </div>
                      <div class="post-comment-text">
                        <div class="post-com-name-layer">
                          <a href="#" class="comment-name">Katherin</a>
                          <a href="#" class="comment-nickname">@katherin</a>
                        </div>
                        <div class="comment-txt">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus labore tenetur vel. Neque molestiae repellat culpa qui odit delectus.</p>
                        </div>
                        <div class="comment-bottom-info">
                          <div class="com-reaction">
                            <img src="./assets/image/icon-smile.png" alt="">
                            <span>15</span>
                          </div>
                          <div class="com-time">6 hours ago</div>
                        </div>
                      </div>
                    </div>
                    <a href="#" class="load-more-link">Load more...</a>
                  </div>
                </div>
              </div>
              <div class="post-add-comment-block">
                <div class="avatar-wrap">
                  <img src="http://placehold.it/45x45" alt="">
                </div>
                <div class="post-add-com-input">
                  <input type="text" placeholder="Write a comment">
                </div>
              </div>
            </div>
          </div>
        </div>`
      }],
      addClass: 'main-gallery-block',
      pager: false,
      hideControlOnEnd: true,
      loop: false,
      slideEndAnimatoin : false,
      thumbnail:true,
      toogleThumb: false,
      thumbHeight: 100,
      thumbMargin: 20,
      thumbContHeight: 180,
      actualSize: false,
      zoom: false,
      autoplayControls: false,
      fullScreen: false,
      download: false,
      counter: false,
      mousewheel: false,
      appendSubHtmlTo: 'lg-item',
      prevHtml: '<i class="trav-angle-left"></i>',
      nextHtml: '<i class="trav-angle-right"></i>',
      hideBarsDelay: 100000000
    });

    $lg.on('onAfterOpen.lg',function(){
      $('body').css('overflow','hidden');
      let itemArr = [], thumbArr = [];
      let galleryBlock = $('.main-gallery-block');
      let galleryItem = $(galleryBlock).find('.lg-item');
      let galleryThumb = $(galleryBlock).find('.lg-thumb-item');
      $.each(galleryItem, function(i, val){
        // itemArr.push(val);
      });
      $.each(galleryThumb, function(i, val){
        // thumbArr.push(val);
        // let startCnt = `<div class="thumb-txt"><i class="trav-flag-icon"></i> start</div>`;
        // let startCntEmpty = `<div class="thumb-txt">&nbsp;</div>`;
        let cityName = 'new york city'
        let cityThumb = `<div class="thumb-txt">${cityName}</div>`;
        // if(i == 0){
        //   $(val).addClass('place-thumb');
        //   $(val).append(placeName).prepend(startCnt);
        // }
        if(i == 4 || i == 5){
          $(val).addClass('city-thumb');
          $(val).append(cityThumb);
        }
      });
    });
    $lg.on('onBeforeClose.lg',function(){
      $('body').removeAttr('style');
    });
    let setWidth = function(){
      let mainBlock = $('.main-gallery-block');
      let subTtlWrp = $(mainBlock).find('.lg-current .cover-block');
      let subTtl = $(mainBlock).find('.lg-current .cover-block-inner');

      let slide = $('.main-gallery-block .lg-item');
      let currentItem = $('.main-gallery-block .lg-current');
      let currentImgWrap = $('.main-gallery-block .lg-current .lg-img-wrap');
      let currentImg = $('.main-gallery-block .lg-current .lg-image');
      let currentCommentIs = $(subTtl).hasClass('comment-block');
      let currentImgPos = $(currentImg).position().top;
      setTimeout(function(){
        let commentWidth = $('.main-gallery-block .lg-current .gallery-comment-wrap').width();
        let currentWidth = $(mainBlock).find('.lg-current .lg-object').width();
        if(currentCommentIs){
          // console.log('yes');
          $(currentImgWrap).css('padding-right', commentWidth);
          $(subTtl).css('width', currentWidth + commentWidth);
        } else{
          $(currentImgWrap).removeAttr('style');
          $(subTtl).css('width', currentWidth);
        }
        $(subTtlWrp).show();
        $('.mCustomScrollbar').mCustomScrollbar();
      }, 500);
    }

    $lg.on('onSlideItemLoad.lg',function(e){
      
      setWidth();
      $(window).on('resize', function(){
        setWidth();
      })
    });
    $lg.on('onAfterSlide.lg',function(){
      setWidth();
    });
  });

    // country gallery popup
  $('#visaPopupTrigger').on('click', function(){
    
    let $lg = $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
        "src": './assets/image/visa-slide-image.jpg',
        'thumb': './assets/image/visa-slide-image.jpg'
      },{
        "src": './assets/image/visa-slide-image.jpg',
        'thumb': './assets/image/visa-slide-image.jpg'
      }],
      addClass: 'main-gallery-block',
      pager: false,
      hideControlOnEnd: true,
      loop: false,
      slideEndAnimatoin : false,
      thumbnail:true,
      toogleThumb: false,
      thumbHeight: 100,
      thumbMargin: 20,
      thumbContHeight: 180,
      actualSize: false,
      zoom: false,
      autoplayControls: false,
      fullScreen: false,
      download: false,
      counter: false,
      mousewheel: false,
      appendSubHtmlTo: 'lg-item',
      prevHtml: '<i class="trav-angle-left"></i>',
      nextHtml: '<i class="trav-angle-right"></i>',
      hideBarsDelay: 100000000
    });
  });

  $('.side-trip-tab .trip-tab-block').on('click', function(e){
    $('.side-trip-tab .trip-tab-block').removeClass('current-tab');
    $(this).addClass('current-tab');
  });

  $('.post-top-map-tabs .map-tab').on('click', function(){
    let tabWrap = $(this).parents('.post-top-map-tabs');
    let mapAreaItem = $(this).parents('.post-map-block').find('.area-txt');
    let getTxtName = $(this).data('tab');
    
    $(tabWrap).find('.map-tab').removeClass('current');
    $(this).addClass('current');
    
    $(mapAreaItem).hide();
    $('#'+getTxtName).show();
  });

  // uinoslider

  let uiSliderFn = function($id, $curCountId, $totalId, $totalCount, $startCount){

    var softSlider1 = document.getElementById($id),
        paddingMin = document.getElementById($curCountId),
        paddingMax = document.getElementById($totalId);
  
    var totalCount = $totalCount;      
        
    noUiSlider.create(softSlider1, {
      start: $startCount,
      connect: true,
      step: 10,
      range: {
        min: 0,
        max: $totalCount
      }
    });
  
    softSlider1.noUiSlider.on('update', function ( values, handle ) {
      var count = values[handle]/10;
      if ( handle ) {
        paddingMax.innerHTML = count;
      } else {
        paddingMax.innerHTML = $totalCount;
        paddingMin.innerHTML = count;
      }
    });
  };

  if($("#sliderPollution, #costOfLiving, #crimeRate, #qualityOfLife, #sliderPollution1, #costOfLiving1, #crimeRate1, #qualityOfLife1").length){
    uiSliderFn('sliderPollution', 'current', 'total', 150, 50);
    uiSliderFn('costOfLiving', 'currentCost', 'totalCost', 150, 70);
    uiSliderFn('crimeRate', 'currentRate', 'totalRate', 150, 60);
    uiSliderFn('qualityOfLife', 'currentQuolity', 'totalQuolity', 150, 80);
    uiSliderFn('sliderPollution1', 'current1', 'total1', 150, 50);
    uiSliderFn('costOfLiving1', 'currentCost1', 'totalCost1', 150, 70);
    uiSliderFn('crimeRate1', 'currentRate1', 'totalRate1', 150, 60);
    uiSliderFn('qualityOfLife1', 'currentQuolity1', 'totalQuolity1', 150, 80);
  }

  // location search layer

  var iIsOpen = false;

  $('body').bind('click',function (e) {
    e.stopPropagation();
    var $clicked = $(e.target); 
    if(!($clicked.is('#locationDrop') || $clicked.is('.loc-search-block') || $clicked.parents().is('.loc-search-block'))){
      if (iIsOpen == true) {
        $('.location-drop-wrap').removeClass('show-result');
        $('#locSearchInput').val('');
        iIsOpen = false;
      }
    }
  });

  $('#locationDrop').click(function (e) {
    e.preventDefault();
    $('.location-drop-wrap').addClass('show-result');
    $('#locSearchInput').focus();
    iIsOpen = true;
  });

  $('[data-toggle=modal]').on('click',function(e){
    e.preventDefault();
    let dataTarget = $(this).attr('data-target');
    $(dataTarget).modal();
  });

  $('[data-toggle=collapse]').on('click',function(e){
    e.preventDefault();
    let dataTarget = $(this).attr('data-target');
    $(dataTarget).collapse('toggle');
  })

});
