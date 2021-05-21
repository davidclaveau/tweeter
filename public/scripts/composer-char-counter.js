$(document).ready(() => {
  // Count characters for new tweets and
  // Warn user if character count is nearing limit
  $("#tweet-text").keyup(function() {
    let count = 140;
    const charCount = $(this).val().length;
    const newCount = count - charCount;
    const $counter = $(".counter");
    const danger = "danger-char-limit";
    const over = "over-char-limit";

    $counter.removeClass(danger).removeClass(over);
    
    if (newCount <= 10 && newCount >= 0) {
      $counter.removeClass(over).addClass(danger);
    } else if (newCount < 0) {
      $counter.removeClass(danger).addClass(over);
    }
    
    $counter.html(newCount);
  });
});