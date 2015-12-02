// wait for DOM to load before running JS
$(document).ready(function() {

  console.log('JS is loaded!'); // sanity check
  var baseUrl = "https://super-crud.herokuapp.com/books/"

	$.ajax({
  		method: 'GET',
  		url: baseUrl,
  		success: function (element) {
    		var allBooks = element.books;
    		allBooks.forEach(function(ele) {
    			var title = ele.title;
    			var author = ele.author;
    			var image = "<img src=" + ele.image + ">"
    			var releaseDate = ele.releaseDate;
    			$('#books-list').append("<p>" + image + "<br>" + "<strong>Title:</strong> " + title + "<br>" + "<strong>Author:</strong> " + author + "<br>" +"<strong>Release Date:</strong> " + releaseDate + "<p>")
    		})
  		}
	})

	$.ajax({
		method: 'POST',
		url: 'https://super-crud.herokuapp.com/books/',
		data: [{
			"title": "Magic for Dummies",
			"author": "David Blaine",
			"releaseDate": "02/30/2100"
		}]
	})

});
