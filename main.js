// wait for DOM to load before running JS
$(document).ready(function() {

  console.log('JS is loaded!'); // sanity check

  var readBooksUrl= "https://super-crud.herokuapp.com/books";

  $.ajax({
  	method: "GET",
  	url: "https://super-crud.herokuapp.com/books",
  	success: function (data){
  		console.log(data.books[0].title);
  	},
  	error: function(){
  		console.log("Mistake was made.");
  	}
  });
  // your code here

});
