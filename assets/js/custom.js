(function($){
$(document).ready(function(){

	//show student add modal

	$('a#student_show').click(function(){
		$('#student_add_modal').modal('show');

		return false;
	})

	//show single student modal
	$('a#single_show').click(function(){
		$('#single_student_modal').modal('show');

		return false;
	})



});

})(jQuery)