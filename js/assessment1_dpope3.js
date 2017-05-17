// Get reference to large image and store in variable named canvas
var canvas = document.getElementById('bigPic');
var ImageGallery = {
	init: function() {
	  	 picArray = ["1", "2", "3", "4"];

	   	// Get reference to div#thumbnails and store in variable named 
		// thumbsDiv
		var thumbsDiv = document.getElementById('thumbnails');

		// Set up nodelist, named thumbs, containing references to all 
		// <img> tags in div#thumbnails
		var thumbs = thumbsDiv.getElementsByTagName('img');
		
		// Add mouseover and mouseout event handlers to each thumbnail
		// image using a for loop.  Set them up to call a method of our
		// object called newPic on mouse over and a method called origPic 
		// on mouse off.
		for (var i = 0; i < thumbs.length; i++) {
			thumbs[i].addEventListener("mouseover", ImageGallery.newPic);
			thumbs[i].addEventListener("mouseout", ImageGallery.origPic);
		}
	}, newPic: function(e) {
		// Get the value of the moused over object's id attribute and			
		// store it in a variable named imgNumber
		var imgNumber = parseInt(this.id) + 1;
	
		// Build the path to the image we want to rollover to and store
		// the path string in a variable named imgPath
		var imgPath = `images/bigPics/${imgNumber}.jpg`;
	
		// Rollover the large image to the moused over thumbnail's large 
		// image
		canvas.src = imgPath;
	}, origPic: function(e) {
		// Rollover the large image back to its original image
		canvas.src = 'images/bigPics/initialPic.jpg';
	}
};
Core.start(ImageGallery);