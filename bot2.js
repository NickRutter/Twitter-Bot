console.log('The Replier bot is starting');
var twit = require('twit');
var config = require('./config.js');
var T = new twit(config);


var stream = T.stream('user');

stream.on('tweet', tweetEvent);

function tweetEvent(tweet) {
 var fs = require('fs');
var json = JSON.stringify(tweet,null,2);
fs.writeFile("tweet.json", json,);
console.log('done');

var replyto = tweet.in_reply_to_screen_name;
var text = tweet.text;
var from = tweet.user.screen_name;

if (replyto == 'AMagical8Ball')
{
  var newtweet = '@' + from + 'hey';
  tweetIt(newtweet);
}
}
function tweetIt(txt){
var tweet = {
  status: txt
}
T.post('statuses/update', tweet, tweeted);
}

  function tweeted(err, reply) {
       if (err) {
         console.log(err.message);
       } else {
         console.log('Tweeted: ' + reply.text);
       }
     }
