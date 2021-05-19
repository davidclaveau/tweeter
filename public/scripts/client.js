$(document).ready(() => {

  
  const loadTweets = () => {
    $.ajax({
      url: '/tweets',
      method: 'GET',
    })
      .then((result) => {
        renderTweets(result)
      })
      .catch(err => {
        console.log('Unable to get Tweets');
        console.log(err);
      })
  };
  
  const allTweets = loadTweets();

  console.log("allTweets", allTweets)

  const renderTweets = (tweets) => {
    tweets.forEach(tweet => {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet)
    });
  }
  
  const createTweetElement = (data) => {
    const userName = data.user.name;
    const userAvatar = data.user.avatars;
    const userHandle = data.user.handle;
    const contentText = data.content.text;
    const createdAt = data.created_at;

    const returnVal = `
    <article class="tweet">
      <header>
        <div class="user-name">
          <img src="${userAvatar}">
          <span>${userName}</span>
        </div>
        <span>${userHandle}</span>
      </header>
      <p>
        ${contentText}
      </p>
      <footer>
        <span class="time-ago">${createdAt}</span>
        <div>
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    </article>
    `

    return returnVal;
  };

  // POST tweets
  $("form").submit((event) => {
    event.preventDefault();
    const $form = $("form")
    const serialized = ($form.serialize());
    const tweetChars = $("#tweet-text").val();

    if (tweetChars.length > 140) {
      alert("Too Long")
    } else if (tweetChars.length === 0) {
      alert("Nothing written")
    } else {
      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: serialized,
      })
        .then((result) => {
          console.log('success');
        })
        .catch(err => {
          console.log('Unable to submit Tweet');
          console.log(err);
        })
    }

  })
});
