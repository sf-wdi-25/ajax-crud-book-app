// wait for DOM to load before running JS
$(document).ready(function() {


	console.log('JS is loaded!'); // sanity check

  // your code here
  	var books_endpoint = "https://super-crud.herokuapp.com/books/";
	$(input).keydown(function (event){
		if(event.which===13){
			var keyInput = $('input').val().replace(" " + "+");

		}
	})


});
