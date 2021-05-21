$(document).ready(() => {
  const loadTweets = () => {
    $.ajax({
      url: '/tweets',
      method: 'GET',
    })
      .then((result) => {
        renderTweets(result);
      });
  };
  
  loadTweets();
});
