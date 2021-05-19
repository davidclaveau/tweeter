$(document).ready(() => {
  
  const $spanTimeAgo = $("span.time-ago")
  const time = $spanTimeAgo.html();
  const timeAgo = timeago.format(time);
  $spanTimeAgo.html(timeAgo);

});