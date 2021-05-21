$(document).ready(() => {
  // Toggle "Compose Tweet" div when
  // Clicking "Write a new tweet"
  $(".write-tweet-nav").on("click", () => {
    const $newTweet = $(".new-tweet");
    const $tweetText = $("#tweet-text");
    if ($newTweet.css("display") === "none") {
      $newTweet.slideDown();
      $tweetText.focus();
    } else {
      $newTweet.slideUp();
    }
  });
});