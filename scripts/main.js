$(document).ready(function(){


	$('.little_img').mouseover(function(){
		var img_src = $(this).attr('src');
		$('.big_img').attr('src',img_src);
	})

var image_arr = ['images/image1.jpg','images/image2.jpg','images/image3.jpg','images/image5.jpg']

var i = 0;


setInterval(function(){
	if(i == 4){
		i = 0;
	}
	$('.big_img').attr('src',image_arr[i]);
	i++;
}, 4000);


back_arr = ['images/image7.jpg','images/image3.jpg','images/image8.jpg',]

var j = 0;
setInterval(function(){

	if(j == 3){
		j=0;
	}

$('body').css('background-image','url('+back_arr[j]+')');

j++;

}, 7000)


});