$(document).ready(function(){

document.querySelector('#fileSelect').addEventListener('click', function(e) {
  // Use the native click() of the file input.
  document.querySelector('#input').click();
}, false);

});
var clear_button    = document.getElementById('clear');

window.onload = function() {
    var input = document.getElementById('input');
    input.addEventListener('change', handleFiles, false);
}	
      function drawImage(imageObj) { 
	  
	   $('#fileSelect').toggle();
	  
        stage = new Kinetic.Stage({
          container: "myCanvas",
          width: 700,
          height: 500
		  
        });
		var backLayer = new Kinetic.Layer({});
		
		var background = new Kinetic.Rect({
		  
		   width: 700,
		   height: 500,
		   fill: 'black'
		
		});
	
		
        var layer1 = new Kinetic.Layer({
          width: 660,
          height: 400,
		  x: 20,
		  y: 20,
		  clip: {x:0, y:0, width: 660, height: 430},
		  stroke: 'white'
		});

        // darth vader
		var width = imageObj.width;
		var height = imageObj.height;
		
        var darthVaderImg = new Kinetic.Image({
          image: imageObj,
          x: layer1.width()/2,
          y: layer1.height()/2,
		  offset: {x:width/2, y:height/2},
          draggable: true
        });
	   
	   
	   var borderLayer = new Kinetic.Layer({});
	   
	   var border = new Kinetic.Rect({
	       width: 664,
		   height: 434,
		   x: 18,
		   y: 18,
		   stroke: 'white'
	   
	   });
	   
	   
	    
		
        
		
		backLayer.add(background);
		borderLayer.add(border);
		layer1.add(darthVaderImg);
		stage.add(backLayer);
        stage.add(borderLayer);
		stage.add(layer1);
		
        // add cursor styling
        darthVaderImg.on('mouseover', function() {
          document.body.style.cursor = 'move';
        });
        darthVaderImg.on('mouseout', function() {
          document.body.style.cursor = 'default';
        });
   
        
		
		
		$( "#cwise" ).on( "click", function( event, ui ) {
         processRotateImage(90 );
         } );
		 $( "#acwise" ).on( "click", function( event, ui ) {
         processRotateImage(-90 );
         } );
		
			function processRotateImage(deg){
			
			//rotate the image
			
			
			darthVaderImg.rotateDeg(deg);
            layer1.draw();
			
			}
			$( "#scaleup" ).on( "click", function( event, ui ) {
         processScaleImage( 1.1 );
         } );
		   $( "#scaledown" ).on( "click", function( event, ui ) {
         processScaleImage( .9 );
         } );
			function processScaleImage( scale ){
			curScaleX = darthVaderImg.scaleX();
			curScaleY = darthVaderImg.scaleY();
			darthVaderImg.scale({x:(curScaleX * scale), y:(curScaleY * scale)});
            layer1.draw();
			
			}
		clear_button.onclick = function(){
		    clear();
		}
		function clear(){

		 stage.destroy();
		 $('#input').val('');
		 $('#fileSelect').toggle();

		}
		
		
		  
		  var textLayer = new Kinetic.Layer();
		  		 
		  var text = new Kinetic.Text({
		     x: 100,
             y: 450,
			 width: 500,
			 height: 50,
             text: '',
			 align: 'center',
             fontSize: 30,
             fontFamily: 'Calibri',
             fill: 'white',
		     padding: 2
		  });
		  
		  
		  
		  
		  textLayer.add(text);
          stage.add(textLayer);
		 
		  
		  $('#textbox').keyup(function(){
		  
		  var words = $('#textbox').val();
		  if(words.length > 40){
		    text.fontSize(20);
			text.padding(5);
		  }else{
		    text.fontSize(30);
			text.padding(2);
		  }
		 text.text(words);
		 textLayer.draw();
		});
		
		
		$('.fa-square-o').click(function(){
		   
		   background.fill('white');
		   border.stroke('black');
		   text.fill('black');
		   backLayer.draw();
		   borderLayer.draw();
		   textLayer.draw();
		
		
		});
		$('.fa-square').click(function(){
		   
		   background.fill('black');
		   border.stroke('white');
		   text.fill('white');
		   backLayer.draw();
		   borderLayer.draw();
		   textLayer.draw();
		
		
		});
		
		
      }
      function handleFiles(e) {
	  window.URL = window.URL || window.webkitURL;
	  var url = URL.createObjectURL(e.target.files[0]);
      var canvas = document.getElementById('myCanvas');
	  canvas.innerHTML = '';
	  
	  var imageObj = new Image();
      imageObj.onload = function(event) {
	  
	   drawImage(this);
		
      };
      imageObj.src = url;
	   
	  }
  
	