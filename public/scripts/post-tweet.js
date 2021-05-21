$(document).ready(() => {
  $("form").submit((event) => {
    event.preventDefault();
    const $form = $("form");
    const $tweetText = $("#tweet-text");
    const $counter = $(".counter");
    const $error = $("div.error-message");
    const serialized = ($form.serialize());
    const tweetChars = $tweetText.val();

    // Ensure the user is within the correct character limits
    if (tweetChars.length > 140) {
      $error.empty().append(`
        <i class="fas fa-exclamation-circle"></i>
        <span><strong>Character limit exceeded!</strong></span>
      `).slideDown();
    } else if (tweetChars.length === 0 || tweetChars === null) {
      $error.empty().append(`
        <i class="fas fa-exclamation-circle"></i>
        <span><strong>Cannot submit an empty tweet!</strong></span>
      `).slideDown();
    } else {
      // Reset tweet textarea and character counter
      $error.slideUp();
      $tweetText.val("");
      $counter.html("140");
      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: serialized,
      })
        // Post tweet to the homepage immediately
        .then(() => {
          $.ajax({
            url: '/tweets',
            method: 'GET',
          })
            .then((result) => {
              renderTweets([result[result.length - 1]]);
            });
        });
    }
  });
});