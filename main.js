// wait for DOM to load before running JS
$(document).ready(function() {

  console.log('JS is loaded!'); // sanity check

  // your code here
$.ajax({
method:'GET',
url:'https://super-crud.herokuapp.com/books',
    success: function (data) {
    	//console.log(data.books[0].image);
    	data.books.forEach(function (element){
    		$('#books-list').append("<li>" + element.title + "</li>");
    		$('#books-list').append("<li>" + element.author + "</li>");
    		$('#books-list').append("<li><img src='" + element.image + "'></li>");
    		$('#books-list').append("<li>" + element.releaseDate + "</li><hr>");
    	})
    } 
})  

var newBook = {};

$('input#submit').on('click', function (event) {
    event.preventDefault();

newBook.title = $("input#title").val();  
newBook.author = $("input#author").val(); 
newBook.image = $("input#image").val(); 
newBook.releaseDate = $("input#release").val(); 


$.ajax({
method:'POST',
url:'https://super-crud.herokuapp.com/books', 
data: newBook
		})
	})
});

// //$.ajax({
// 	method: "GET/POST/PUT/DELETE",
// 	url: "/books, /books:id",
// 	data: {...}
// })
