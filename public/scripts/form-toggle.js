$(document).ready(() => {

  $(".write-tweet-nav").on("click", () => {
    const $newTweet = $(".new-tweet");
    if ($newTweet.css("display") === "none") {
      $newTweet.slideDown();
    } else {
      $newTweet.slideUp();
    }
  });

});