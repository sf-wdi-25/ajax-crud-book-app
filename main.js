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
            })
          console.log(display.books);
		}	
	});

 //  $.ajax({
	// method: 'GET',
	// url: 'https://super-crud.herokuapp.com/books',
	// 	success: function (display) {

 //            $("#books-list").append("<img src ='" + image + "'>");
	// 	}	
	// });

  // your code here

});
