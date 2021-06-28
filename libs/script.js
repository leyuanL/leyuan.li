
$(document).ready(function() {

  $('.header').ready(function(){
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

});
