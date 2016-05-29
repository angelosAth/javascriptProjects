
$('#input').val(''); 
// clear the search box
$('#clear').click(function(){
  $('#input').val(''); 
});

function search() {
  // get the user input value
  query = document.getElementById('input').value;
  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + query,
    dataType: 'jsonp',
    type: 'POST',
    headers: {
      'Api-User-Agent': 'Example/1.0'
    },
    success: function(data) {
      // clear any previous results  
      $('.results').empty();
      var dQuery = data.query.search;
      var ul = $('<ul>').appendTo('.results');
      for (var result in dQuery) {
      	 // append to html the title of results
      	 ul.append($(document.createElement('li')).html("<b>" + dQuery[result].title + "</b>"));
      	 // append a snippet of each result
         ul.append($(document.createElement('ol')).html("<a href=https://en.wikipedia.org/wiki/" + dQuery[result].title + ">" + dQuery[result].snippet + "</a>"));
        
      }
    }
  });

}
/*
function search(){
  url = 'https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=10&search='+ query + '&callback=?';
  $.getJSON(url, function(data) {
    var ul = $('<ul>').appendTo('.results');
    $(data[1]).each(function(index, item) {
      ul.append($(document.createElement('li')).html("<b>"+item+"</b>"));
      ul.append($(document.createElement('ol')).html("<a href=" +data[3][index] + ">"+data[2][index]+"</a>"));
    });
  });
}
*/

