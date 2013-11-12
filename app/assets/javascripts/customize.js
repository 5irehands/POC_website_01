$(function(){
  $(".slideShow").slideShow({
    interval: 10,
    start: "random",
    transition: {
      mode: "fade",
      speed: 600
    }
  });
});
