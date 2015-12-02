// wait for DOM to load before running JS
$(document).ready(function() {

  console.log('JS is loaded!'); // sanity check

	$.ajax({
		method: 'GET',
		url: 'https://super-crud.herokuapp.com/books',
			success: function (display) {
	            display.books.forEach(function(element){
	            $("#books-list").append("<img src ='" + element.image + "'>");
	            $("#books-list").append("<p>" + "Title: " + element.title + "</p>");
	            $("#books-list").append("<p>" + "Author: " + element.author + "</p>");
	            $("#books-list").append("<p>" + "Release Date: " + element.releaseDate + "</p>");
	            });

			}




	//WHAT AM I DOING HERE!!
		// method: "POST",
		// 	success: function (display) {

		// 	}
		// });

	});

});


// $.ajax({
//     method: 'POST',
//     url: 'https://super-crud.herokuapp.com/books',
//     dataType: 'json',
   
//     contentType: 'application/json',
//     data: JSON.stringify( { "title": $('#title').val(), "author": $('#author').val() } ),

// });


