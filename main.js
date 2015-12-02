// wait for DOM to load before running JS
$(document).ready(function() {

  console.log('JS is loaded!'); // sanity check
  
  	$.ajax({
  		method: "GET",
  		url: "https://super-crud.herokuapp.com/books",
  		success: function(data) {
        console.log(data);
  			data.books.forEach(function(book) {
  				//console.log(element);
  				$("#books-list").append("<p>" + book.title + " by " + book.author + "</p> <br> <img src= ' " + book.image + "'>" );
  				
  			});

  		}

  	});
  // your code here
            $('form').on('submit' , function (a) {
                a.preventDefault();
                var title = $(this).find('#title').val();
                var author = $(this).find('#author').val();
                var image = "http://i.imgur.com/nZlaeSH.jpg";
                var newBook = {
                  title: title,
                  author: author,
                  image: image
                };
                $.ajax ({
                  url: "https://super-crud.herokuapp.com/books",
                  method: "POST",
                  data: newBook,
                  success: function(book) {
                    console.log(book);
                    $('#books-list').append("<p>" + book.title + " by " + book.author + "</p> <br> <img src= ' " + book.image  + "'>" );
                  }
                });
  });
});
