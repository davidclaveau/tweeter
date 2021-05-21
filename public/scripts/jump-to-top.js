$(document).ready(() => {
  $(window).scroll(() => {
    $jumpToTop = $("div#jump-to-top")

    let height = $(window).scrollTop();

    if (height > 200) {
      $jumpToTop.css("visibility", "visible")
    } else {
      $jumpToTop.css("visibility", "hidden")
    }
    
    // Slowly scroll user to top of page
    $jumpToTop.click(() => {
      $("html, body").stop(true, false).animate({scrollTop: 0}, 1000);
    });
  })
});