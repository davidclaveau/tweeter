$(document).ready(() => {
  const $jumpToTop = $("div#jump-to-top")
  const $newTweet = $(".new-tweet");
  const $tweetText = $("#tweet-text");
  const $dynamic = $(".dynamic-content");

  // Show jump button at different heights
  // Jump to different places depending on screen size
  
  $(window).scroll(() => {
    const height = $(window).scrollTop();

    const direction = $dynamic.css("flex-direction")
    let showButtonAt = 200;

    direction === "column" ? showButtonAt = 400 : showButtonAt = 200;

    if (height > showButtonAt) {
      $jumpToTop.css("visibility", "visible")
    } else {
      $jumpToTop.css("visibility", "hidden")
    }

  })
  
  $jumpToTop.click(() => {

    const direction = $dynamic.css("flex-direction")
    let showButtonAt = 200;
    let scrollHeight = 0;

    if (direction === "column") {
      scrollHeight = 400;
      showButtonAt = 400;
    } else {
      scrollHeight = 0;
    }

    // Change jump height depending if compose tweet is open or not
    $("html, body").stop(true, false).animate({scrollTop: scrollHeight}, 1000);
    
    if ($newTweet.css("display") === "none") {
      $newTweet.slideDown();
    } 
    
    $tweetText.focus();
  });
});