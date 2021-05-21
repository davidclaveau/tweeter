$(document).ready(() => {
  // Toggle "Compose Tweet" div when
  // Clicking "Write a new tweet"
  $(".write-tweet-nav").on("click", () => {
    
    const $newTweet = $(".new-tweet");
    const $tweetText = $("#tweet-text");
    if ($newTweet.css("display") === "none") {
      const $dynamic = $(".dynamic-content");
      const direction = $dynamic.css("flex-direction")
      let scrollHeight = 0;

      // For smaller screensize
      if (direction === "column") {
        scrollHeight = 400;
      }
      
      // Slowly scroll user to top of page
      $("html, body").stop(true, false).animate({scrollTop: scrollHeight}, 1000);
      $newTweet.slideDown();
      $tweetText.focus();
    } else {
      $newTweet.slideUp();
    }
  });
});