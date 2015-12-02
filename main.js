// wait for DOM to load before running JS
$(document).ready(function() {

  console.log('JS is loaded!'); // sanity check

  var readBooksUrl= "https://super-crud.herokuapp.com/books";

  // var userTitle = $("#inputTitle").val();
  // var userAuthor = $("#inputAuthor").val();
  // var userImage = $("inputImage").val();
  // var userReleaseDate = $("inputReleaseDate").val();

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

  	 	$("#books-list").append("<p> Title: " + bookTitles + "</p>" +
  	 		"<p> Author: " + bookAuthors +  "</p>" +
  	 		"<img src=" + bookImages +  ">" +
  	 		"<p> Release Date: " + bookRelease +  "</p>");
  	}

  	},
  	error: function(){
  		console.log("Mistake was made.");
  	}
  });

// $().on("click", function()){

	//Function would save values to global value after
	//User inputs string in the submission forms.

//  $.ajax({
//   	method: "POST",
//   	url: "https://super-crud.herokuapp.com/books",
//   	data: {
//     	title: userTitle,
//     	author: userAuthor,
//     	image: userImage,
//     	releaseDate: userReleaseDate
//   	},
//   	success: function (book) {
//     	console.log("your book was successfully created!");
//     	console.log("your book has an id of", book._id);
//     	// render book to page
//   	},
//   	error: function () {
//     console.error("Book not created");
//   }
// });

// This is close to the submission process for forms.

//  $.ajax({
//   	method: "POST",
//   	url: "https://super-crud.herokuapp.com/books",
//   	data: {
//     	title: "Breakmaster: Be a Breaker, not a Broker",
//     	author: "Kayvon Ranjbar",
//     	image: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/7/005/01a/0e1/3a74243.jpg",
//     	releaseDate: "February 29, 2004"
//   	},
//   	success: function (book) {
//     	console.log("your book was successfully created!");
//     	console.log("your book has an id of", book._id);
//     	// render book to page
//   	},
//   	error: function () {
//     console.error("Book not created");
//   }
// });

//Hard Code of Post, taken from our Exercise
});
