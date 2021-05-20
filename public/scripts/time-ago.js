$(document).ready(() => {
  
  const $spanTimeAgo = $("span.time-ago");

  $spanTimeAgo.on("load", () => {
    const time = $spanTimeAgo.html();
    const timeAgo = timeago.format(time);
    $spanTimeAgo.html(timeAgo);
  });

});