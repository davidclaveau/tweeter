$(document).ready(() => {

  $(".fa-angle-double-down").on("click", () => {
    const $newTweet = $(".new-tweet");
    if ($newTweet.css("display") === "none") {
      $newTweet.slideDown();
    } else {
      $newTweet.slideUp();
    }
  });

});