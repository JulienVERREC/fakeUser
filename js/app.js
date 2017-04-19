//console.log($);
//$.get('http://192.168.1.177/user').done(function(data){
//console.log(data);
//});
$(document).ready(function(){

	var charger = function(){

      	$.ajax({
          	url:'http://192.168.1.173:3333/user',
          	success: function(data){
          		console.log(data);

          		$("#nom").html(data.name);
          		$("#prenom").html(data.lastName);
          		$("img").attr("src",data.avatar);
          	}
      	});

     };
     charger();

	$("#action").on('click', function(){
		charger();

     });

});
