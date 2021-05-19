$(document).ready(() => {

  // Count characters in new tweets
  // Warn user if character count is nearing limit
  $("#tweet-text").keyup(function() {
    let count = 140;
    const charCount = $(this).val().length;
    const newCount = count - charCount;

    $(".counter").removeClass("danger-char-limit").removeClass("over-char-limit");

    if (newCount <= 10 && newCount >= 0) {
      $(".counter").removeClass("over-char-limit").addClass("danger-char-limit");
    } else if (newCount < 0) {
      $(".counter").removeClass("danger-char-limit").addClass("over-char-limit");
    }

    $(".counter").html(newCount);
  });
});