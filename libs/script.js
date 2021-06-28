
$(document).ready(function() {
  $(".CV").hide();
  $(".Contact").hide();
  $(".item").show();
  $("#workarrow").show();
  $("#conarrow").hide();
  $("#cvarrow").hide();

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

$("div.item").hover(function(){$(this).css("color","#000000")},
function(){$(this).css("color","#AAAAAA")});

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


});
