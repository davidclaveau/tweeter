$(document).ready(() => {
 
  const loadTweets = () => {
    $.ajax({
      url: '/tweets',
      method: 'GET',
    })
      .then((result) => {
        renderTweets(result);
      })
      .catch(err => {
        console.log('Unable to get Tweets');
        console.log(err);
      });
  };
  loadTweets();
});
