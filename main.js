// wait for DOM to load before running JS
$(document).ready(function() {

  console.log('JS is loaded!'); // sanity check

  var readBooksUrl= "https://super-crud.herokuapp.com/books";

  $.ajax({
  	method: "GET",
  	url: readBooksUrl,
  	success: function (data){
  	//	console.log(data.books[0].title); // prints out first book title
  		var bookOne = data.books[0].title;
  		console.log(bookOne);
  		$("#books-list").append("<p> Title: " + bookOne +  "</p>");
  	},
  	error: function(){
  		console.log("Mistake was made.");
  	}
  });
  
//  $("#books-list").append("<p> Title: +  </p>")

});
