// wait for DOM to load before running JS
$(document).ready(function() {

  	console.log('JS is loaded!'); // sanity check

  	var dataToUse = {};
  	var url;
  	var methodUsed;
  	var thisClass;
  	
  	queryTheDatabase();

  	function queryTheDatabase() {
  		$.ajax({
		  	method: "GET",
		  	url: "https://super-crud.herokuapp.com/books",
		  	success: function (data) {
		  		// console.log(data.books);
		  		data.books.forEach(function (element, index) {
		  			//All of the below is just what I'm appending. For a more readable version, you can look at index.html in the comments.
		  			$(".books").append(
		  				"<div class='col-md-4'>" + 
		  					"<img src='" + element.image + "'></div>" + 
		  				"<div class='col-md-7 col-md-offset-1'>" + 
		  					"<p><strong>Author</strong>: "+ element.author + "</p>" + 
		  					"<p><strong>Title</strong>: " + element.title + "</p>" + 
		  					//Ok, so this is where it gets cray. I'm assigning an ID to BOTH buttons because all I'm going to do is check the value of the ID attribute later by $(this).attr("id")
		  					"<button class='btn btn-secondary put' id='" + index + "'>Edit</button>" + 
		  					"<button class='btn btn-secondary delete' id='" + index + "'>Delete</button>" +
		  				"</div>" +
		  				"<div class='col-md-12 form-2'>" +
		  					"<input type='hidden' class='id update " + index + "' placeholder='ID'>" + 
		  					"<input type='text' class='title update " + index + "' placeholder='Title'>" + 
		  					"<input type='text' class='author update " + index + "' placeholder='Author'>" +
		  					"<input type='text' class='image_url update " + index + "' placeholder='Image URL'>" +
		  					"<input type='text' class='release update " + index + "' placeholder='Release Date'>" + 
		  					"<button class='btn btn-primary update " + index + "'>Update</button><hr>" + 
		  				"</div>"
		  				);
					//This fetches the data and pre-populates the hidden fields for the update to happen.
					$(".id.update." + index).val(element._id);
					$(".title.update." + index).val(element.title);
					$(".author.update." + index).val(element.author);
					$(".image_url.update." + index).val(element.image);
					$(".release.update." + index).val(element.releaseDate);
		  		});
		  		$(".update").hide();
		  	}
	  	});
  	}
	  	

  	$(".btn.post").click(function handler() {
  		methodUsed = "POST";
  		url = "https://super-crud.herokuapp.com/books";
  		if ($(".title.post").val() !== "" && $(".author.post").val() !== "" && $(".image_url.post").val() !== "" && $(".release.post").val() !== "") {
  			dataToUse.title = $(".title.post").val();
  			dataToUse.author = $(".author.post").val();
  			dataToUse.image = $(".image_url.post").val();
  			dataToUse.releaseDate = $(".release.post").val();
  			$.ajax({
  				method: methodUsed,
  				url: url,
  				data: dataToUse,
  				success: function (data) {
  					console.log(data);
  					$(".books").empty();
  					queryTheDatabase();
  					$(".title.post").val("");
					$(".author.post").val("");
					$(".image_url.post").val("");
					$(".release.post").val("");
  				},
	  			error: function (error) {
	  				console.log("something went wrong: " + error);
	  			}
  			});
  		} else {
  			alert("Please fill all fields");
  		}
  	});

  	$(".put").on("click", function handler() {
  		methodUsed = "PUT";
  		thisClass = $(this).attr("id");
  		url = "https://super-crud.herokuapp.com/books/" + $(".id.update." + thisClass).val();
  		//This hide() method makes it so that only one editor/deleter can be open at a time. The same goes for the $(".delete") version.
  		$(".update").hide();
  		$("button." + thisClass).text("Edit");
  		$("." + thisClass).show();
  	});

  	$(".delete").on("click", function handler() {
  		methodUsed = "DELETE";
  		thisClass = $(this).attr("id");
  		url = "https://super-crud.herokuapp.com/books/" + $(".id.update." + thisClass).val();
  		$(".update").hide();
  		$("button." + thisClass).text("Delete");
  		$("." + thisClass).show();
  	});

  	$(".btn-primary.update").on("click", function handler() {
  		if (methodUsed === "DELETE") {
  			$.ajax({
  				method: methodUsed,
  				url: url,
  				success: function (data) {
  			     	$(".books").empty();
  			     	queryTheDatabase();
  				},
  				error: function (error) {
  					console.log("There was an error with this request: " + error);
  				}
  			});
  		} else if ($(".title.update." + thisClass).val() !== "" && $(".author.update." + thisClass).val() !== "" && $(".image_url.update." + thisClass).val() !== "" && $(".release.update." + thisClass).val() !== "") {
  			dataToUse._id = $(".id.update." + thisClass).val();
  			dataToUse.title = $(".title.update." + thisClass).val();
  			dataToUse.author = $(".author.update." + thisClass).val();
  			dataToUse.image = $(".image_url.update." + thisClass).val();
  			dataToUse.releaseDate = $(".release.update." + thisClass).val();
  			console.log(dataToUse);
  			$.ajax({
  				method: methodUsed,
  				url: url,
  				data: dataToUse,
  				success: function (data) {
  					$(".books").empty();
  					queryTheDatabase();
  				},
  				error: function (error) {
  					console.log("There was an error with this request: " + error);
  				}
  			});
  		} else {
  			alert("Please ensure all fields are populated prior to submitting.");
  		}
  	});

});

