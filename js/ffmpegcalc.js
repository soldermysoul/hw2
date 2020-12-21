		$(document).ready(function(){
			$("button").on("click",Calc);


timesout();


 function timesout(){
	let mytimes = [30,60,90,120,150,180,210,240,270,300 ];
	
	   for (let i = 0; i < mytimes.length; i++) {
	 $("#targetlength").append(`<option value="${mytimes[i]}">${mytimes[i]} Seconds</option>`);
	}
	
	
	
 }
 
 

			
function Calc(){
	$("#calcpts").html("");
	$("#sample").html("");


	score =0;
	let q1Response = $("#totallength").val();
	let q2Response = $("#targetlength").val();



	//Question 1
	if(!$.isNumeric(q1Response)){
		$("#q1Feedback").html("Video Length Should Be In Seconds");
	}

	if(!$.isNumeric(q2Response)){
		$("#q2Feedback").html("Target Length Should Be In Seconds");
	}


	if( $.isNumeric(q1Response) && $.isNumeric(q2Response)){
		var calculate = (q2Response / q1Response);
		$("#calcpts").html(calculate);
		$("#sample").html("Sample Output<br>ffmpeg -i input.mkv -filter:v \"setpts=" + calculate + "*PTS\" output.mkv");
		if(calculate > 1){
			$("#upordown").html("<img src ='img/up.png' class=\"img-fluid\"><br>");
			$("#desc").html("Video Speed Increased<br>");
			
		}else{
			$("#upordown").html("<img src ='img/down.png' class=\"img-fluid\"><br>");
			$("#desc").html("Video Speed Decreased<br>");
		
		}
		
		
	}




	}	

			
		})// Ready
