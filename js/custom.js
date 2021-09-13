


$(document).ready(function () {
    mainMenu();
    searchBox();
    scrollToDiv();
    tabs();
    popup();
    findcertification();
    //for individual pages
    fadeSlider("auto", 6);
    textSlider();
    backToTop();
    knowbgslider();

});


/*Find Certification*/

 /* $("#find").click(function(event){
    event.preventDefault();

    $("#certification").slideToggle(300);
    $("#find").toggleClass("findIcon");
    
  });
*/
 function  findcertification(){
		  $("#find").click(function(){
			  $("#certification").slideToggle(300).addClass("certifications-big");
			  $("#find").toggleClass("close")
			  });
		  
  };
  
 
  $("#mybigdata").click(function(){
    $("#dashboardlinks").slideToggle(300);
    $("#mybigdata").toggleClass("mytmiIcon");
    
  });

//login/register top div start
$('.mygdmi').each(function () {
    var $dropdown = $(this);

    $("#myGDMI", $dropdown).click(function (e) {
        e.preventDefault();
        $div = $("#dashboardlinks", $dropdown);
        $div.toggle(300);
//        $("#myGDMI").toggleClass("mytmiIcon");
        $("#dashboardlinks").not($div).hide();
        return false;
    });
	
	$('html').click(function () {
        $("#dashboardlinks").hide();
        $("#myGDMI").removeClass("mytmiIcon");
    });

});








/**************************************************
  mainMenu dropdown toggle
**************************************************/
function mainMenu(){
    //$(".menu-btn-close-div").hide();
    //$(".menu-btn-open img").css("width","40px");

    function iconChange(){
      //alert("iconchanged");
      if($(".main-menu").is(":visible")){
        $(".menu-btn-open img").attr("src","images/icons/close-icon-mini2.png");
      }else if($(".main-menu").is(":hidden")){
        $(".menu-btn-open img").attr("src","images/icons/menu.png");
      }
    };

    function menuToggle(){
      // $(".main-menu").slideToggle(250);
      $(".main-menu").toggleClass("menu-active");
      $(".main-menu-bg").fadeToggle(400);

      $("body").toggleClass("body-overflow");
      //$(".menu-btn-div").toggleClass("close-icon");
    };

    // on the event
    $(".menu-btn-open, .main-menu-bg, .menu-btn-close").click(function(event){
      event.preventDefault();
      menuToggle();      
    });


  };







/**************************************************
  add bgcolor to menu when down scrolled
**************************************************/
//auto load on window ready

  $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 20) {
          $(".fixed").addClass("dark-bg");
      }
      else {
          $(".fixed").removeClass("dark-bg");
      }
  });

  /***********************************************
      certification inner pages slider start
*************************************************/
  function knowbgslider() {
      var slideTime = 300;
      var slideChangeTime = 15000;
      var sliderWidth = $("#bgslider-container-knowtmi").width();
      var leftDefault = parseInt($(".bgslider-list-knowtmi").css('left'));
      var slideLeft = parseInt($(".bgslider-list-knowtmi").css('left')) + sliderWidth;
      var slideRight = parseInt($(".bgslider-list-knowtmi").css('left')) - sliderWidth;
      $(".bgslider-list-knowtmi li").width(sliderWidth);
      $(".bgslider-list-knowtmi li:first").before($(".bgslider-list-knowtmi li:last"));
      var resetTimer;

      function autoTimer() {
          resetTimer = setInterval(function () {
              $(".bgslider-list-knowtmi").animate({
                  'left': slideRight
              }, slideTime, function () {
                  $(".bgslider-list-knowtmi li:last").after($(".bgslider-list-knowtmi li:first"));
                  $(".bgslider-list-knowtmi").css('left', leftDefault);
                  var currentDot = $(".active-dot");
                  var nextDot = currentDot.next();
                  var prevDot = currentDot.prev();
                  if (nextDot.length === 0) {
                      nextDot = $('.bgslider-dotlist-knowtmi li').first();
                  }
                  currentDot.removeClass("active-dot");
                  nextDot.addClass("active-dot");
              });
          }, slideChangeTime);
      };
      autoTimer();
      $("#bgslider-prev").click(function () {
          $(".bgslider-list-knowtmi").animate({
              'left': slideLeft
          }, slideTime, function () {
              $(".bgslider-list-knowtmi li:first").before($(".bgslider-list-knowtmi li:last"));
              $(".bgslider-list-knowtmi").css('left', leftDefault);
              var currentDot = $(".active-dot");
              var nextDot = currentDot.next();
              var prevDot = currentDot.prev();
              if (prevDot.length === 0) {
                  prevDot = $('.bgslider-dotlist li').last();
              }
              currentDot.removeClass("active-dot");
              prevDot.addClass("active-dot");
              clearInterval(resetTimer);
              autoTimer();
          });
      });
      $("#bgslider-next").click(function () {
          $(".bgslider-list-knowtmi").animate({
              'left': slideRight
          }, slideTime, function () {
              $(".bgslider-list-knowtmi li:last").after($(".bgslider-list-knowtmi li:first"));
              $(".bgslider-list-knowtmi").css('left', leftDefault);
              var currentDot = $(".active-dot");
              var nextDot = currentDot.next();
              var prevDot = currentDot.prev();
              if (nextDot.length === 0) {
                  nextDot = $('.bgslider-dotlist-knowtmi li').first();
              }
              currentDot.removeClass("active-dot");
              nextDot.addClass("active-dot");
              clearInterval(resetTimer);
              autoTimer();
          });
      });
  };
  /**** certification inner pages slider end**********/

/**************************************************
  auto scroll to div
**************************************************/
function scrollToDiv() {
  $('a[href*=#]:not([href=#])').click(function() {
    
      var target = $(this.hash);
     // alert(target);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -100
        }, 500);
        return false;
      }
    
  });
};


/**************************************************
  back to top button
**************************************************/
function backToTop() {
  $(".back-to-top").css("display", "none");
  $(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
      $(".back-to-top").fadeIn(400);
    } else {
      $(".back-to-top").fadeOut(400);
    }
  });
  $(".back-to-top").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 500);
  });
};


/**************************************************
  for program page tabbing
**************************************************/
function tabs(){
  $('ul.tab-program li').click(function(){
  var tab_id = $(this).attr('data-tab');

  $('ul.tab-program li').removeClass('current');
  $('.tab-content-program').removeClass('current');

  $(this).addClass('current');
  $("#"+tab_id).addClass('current');
  });
};


/**************************************************
  search box div
**************************************************/

function searchBox() {
  
  $("#search-icon").click(function(event) {
    event.preventDefault();
    $("#search-box").slideToggle(250);
    $("#txtGDMISearchKey").focus();
  });

  //for inside close btn
  $(".search-close").click(function() {
    $(".search-box").slideUp(250);
  });

};


/**************************************************
  function for popup
**************************************************/




function popup(){

  $(".popup-open-btn").click(function(event){
    event.preventDefault();
    $(".popup-container").fadeIn(200);    
  });

  $(".popup-close-btn").click(function(event){
    event.preventDefault();
    $(".popup-container").fadeOut(200);
    $(".popup-Message").fadeOut(200);
  });

  $(".popup-toggle-btn").click(function(event){
    event.preventDefault();
    $(".popup-container").fadeToggle(200);
  });

  $(".popup-container").click(function(event){
    if($(event.target).closest(".popup-outer").length==0) {
      $(".popup-container").fadeOut(200);
    }
  });

};


/**************************************************
  fadeSlider v1 for home page
**************************************************/

function fadeSlider(auto, time) {

  var slideChangeTime = time * 2000;

  //declaring current next and previous cards 
  var current = $(".active-slide");
  var nextx = $(".active-slide").next();
  var prevx = $(".slider-list li:last-child");


  //fucntion to change slides
  function changeSlide(e) {
    current.removeClass("active-slide");
    $(e).addClass("active-slide");

    //reset variables
    current = $(".active-slide");
    nextx = $(".active-slide").next();
    prevx = $(".active-slide").prev();

    //if no prev slide
    if (prevx.length === 0) {
      prevx = $(".slider-list li:last-child");
    }

    //if no next slide
    if (nextx.length === 0) {
      nextx = $(".slider-list li:first-child");
    }

    //clear interval and restart autoTimer
    clearInterval(resetTimer);
    autoTimer();

  };


  //declaring dots
  var currentDot = $(".active-dot");
  var nextxDot = $(".active-dot").next();
  var prevxDot = $(".dots-list li:last-child");

  //changing the dots
  function changeDots(f) {
    $(".dots-list li").removeClass("active-dot");
    //current.removeClass("active-dot");
    $(f).addClass("active-dot");

    //reset dots
    currentDot = $(".active-dot");
    nextxDot = $(".active-dot").next();
    prevxDot = $(".active-dot").prev();

    //if no prev dot
    if (prevxDot.length === 0) {
      prevxDot = $(".dots-list li:last-child");
    }

    //if no next dot
    if (nextxDot.length === 0) {
      nextxDot = $(".dots-list li:first-child");
    }

    //clear interval and restart autoTimer
    clearInterval(resetTimer);
    autoTimer();
  };


  //////////////////////////////////////////////

  //declaring slider titles
  var currentTitle = $(".active-title");
  var nextxTitle = $(".active-title").next();
  var prevxTitle = $(".titles-list li:last-child");

  //changing the dots
  function changeTitles(f) {
    $(".titles-list li").removeClass("active-title");
    //current.removeClass("active-dot");
    $(f).addClass("active-title");

    //reset dots
    currentTitle = $(".active-title");
    nextxTitle = $(".active-title").next();
    prevxTitle = $(".active-title").prev();

    //if no prev dot
    if (prevxTitle.length === 0) {
      prevxTitle = $(".titles-list li:last-child");
    }

    //if no next dot
    if (nextxTitle.length === 0) {
      nextxTitle = $(".titles-list li:first-child");
    }

    //clear interval and restart autoTimer
    clearInterval(resetTimer);
    autoTimer();
  };

  //////////////////////////////////////////////

  //the automatic timer with clear
  var resetTimer;

  //checking parameter from function call
  if (auto=="auto"){
  	function autoTimer() {
	    resetTimer = setInterval(function() {
	      changeSlide(nextx);
	      changeDots(nextxDot);
	      changeTitles(nextxTitle);
	    }, slideChangeTime);
  	};
  }
  else{  	
  	function autoTimer() {
  		console.log("auto off");
  	};
  }

  
  //calling autoTimer for first start
  autoTimer();

  //on next Button click
  $("#slider-next").click(function() {
    //calling the change
    changeSlide(nextx);
    changeDots(nextxDot);
    changeTitles(nextxTitle);
  });

  //on previous Button click
  $("#slider-prev").click(function() {
    //calling the change
    changeSlide(prevx);
    changeDots(prevxDot);
    changeTitles(prevxTitle);
  });

  /*dotted*/

  $(".dots-list li:nth-child(1)").click(function() {
    changeSlide(".slider-list li:nth-child(1)");
    changeDots(".dots-list li:nth-child(1)");
    changeTitles(".titles-list li:nth-child(1)");
  });

  $(".dots-list li:nth-child(2)").click(function() {
    changeSlide(".slider-list li:nth-child(2)");
    changeDots(".dots-list li:nth-child(2)");
    changeTitles(".titles-list li:nth-child(2)");
  });

  $(".dots-list li:nth-child(3)").click(function() {
    changeSlide(".slider-list li:nth-child(3)");
    changeDots(".dots-list li:nth-child(3)");
    changeTitles(".titles-list li:nth-child(3)");
  });

  $(".dots-list li:nth-child(4)").click(function() {
    changeSlide(".slider-list li:nth-child(4)");
    changeDots(".dots-list li:nth-child(4)");
    changeTitles(".titles-list li:nth-child(4)");
  });
  
   $(".dots-list li:nth-child(5)").click(function() {
    changeSlide(".slider-list li:nth-child(5)");
    changeDots(".dots-list li:nth-child(5)");
    changeTitles(".titles-list li:nth-child(5)");
  });


  //NOW FOR THE TOUCH SWIPE CONTROLS
  function isTouchDevice() {
      return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
  }
  if (isTouchDevice() === true) {
      //your logic for touch device here
      //alert('Touch Device');
      $("header").on( "swipeleft", function(){        
        //calling the change
        // alert("swiped left");
        changeSlide(prevx);
        changeDots(prevxDot);
        changeTitles(prevxTitle);
      });  

      $("header").on( "swiperight", function(){        
        //calling the change
        // alert("swiped right");
        changeSlide(nextx);
        changeDots(nextxDot);
        changeTitles(nextxTitle);
      });

  } else {
      //your logic for non touch device here
      //alert('Not a Touch Device');
  }

}; //fadeSlider end




/**************************************************
  textSlider for home page
**************************************************/
function textSlider() {

    //declaring current next and previous cards 
    var current = $(".textSlider-active");
    var nextx = $(".textSlider-active").next();
    var prevx = $(".textSlider-list li:last-child");


    //fucntion to change slides
    function changeSlide(e){
      current.removeClass("textSlider-active");
      $(e).addClass("textSlider-active");

      //reset variables
      current = $(".textSlider-active");
      nextx = $(".textSlider-active").next();
      prevx = $(".textSlider-active").prev();

      //other slides to left n right
      prevx.css("left", "-100%");
      nextx.css("left", "100%");

      //if no prev slide
      if (prevx.length === 0) {
        prevx = $(".textSlider-list li:last-child");
      }

      //if no next slide
      if (nextx.length === 0) {
        nextx = $(".textSlider-list li:first-child");
      }

    };


    //declaring dots
    var currentDot = $(".textSlider-activeDot");
    var nextxDot = $(".textSlider-activeDot").next();
    var prevxDot = $(".textSlider-dots li:last-child");

    //changing the dots
    function changeDots(f){
      $(".textSlider-dots li").removeClass("textSlider-activeDot");
      //current.removeClass("active-dot");
      $(f).addClass("textSlider-activeDot");

      //reset dots
      currentDot = $(".textSlider-activeDot");
      nextxDot = $(".textSlider-activeDot").next();
      prevxDot = $(".textSlider-activeDot").prev();

      //if no prev dot
      if (prevxDot.length === 0) {
        prevxDot = $(".textSlider-dots li:last-child");
      }

      //if no next dot
      if (nextxDot.length === 0) {
        nextxDot = $(".textSlider-dots li:first-child");
      }

    };


    //on next Button click
    $(".textSlider-next").click(function(event) {
    	event.preventDefault();
      //calling the change
      changeSlide(nextx);
      changeDots(nextxDot);
    });

    //on previous Button click
    $(".textSlider-prev").click(function(event) {
    	event.preventDefault();
      //calling the change
      changeSlide(prevx);
      changeDots(prevxDot);
    });



    /*dotted*/

    $(".textSlider-dots li:nth-child(1)").click(function(){
      changeSlide(".textSlider-list li:nth-child(1)");
      changeDots(".textSlider-dots li:nth-child(1)");
    });

    $(".textSlider-dots li:nth-child(2)").click(function(){
      changeSlide(".textSlider-list li:nth-child(2)");
      changeDots(".textSlider-dots li:nth-child(2)");
    });

    $(".textSlider-dots li:nth-child(3)").click(function(){
      changeSlide(".textSlider-list li:nth-child(3)");
      changeDots(".textSlider-dots li:nth-child(3)");
    });

    $(".textSlider-dots li:nth-child(4)").click(function(){
      changeSlide(".textSlider-list li:nth-child(4)");
      changeDots(".textSlider-dots li:nth-child(4)");
    });



}; //textSlider end



/*testimonial*/

$(document).ready(function(fadeLoop) {
  var fad = $('.fader');
  var counter = 0;
  var divs = $('.fader').hide(); // Selecting fader divs instead of each by name.
  var dur = 500;
  fad.children().filter('.fader').each(function(fad) {
    function animator(currentItem) {
      animator(fad.children(":first"));
      fad.mouseenter(function(){
        $(".fader").stop(); 
      });
      fad.mouseleave(function(){
        animator(fad.children(":first"));
      });
    };
  });

  function showDiv() {
    divs.fadeOut(dur) // hide all divs
    .filter(function(index) {
      return index == counter % divs.length;
    }) // figure out correct div to show
    .delay(dur) // delay until fadeout is finished
    .fadeIn(dur); // and show it
    counter++;
  }; // function to loop through divs and show correct div
  
  showDiv(); // show first div    

  return setInterval(function() {  // return interval so we can stop the loop
    showDiv(); // show next div
  }, 2 * 3000); // do this every 5 seconds    
});
// JavaScript Document
$(document).ready(function () {
$('ul.tabs li').click(function () {
var tab_id = $(this).attr('data-tab');

$('ul.tabs li').removeClass('current');
$('.tab-content').removeClass('current');

$(this).addClass('current');
$("#" + tab_id).addClass('current');
});
});
/*certification inner collapsible start*/
$(document).ready(function () {
    $('.accordionButton').click(function () {
        $('.accordionButton').removeClass('on');
        $('.accordionContent').slideUp('normal');
        $('.plusMinus').text('+');
        if ($(this).next().is(':hidden') == true) {
            $(this).addClass('on');
            $(this).next().slideDown('normal');
            $(this).children('.plusMinus').text('-');
        }
    });
    $('.accordionButton').mouseover(function () {
        $(this).addClass('over');
    }).mouseout(function () {
        $(this).removeClass('over');
    });
    $('.accordionContent').hide();

});
$(document).ready(function () {
$(".div6 ul li:first-child .accordionContent").show();
});
/*certification inner collapsible end*/


/*certification page dropdown start*/
$(document).ready(function () {
    $('#select').click(function (event) {
        event.stopPropagation();
        $("#certification-drop").slideToggle("fast");
    });
    $("#certification-drop").on("click", function (event) {
        event.stopPropagation();
    });
});
$(document).on("click", function () {
    $("#certification-drop").hide();
});
/*certification page dropdown end*/