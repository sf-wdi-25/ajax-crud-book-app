// wait for DOM to load before running JS
$(document).ready(function() {

  console.log('JS is loaded!'); // sanity check

  // your code here
  var book_api_url = "https://super-crud.herokuapp.com/books/";

  function getBooks(){
      $.ajax({
      method: 'GET',
      url: book_api_url,
      success: function(data){
        data.book.forEach(function(element index){
          $('#books-list').append(
            "<div class='col-md-4'>" +
               "<img src='" + element.image + "'></div>" +
            "<div class ='col-md-8'>" +
               "<p><strong>Author</strong>: " + element.author + "</p>"+
               "<p><strong>Title</strong>: " + element.title + "</p>" +
               '<button type="button" class="btn btn-default edit">Edit</button>'+
               '<button type="button" class="btn btn-default delete">Delete</button>'+
            "</div>" +
               "<input type='hidden'" + index + "'placeholder='id'>"+
               "<input type='text'" + index + "'placeholder='Title'>"+
               "<input type='text'" + index + "'placeholder='Author'>"+
               "<input type='text'" + index + "'placeholder='Image Link'>"+
               "<input type='text'" + index + "'placeholder='Release Date'>"+
            "</div>"
            );
        })
      }
    })
  }
});