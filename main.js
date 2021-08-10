function openvideo1(){
		$('#divmid').html('');
		$('#divmid').append('<video controls><source src="video1.mp4" type="video/mp4" autoplay ></video>');
	}
	function openvideo2(){
		$('#divmid').html('');
		$('#divmid').append('<video controls><source src="video2.mp4" type="video/mp4" autoplay ></video>')
	}
	function openvideo3(){
		$('#divmid').html('');
		$('#divmid').append('<video controls><source src="video3.mp4" type="video/mp4" autoplay ></video>')
	}
	function openvideo4(){
		$('#divmid').html('');
		$('#divmid').append('<video controls><source src="video4.mp4" type="video/mp4" autoplay ></video>')
	}
	function openvideo5(){
		$('#divmid').html('');
		$('#divmid').append('<video controls><source src="video5.mp4" type="video/mp4" autoplay ></video>')
	}
	function openvideo6(){
$('#divmid').html('');
		$('#divmid').append('<video controls><source src="video6.mp4" type="video/mp4" autoplay ></video>')
	}
	function openvideo7(){
		$('#divmid').html('');
		$('#divmid').append('<video controls ><source src="video7.mp4" type="video/mp4" autoplay ></video>')
	}
	
	function jsvideos(){
		$('#divright').html('')
		$('#divright').append('<button class="jsbtn1" onclick="openvideo1()"><div></div>Intro to js<br><br></button><br><br><button class="jsbtn2" onclick="openvideo2()">Tutorial 1</button><br><br><button class="jsbtn3" onclick="openvideo3()">Tutorial 2</button><br><br><button class="jsbtn4" onclick="openvideo4()">Tutorial 3</button><br><br><button class="jsbtn5" onclick="openvideo5()">Tutorial 4</button><br><br><button class="jsbtn6" onclick="openvideo6()">Tutorial 5</button><br><br><button class="jsbtn6" onclick="openvideo7()">Tutorial 6</button><br><br>');

	}
	function cssvideos(){
		$('#divright').html('')
		$('#divright').append('<button class="cssbtn1" onclick="opencssvideo1()"><div></div>Intro to CSS<br><br></button><br><br><button class="cssbtn1" onclick="opencssvideo2()">Tutorial 1</button><br><br><button class="cssbtn1" onclick="opencssvideo3()">Tutorial 2</button><br><br><button class="cssbtn1" onclick="opencssvideo4()">Tutorial 3</button><br><br><button class="cssbtn1" onclick="opencssvideo5()">Tutorial 4</button><br>');
	}
	function htmlvideos(){
		$('#divright').html('');
	}

function opencssvideo1(){
	$('#divmid').html('');
		$('#divmid').append('<video controls class="video"><source  src="css1.mp4" type="video/mp4" autoplay ></video>');
}
function opencssvideo2(){
	$('#divmid').html('');
		$('#divmid').append('<video controls class="video"><source src="css2.mp4" type="video/mp4" autoplay ></video>');
}
function opencssvideo3(){
	$('#divmid').html('');
		$('#divmid').append('<video controls class="video" ><source src="css3.mp4" type="video/mp4" autoplay ></video>');
}
function opencssvideo4(){
	$('#divmid').html('');
		$('#divmid').append('<video controls class="video" > <source src="css4.mp4" type="video/mp4" autoplay ></video>');
}
function opencssvideo5(){
	$('#divmid').html('');
		$('#divmid').append('<video controls class="video" ><source src="css5.mp4" type="video/mp4" autoplay ></video>');
}

