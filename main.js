// wait for DOM to load before running JS
$(document).ready(function() {

var getAndPostEndpoint = 'https://super-crud.herokuapp.com/books';

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
          $('#books-list').append('<hr><p>Title: ' + title + '</p>' +
          '</br><p>Author: ' + author + '</p>' +
          '</br><p>Release Date: ' + releaseDate + '</p>' +
          '</br><img class="small" src="' + image + '">');

					$('#search').click(function(event) {

					var getTitle = '"' + $('#title').val() + '"';
					var getAuthor = $('#author').val();
					var getReleaseDate = '"' + $('#releaseDate').val() + '"';
					var getImage = '"' + $('#image').val() + '"';
					
					if(getTitle === title ||
						getAuthor === author ||
						getReleaseDate === releaseDate ||
						getImage === image) {
							console.log(image + releaseDate + title + author);
							$('#books-list').html('');
							//clear all of the books in the #books-list html div

							//append the object that has that title into the html
							$('#books-list').append('<hr><p>Title: ' + title + '</p>' +
						  '</br><p>Author: ' + author + '</p>' +
						  '</br><p>Release Date: ' + releaseDate + '</p>' +
						  '</br><img class="small" src="' + image + '">');
					}
	});
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
