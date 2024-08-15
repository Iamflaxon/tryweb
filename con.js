function data(){

	var a=document.getElementById("n1").value;
	var b=document.getElementById("n2").value;
	var c=document.getElementById("n3").value;
	var d=document.getElementById("n4").value;
	var e=document.getElementById("n5").value;
	var f=document.getElementById("n6").value;

	if(a==""||b==""||c==""||d==""){

		alert("all feild are mendetory");
		return false;

	}

	else if(b.length<11||b.length>11){
		alert("Number should be of 11 digits");
		return false;
	}

	else if(d.length<20){
		alert("your text must be greater than 20");
		return false;
	}

	else if(e!=f){
		alert("check your password");
		return false;
	}



	else{
		true;
	}




}