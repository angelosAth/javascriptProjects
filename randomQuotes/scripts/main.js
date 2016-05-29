var url = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=en";
var twit = "https://twitter.com/intent/tweet?text=";

$('#getQuote').click(function() {
  $.getJSON(url)
  .done(getQuote)
});

$(document).ready(function() {
  $.getJSON(url).done(getQuote); 
});

function getQuote(quote) {
  //document.getElementById("quote").innerHTML = quote.quoteText;
  $('#quote').html(JSON.stringify(quote.quoteText));
  $(".twitter-share-button").attr("href", twit + quote.quoteText + " " + "\"" + quote.quoteAuthor + "\"");

  if (quote.quoteAuthor === "")
  	document.getElementById("author").innerHTML = "Unknown";
  else
    //document.getElementById("author").innerHTML = "- " + quote.quoteAuthor;
    $('#author').html("- " + JSON.stringify(quote.quoteAuthor).replace(/\"/g, ""));
}