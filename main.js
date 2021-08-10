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


