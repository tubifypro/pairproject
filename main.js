
var data = []
function store(){
	var obj = {
	username:function(){
	return document.getElementById('username').value

	},
     password:function(){
     return document.getElementById('pass').value
     }
}
// console.log(obj.username())
if(obj.username().length>3){
if(obj.password().length >8 ){
	data.push(obj)
}

}
  else {
  	alert('please check your information ')
  } 

return data
}




function store1(){
	var obj = {
	email:function(){
	return document.getElementById('emails').value

	},
    	username:function(){
	return document.getElementById('username').value

	},
      password:function(){
     return document.getElementById('pass').value
     }
}
// console.log(obj.username())
if(obj.username().length>3){
if(obj.password().length >8){
	data.push(obj)
}

}
  else {
  	alert('please check your information ')
  } 

return data
}


function openvideo1(){
		$('#divmid').html('');
		$('#divmid').append('<video controls class="video"><source src="video1.mp4" type="video/mp4" autoplay ></video>');
	}
	function openvideo2(){
		$('#divmid').html('');
		$('#divmid').append('<video controls class="video"><source src="video2.mp4" type="video/mp4" autoplay ></video>')
	}
	function openvideo3(){
		$('#divmid').html('');
		$('#divmid').append('<video controls class="video"><source src="video3.mp4" type="video/mp4" autoplay ></video>')
	}
	function openvideo4(){
		$('#divmid').html('');
		$('#divmid').append('<video controls class="video"><source src="video4.mp4" type="video/mp4" autoplay ></video>')
	}
	function openvideo5(){
		$('#divmid').html('');
		$('#divmid').append('<video controls class="video"><source src="video5.mp4" type="video/mp4" autoplay ></video>')
	}
	function openvideo6(){
$('#divmid').html('');
		$('#divmid').append('<video controls class="video"><source src="video6.mp4" type="video/mp4" autoplay ></video>')
	}
	function openvideo7(){
		$('#divmid').html('');
		$('#divmid').append('<video controls class="video"><source src="video7.mp4" type="video/mp4" autoplay ></video>')
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

function verif(){
	console.log('here')
	var pass=document.getElementById('pass').value;
	var user=document.getElementById('username').value;
	var pattsym=/[^a-zA-Z0-9]/;
	var patt=/[a-z]/;
    var patt2=/[A-Z]/;
    var patt3=/[0-9]/;
 
    if(pattsym.test(pass)&&pass.length>=8)
	{ alert("Your Are In");
		localStorage.setItem(user,pass);
		$(location).attr('href','webpage tubify.html');
	}
		else{
			alert("verify your informations");
		}
}
function verifLogIn(){
	var email = document.getElementById('emails').value
	var pass=document.getElementById('pass').value;
	var username=document.getElementById('username').value;
	var pswd=localStorage.getItem(username);   
	var pate= /@/
    console.log(pate.test(email))
	if(pswd===pass&& pate.test(email)){
		
		$(location).attr('href','webpage tubify.html');
	}
	else{
		alert("Your password or your username is wrong !");
	}


}
