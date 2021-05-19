/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

  const tweetData = {
    "user": {
      "name": "Jaden",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@JadenSmith"
    },
    "content": {
      "text": "How can mirrors be real if our eyes aren't real"
    },
    "created_at": 1621363278171
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
        <div>
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
  
  const $tweet = createTweetElement(tweetData);
  
  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});
