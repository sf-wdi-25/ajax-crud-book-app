// wait for DOM to load before running JS
$(document).ready(function() {

	var getAndPostEndpoint = "https://super-crud.herokuapp.com/books";

  console.log('JS is loaded!'); // sanity check

	function convertStringToSearchTerm(string) {
	    string = string.replace(/ /g, "+");
	    return string;
	}

	$("#search").click(function(event) {
			$("#title").html("");

			var getTitle = $("#title").val();
			var getAuthor = $("#author").val();
			var getReleaseDate = $("#releaseDate").val();
			var getImage = $("#image").val();

			convertStringToSearchTerm(getTitle);

			if('getTitle is equal to any of the' === element.title) {
					'clear all of the books in the #books-list html div';
					'append the object that has that title into the html';
			}
	});
		$.ajax({
			
			// https://super-crud.herokuapp.com/books
			// GET and POST

			method: 'GET',
			url: getAndPostEndpoint,
			success: function (data,index) {
				data.books.forEach(function(element,index){
		          var title = element.title;
		          var author = element.author;
		          var releaseDate = element.releaseDate;
		          var image = element.image;
		          console.log(element);
		          $("#books-list").append("<hr><p>Title: " + title + "</p>" +
		          "</br><p>Author: " + author + "</p>" +
		          "</br><p>Release Date: " + releaseDate + "</p>" +
		          "</br><img src='" + image + "'>");
						});
			}
	});

 //  $.ajax({

	// 	// https://super-crud.herokuapp.com/books/:id
	// 	// READS,UPDATES,DELETES one book

	// 	method: 'GET/POST/PUT/DELETE',
	// 	url: weekly_quakes_endpoint,
	// 	data: {},
	// 	success: function (data,index) {
	// 		data.features.forEach(function(element,index){
	// 			var title = element.properties.title;
	// 		});
	// 	}
	// });
  // your code here

});
