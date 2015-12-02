// wait for DOM to load before running JS
$(document).ready(function() {

  console.log('JS is loaded!'); // sanity check

  // your code here


	$.ajax({
		method: 'GET',
		url: 'https://super-crud.herokuapp.com/books',
		success: function (data) {
			console.log(data);
			data.books.forEach (function(book){
				$("#books-list").append("<img src='" + book.image + "' class='img-responsive'>");
				$("#books-list").append("<p>" + "title: " + book.title  +  "</p>");
				$("#books-list").append("<p>" + "author: " + book.author  +  "</p>");
				$("#books-list").append("<p>" + "release date: " +book.releaseDate  +  "</p>");
				$("#books-list").append("<p>" + "book id: " +  book._id  +  "</p>");
			});
		}

	});

});
