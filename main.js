// wait for DOM to load before running JS
$(document).ready(function() {

  console.log('JS is loaded!'); // sanity check

  $.ajax({
  	method: "GET",
  	url: "https://super-crud.herokuapp.com/books",
  	success: function (data) {
  		data.books.forEach(function(element) {
  			$("#books-list").append("<img src=" + element.image + ">");
  			$("#books-list").append("<p>Title: " + element.title + "</p>");
  			$("#books-list").append("<p>Author: " + element.author + "</p>");
  			$("#books-list").append("<p>Released: " + element.releaseDate + "</p>");
  		});
  	}
  });
});