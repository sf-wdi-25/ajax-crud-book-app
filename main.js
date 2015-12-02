// wait for DOM to load before running JS
$(document).ready(function() {

	var endpointGET = 'https://super-crud.herokuapp.com/books';
	var endpointPOST = 'https://super-crud.herokuapp.com/books/';


	$("#create").click(function(event) {
		console.log(title);
		var getTitle = $("#title").val();
		var getAuthor = $("#author").val();
		var getReleaseDate = $("#releaseDate").val();
		var getImage = $("#image").val();
		

		if(getTitle === title || 
			getAuthor === author || 
			getReleaseDate === releaseDate || 
			getImage === image) {
				$.ajax({
					method: 'POST',
					url: endpointPOST + id + "/",
					data: {
							title: getTitle,
							author: getAuthor,
							releaseDate: getReleaseDate,
							image: getImage,
					},
					success: function() {
						alert("yes update");
						return;
					},
					error: function() {
						alert("no update");
						return;
					}
				});
			} else {
				$.ajax({
					method: 'POST',
					url: endpointPOST,
					data: {
							title: getTitle,
							author: getAuthor,
							releaseDate: getReleaseDate,
							image: getImage,
					},
					success: function() {
						alert("yes create");
						return;
					},
					error: function() {
						alert("no create");
						return;
					}
				});
			}
	});

	$.ajax({
			
		// https://super-crud.herokuapp.com/books
		// GET and POST
		method: 'GET',
		url: endpointGET,
		success: function (data,index) {
			data.books.forEach(function(element,index){
        var title = element.title;
        var author = element.author;
        var releaseDate = element.releaseDate;
        var image = element.image;
        var id = element._id;
			});
		} 
	});

	$.ajax({
			
		// https://super-crud.herokuapp.com/books
		// GET and POST
		method: 'GET',
		url: endpointGET,
		success: function (data,index) {
			data.books.forEach(function(element,index){
        var title = element.title;
        var author = element.author;
        var releaseDate = element.releaseDate;
        var image = element.image;
        var id = element._id;

        var showBook = $('#books-list').append('<hr><p>Title: ' + title + '</p>' +
        '</br><p>Author: ' + author + '</p>' +
        '</br><p>Release Date: ' + releaseDate + '</p>' +
        '</br><img class="small" src="' + image + '">');

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
