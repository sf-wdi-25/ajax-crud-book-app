$(document).ready(function() {

	console.log('JS is loaded!'); // sanity check

	$.ajax({
		method:"GET",
		url: "https://super-crud.herokuapp.com/books",
		success: function(data) {
   			data.books.forEach(function(e) {
   				var title = "<strong>Title </strong>" + e.title;
   				var author = "<strong>Author </strong>" + e.author;
   				var release = "<strong>Release Date </strong>" + e.releaseDate;
   				var bookCover = "<img src=" + e.image + ">"
   				var editButton = "<button class='btn-primary'>" + "edit" + "</button>"
   				var deleteButton = "<button class='btn-primary delete'>" + "delete" + "</button>"
   				$("#hello").append("<div class='books'>" + "<div class='bookish' id='books-image'>" + bookCover + "</div>" + 
   					"<div class='bookish' id='books-list'><p>" + "<br>" + title + "<br>" + author + "<br>" + release + "<br>" + 
   					editButton + deleteButton + "</p></div></div><hr />");
   			});
   		}
	});

	$("#submit").click(function(event) {
		event.preventDefault();
		$.ajax({
	      method: "POST",
	      url: "https://super-crud.herokuapp.com/books",
	      data: {
	        title: $("#subTitle").val(),
	        author: $("#subAuthor").val(),
	        image: $("#subImage").val(),
	        releaseDate: $("#subDate").val()
      	  },
      	  success: function (response) {
        	console.log("Add Book!");
      	  },
      	});
	});	

	$("#books-list").on("click", ".delete", function(event) {
    	console.log("you're a genius");
	});

});

// Need to create a variable that each div's ID

// $("#book-list").on("click", ".delete", function(event) {
//     $.ajax({
// 	      method: "DELETE",
// 	      url: "https://super-crud.herokuapp.com/books/",
// 	      data: {
// 	        title: $("#subTitle").val(),
// 	        author: $("#subAuthor").val(),
// 	        image: $("#subImage").val(),
// 	        releaseDate: $("#subDate").val()
//       	  },
//       	  success: function (response) {
//         		console.log("you're a genius");
//       	  },
//     });
// });