function newQuote(){
  var quotes = [
    ["Together we can change the world, just one random act of kindness at a time.", "Ron Hall"],
    ["Natural selection is anything but random.","Richard Dawkins"],
    ["Life is 10% what happens to you and 90% how you react to it.","Charles R. Swindoll"],
    ["Good, better, best. Never let it rest. 'Til your good is better and your better is best.","St. Jerome"]];

  var i = Math.floor(Math.random() * quotes.length + 1);
  var quoteText = quotes[(i-1)][0];
  var authorName = quotes[(i-1)][1];
  var tweetParameter = '"' + quoteText + '"+' + authorName;
  var tweetVia = "&via=RobertW70139746";
  var tweetHashtags = "&hashtags='FCC_RQG,CodeProud,CodeNewbie'";
  console.log(i);
  console.log(quotes[i]);
    document.getElementById("text").innerHTML = "<span class='quotes'>\"</span>" + quoteText + "<span class='quotes'>\"</span>";
    document.getElementById("author").innerHTML = authorName;
    document.getElementById("tweet-quote").href = "http://twitter.com/intent/tweet?text=" + tweetParameter + tweetVia + tweetHashtags;
}

window.onload=newQuote();
