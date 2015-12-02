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
					$('#books-list').append("<p><img src = '" + images + "'>" + "<br\>" +
						"<strong>Title: </strong>" + titles + "<br\>" + "<strong>Author: </strong>" +
						authors + "<br\>" + "<strong>Release Date: </strong>"+ released + "</p>");
				});
			}
		});

	$('#btn').click(function (pirate) {
		pirate.preventDefault();
		var title = $("#title").val();
		var author = $('#author').val();
		var releaseDate = $('#releaseDate').val();
		var imageURL = $('#imageURL').val();
		$.ajax ( {
			method: "POST",
			url: booksList,
			data: {
				title: title,
				author: author,
				releaseDate: releaseDate,
				image: imageURL,
			},
			success: function () {
				console.log("Stuff has happened");
			},
			error: function () {
				console.log("Oh noes, you done br0ke teh interwebs!");
			}
		});
	});
});