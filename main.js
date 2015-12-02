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
				$("#books-list").append("<p>" + book.title  +  "</p>");
				$("#books-list").append("<p>" + book.author  +  "</p>");
				$("#books-list").append("<p>" + book.image  +  "</p>");
				$("#books-list").append("<p>" + book.releaseDate  +  "</p>");
				$("#books-list").append("<p>" + book._id  +  "</p>");
			});
		}

	});

});
