$(document).ready(function() {
    doIntro();
    playGame();
});

var hadoukenSound = false;
function playHadouken () {
  hadoukenSound = !hadoukenSound;
  if (hadoukenSound) {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  }
}

var coolSound = false;
function playCool () {
  coolSound = !coolSound;
  if (coolSound) {
    $('#theme-song')[0].pause();
    // $('#cool')[0].load()
    $('#cool')[0].play();
  }
}


function playGame() {
  $('.ryu').mouseenter(function() {
    $('.ryu-action').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-action').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-action').hide();  
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
      .animate(
        {'left': '300px'},
        500,
        function() {
          $(this).stop();
          $(this).hide();
          $(this).css('left', '-212px');
        }
      );
  })
  .mouseup(function() {
    $('.ryu-action').hide();
    $('.ryu-still').show();
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 88) {
      playCool();
      $('.ryu-action').hide();
      $('.ryu-cool').show();
    }   
  }).keyup(function(e) {
    if (e.keyCode == 88) {
      $('#cool')[0].pause();
      $('#cool')[0].load();
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
  });
}

function doIntro() {
  $('#theme-song')[0].volume = 0.3;
  $('#theme-song')[0].play();
  $('.sf-logo').fadeIn(3500, function() {
    $(this).fadeOut(1000, function() {
      $('.brought-by').fadeIn(1500, function() {
        $(this).fadeOut(1000, function() {
          $('.jquery-logo').fadeIn(1500, function() {
            $(this).fadeOut(1500, function() {
              $('.how-to').fadeIn(1000);
            });
          })
        })
      })
    })
  })
}
