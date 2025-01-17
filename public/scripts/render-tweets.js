const renderTweets = (tweets) => {
  tweets.forEach(tweet => {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').prepend($tweet);
  });
};

const createTweetElement = (data) => {
  const userName = data.user.name;
  const userAvatar = data.user.avatars;
  const userHandle = data.user.handle;
  const contentText = data.content.text;
  const createdAt = daysSince(data.created_at);

  const returnVal = `
  <article class="tweet">
    <header>
      <div class="user-name">
        <img src="${userAvatar}">
        <span>${escape(userName)}</span>
      </div>
      <span>${escape(userHandle)}</span>
    </header>
    <p>
      ${escape(contentText)}
    </p>
    <footer>
      <span class="time-ago">${createdAt}</span>
      <div class="options-buttons">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
  </article>
  `;

  return returnVal;
};