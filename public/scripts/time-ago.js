$(document).ready(() => {
  
  const time = $("span.time-ago").html();
  const timeAgo = timeago.format(time);
  $("span.time-ago").html(timeAgo);

});