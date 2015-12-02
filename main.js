var booksList = "https://super-crud.herokuapp.com/books";

// wait for DOM to load before running JS
$(document).ready(function() {

  console.log('Braaaaaaiiiiiiiins!'); // sanity check

  // your code here
	$.ajax ( {
			method: "GET",
			url: booksList,
			success: function(ninja) {
				ninja.books.forEach(function (unicorn) {
					var images = unicorn.image;
					var titles = unicorn.title;
					var authors = unicorn.author;
					var released = unicorn.releaseDate;
					$('#books-list').append("<p><img src = '" + images + "'>" + "<br\>" + "<strong>Title: </strong>" + titles + "<br\>" + "<strong>Author: </strong>"+ authors + "<br\>" + "<strong>Release Date: </strong>"+ released + "</p>");
				});
			}
		});
});