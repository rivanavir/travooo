$(document).ready(function(){

  $('#menu-btn').click(function(){
    $('#sidebar').toggleClass('toggled');
    // $('#sidebar').slideToggle('slow', { direction: 'left' }, 1000);
    // $('#main-content').animate({
    //   'margin-left' : $('#main-content').css('margin-left') == '0px' ? '279px' : '0px'
    // }, 1000);
  });

  $( "#slider" ).slider({
    value: 4,
    min: 1,
    max: 7,
    step: 1
  }).each(function() {

    // Get the options for this slider
    var opt = $(this).data().uiSlider.options;

    // Get the number of possible values
    var vals = opt.max - opt.min;

    // Space out values
    for (var i = 0; i <= vals; i++) {

      var el = $('<label>'+(i+1)+'</label>').css('left',(i/vals*100)+'%');

      $( "#slider" ).append(el);

    }
  });
  $('.close-modal, .btn-cancel').on('click', function(e){
    console.log(this);
    let modalBlock = $(this).parents('.block-modal');
    let modalWrap = $(this).parents('.inner-block');
    $(modalBlock).toggleClass('showed');
    $(modalWrap).find('.modal-background').toggleClass('showed');
  });

  $('[data-target="openModal"]').on('click', function(e){
    e.preventDefault();
    let modalId = $(this).data('href');
    let modalWrap = $(this).parents('.inner-block');
    $(modalId).toggleClass('showed');
    $(modalWrap).find('.modal-background').toggleClass('showed');
  })

});
