// wait for DOM to load before running JS
$(document).ready(function() {

  console.log('JS is loaded!'); // sanity check

  // your code here
  $.ajax({
    method: "GET",
    url: "https://super-crud.herokuapp.com/books",
    success: function (data) {
       data.books.forEach(function (book) {
            var bookimg = book.image;
            $('#books-list').append('<p>' + '<img src =' + book.image + '>' + '<br>' + book.title + '</p>' );
     })
  }

})

var tempBook = { };

$('button#create').on("click", function (event) {
     tempBook.title = $('input#title').val();
     tempBook.author = $('input#author').val();
     tempBook.image = $('input#image').val();
     tempBook.releaseDate = $('input#release').val();
     $.ajax({
     	method: "POST",
     	url: "https://super-crud.herokuapp.com/books",
     	data: tempBook
        })
})

//DELETE
	//Use jquery to grab the title of the book you hope to delete
	//store it in a var 
	//use ajax to load up all books
	//loop through the book titles using for each and compare with your deleteBook var 
	 //if you find it
	  //grab the id
	  //use ajax to use the delete method on it
	  



});
