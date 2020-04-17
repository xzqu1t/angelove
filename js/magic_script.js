$( "#magic_button" ).click(function() {
	$.ajax({
        type: "POST",
        url: "mag_message.php",
        success: function(data) {
			$( "#magic_button" ).fadeOut(300);
			$( "#magic_window #second_magic_img" ).fadeOut(500);
			$( "#magic_message" ).text(data);
			$( "#magic_message" ).fadeIn(600);
			$( "#more_magic" ).fadeIn(700);
        }
    });
});
$( "#more_magic" ).click(function() {
	$( "#magic_button" ).fadeIn(300);
	$( "#more_magic" ).fadeOut(300);
	$( "#magic_window #second_magic_img" ).fadeIn(500);
	$( "#magic_message" ).fadeOut(600);
});
	 vala = Array();

    vala['11-11']='я тебя люблю ашельный лягушонок';


function myrand(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

	function gadan(){
        s = ''; ss = '';
        for(i=1;i<=4;i++)
        {
            r = myrand(1,3);
            s = s + r;
            if(i==2) s = s + '-';
        }
        $('#heart_message').fadeOut(10);
		$('#heart_message').css('background','url(./images/Second_angel.png) no-repeat');
		$('#heart_message').fadeIn(600);
		$('#my_heart_message').text(vala[s]);
		$('#my_heart_message').fadeIn(650);
		$('#heart_button').fadeIn(690);
		$('#heart_button').text('�٨');
		$('#heart_button').fadeIn(700);
    }

	$( "#heart_button" ).click(function(){
		gadan();
		$( "#my_gif img" ).fadeOut(300);
		var gif_show=myrand(1, 3);
		$( "#my_gif_show" ).attr("src","./images/v_serdce_"+gif_show+".png");
		$( "#my_gif_show" ).fadeIn(50);
	});
