// wait for DOM to load before running JS
$(document).ready(function() {

  console.log('JS is loaded!'); // sanity check

  // your code here
	var url = "https://super-crud.herokuapp.com/books";
	var id;
	var title;
	var author;
	var image; 

	$.ajax({
		method: "GET",
		url: url,
		success: function (input) {
			input.books.forEach(function callback(element) {
				var images = element.image;
				var authors = element.author;
				var released = element.releaseDate;
				var titles = element.title;
				$('#books-list').append("<p>" + "<div>" + "<img src='" + images +
					"'>" + authors + released + titles +"</div>" + "</p>");
				
			});
		}
	});

	$('#submit').on('click', function (event) {
		event.preventDefault();
		//test
		console.log("this works");
		var title = $('#subTitle').val();
		var author = $('#subAuthor').val();
		var image = $('#subImage').val();
		var release = $('#subRelease').val();
		$.ajax({
				method: 'POST',
				url: "https://super-crud.herokuapp.com/books/",
				data: {
					title : title,
					author : author,
					image : image,
					releaseDate : release,
				},
				success: function () {
					console.log("worked!");
				},
				error: function () {
				console.log("did not work!");
				}
		});
	});
});