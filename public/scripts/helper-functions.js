// Prevent XSS attacks
const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// Translate time since tweet into readable format
const daysSince = (time) => {
  const timeAgo = timeago.format(time);
  return timeAgo;
};