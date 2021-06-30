
$(document).ready(function() {
  $(".CV").hide();
  $(".Contact").hide();
  $(".item").show();
  $("#workarrow").show();
  $("#conarrow").hide();
  $("#cvarrow").hide();
  $("video#bk").hide();
  $("img#bk").hide();
  $(".detail").hide();
  $(".back").hide();
  $("img#bk2").hide();


  $(".header").ready(function(){
    var timer = !1;
  _Ticker = $(".TickerNews").newsTicker();
  _Ticker.on("mouseenter",function(){
    var __self = this;
    timer = setTimeout(function(){
      __self.pauseTicker();
    },200);
  });
  _Ticker.on("mouseleave",function(){
    clearTimeout(timer);
    if(!timer) return !1;
    this.startTicker();
  });
});

$("#dopamine").hover(function(){
  $("video#bk").show();
},
function(){
  $("video#bk").hide();
  });

$("#pass").hover(function(){
    $("img#bk").show();
  },
function(){
  $("img#bk").hide();
  });
  $("#muoftru").hover(function(){
      $("img#bk2").show();
    },
  function(){
    $("img#bk2").hide();
    });


$("div.item").hover(function(){
  $(this).css("color","#000000");
  },
function(){
  $(this).css("color","#AAAAAA")
  });

$("div.bt").hover(function(){$(this).css("color","#000000")},
function(){$(this).css("color","#AAAAAA")});

$("#cv").click(function(){
    $(".item").fadeOut();
    $("#workarrow").fadeOut();
    $(".Contact").fadeOut();
    $("#conarrow").fadeOut();
    $(".CV").fadeIn();
    $("#cvarrow").fadeIn();
  });

  $("#works").click(function(){
      $(".CV").fadeOut();
      $("#cvarrow").fadeOut();
      $(".Contact").fadeOut();
      $("#conarrow").fadeOut();
      $(".item").fadeIn();
      $("#workarrow").fadeIn();
    });

    $("#contact").click(function(){
        $(".item").fadeOut();
        $(".CV").fadeOut();
        $("#cvarrow").fadeOut();
        $("#workarrow").fadeOut();
        $(".Contact").fadeIn();
        $("#conarrow").fadeIn();
      });
$(".back").click(function() {
  $(".frontpage").show();
  $(".detail").hide();
  $(".back").hide();
});

$("#pass").click(function(){
  $(".frontpage").hide();
  $("#infopass").show();
  $(".back").show();
});
$("#dopamine").click(function(){
  $(".frontpage").hide();
  $("#infodopamine").show();
  $(".back").show();
});


});
