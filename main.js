// wait for DOM to load before running JS
$(document).ready(function() {

  console.log('JS is loaded!'); // sanity check

  var readBooksUrl= "https://super-crud.herokuapp.com/books";

  $.ajax({
  	method: "GET",
  	url: readBooksUrl,
  	success: function (data){
  	//console.log(data.books[0].title); // prints out first book title
  	// var bookOne = data.books[0].title;
  	// console.log(bookOne);
  	// $("#books-list").append("<p> Title: " + bookOne +  "</p>");

  	for(var i = 0; i < data.books.length; i++){
  		var bookTitles = data.books[i].title;
  		var bookAuthors = data.books[i].author;
  		var bookImages = data.books[i].image;
  		var bookRelease = data.books[i].releaseDate;

  	 	$("#books-list").append("<p> Title: " + bookTitles +  "</p>");
  	 	$("#books-list").append("<p> Author: " + bookAuthors +  "</p>");
  	 	$("#books-list").append("<img src=" + bookImages +  ">");
  	 	$("#books-list").append("<p> Release Date: " + bookRelease +  "</p>");
  	}

  	},
  	error: function(){
  		console.log("Mistake was made.");
  	}
  });

});
