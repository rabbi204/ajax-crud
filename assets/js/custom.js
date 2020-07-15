(function($){
$(document).ready(function(){

	//show student add modal

	$('a#student_show').click(function(){
		$('#student_add_modal').modal('show');

		return false;
	})

	//show single student modal
	$(document).on('click','a#single_show', function(){
		$('#single_student_modal').modal('show');

		let show_id =$(this).attr('student_id');

		$.ajax({
			url: 'inc/ajax/show_single_student.php',
			data: { id: show_id},
			method:"POST",
			success: function(data){

				
				let single_data = JSON.parse(data);

				$('img#single_student_img').attr('src','media/students/' + single_data.photo );

				$('h2#single_name').text(single_data.name);
				$('td#single_name').text(single_data.name);
				$('td#single_email').text(single_data.email);
				$('td#single_cell').text(single_data.cell);

			}
		})


		return false;
	});


	//add new student
	$('form#add_student_form').submit(function(event){
		event.preventDefault();

		//get some input field value
		let name = $('input[name="name"]').val();
		let email = $('input[name="email"]').val();
		let cell = $('input[name="cell"]').val();

		if (name =='' || email =='' || cell =='')
		{
			$('.mess').html('<p class="alert alert-danger">All fields are Required..!<button class="close" data-dismiss="alert">&times;</button></p>');
		}else{
			$.ajax({
				url: 'inc/ajax/student_add.php',
				data: new FormData(this),
				contentType:false,
				processData:false,
				method: "POST",
				success: function(data){

					$('form#add_student_form')[0].reset();
					$('#student_add_modal').modal('hide');
					$('.mess-all').html(data);
					allStudentData(); 

				}
			});
		}

	})


	//Show all student data
	function allStudentData(){
		$.ajax({

			url: 'inc/ajax/show_all.php',
			success: function(data){
				$('tbody#all_students_data').html(data);
			}

		});
	}
	
	allStudentData();


	//Delete student
	$(document).on('click','a#delete_student', function(){

		let delete_id = $(this).attr('student_id');
		
		let conf = confirm('Are you sure?');

		if (conf == true) {
			$.ajax({
				url: 'inc/ajax/delete_student.php',
				data: { id : delete_id },
				method: "POST",
				success: function(data){
					
					$('.mess-all').html('<p class="alert alert-success">Student data deleted successfully..!<button class="close" data-dismiss="alert">&times;</button></p>');
					allStudentData();
				}

			});

		}else{
			return false;
		}
		//for remove #tag
		return false;
	});

	// Edit student data
	$(document).on('click','a#edit_student',function(event){
		event.preventDefault();

		let edit_id = $(this).attr('student_id');

		$.ajax({
			url: 'inc/ajax/edit_student.php',
			data: { id: edit_id },
			method: "POST",
			success: function(data){
				let edit_data = JSON.parse(data);
				
				$('#student_update_modal input[name="name"]').val(edit_data.name);
				$('#student_update_modal input[name="email"]').val(edit_data.email);
				$('#student_update_modal input[name="cell"]').val(edit_data.cell);
				$('#student_update_modal img').attr('src','media/students/' + edit_data.photo);
			}
		});

		$('#student_update_modal').modal('show');




	});


});

})(jQuery)