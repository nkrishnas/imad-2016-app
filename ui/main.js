console.log('Loaded!');
var button = document.getElementById('counter');

button.onclick = function() {
//Create a request object
var request = new XMLHttpRequest();

//capture the response and store it in a variable
request.onreadystatechange = function(){
if(request.readystate === XMLHttpRequest.DONE)
	{
	if(request.status ===200)
		{
			var counter = request.responseText;
			var span = document.getElementById('count');
			span.innerHTML = counter.toString();
		}
	}
};


//Render the variable in the correct span
//Make the request
//request.open('GET','https://cloud.imad.hasura.io/home/counter',true);
//counter = counter + 1;
//span.innerHTML = counter.toString();
};