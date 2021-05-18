$(document).ready(() => {

  // Count characters in new tweets
  // Warn user if character count is nearing limit
  $("#tweet-text").keyup(function(){
    let count = 140
    const charCount = $(this).val().length;
    const newCount = count - charCount

    if (newCount <= 10 && newCount >= 0) {
      $(".counter").removeClass("over").addClass("danger");
    } else if (newCount < 0) {
      $(".counter").removeClass("danger").addClass("over");
    } else {
      $(".counter").removeClass("danger").removeClass("over");
    }

    $(".counter").html(newCount)
  });
});