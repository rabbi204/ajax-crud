<?php 
	
	/**
	 * DB Connection
	 */
	require_once "../../app/db.php";
	require_once "../../app/function.php";

	$id = $_POST['student_id'];
	$name = $_POST['name'];
	$email = $_POST['email'];
	$cell = $_POST['cell'];

	if (isset($_FILES['new_photo']['name'])) {
		$data = fileUp($_FILES['new_photo'], '../../media/students/' );
		$photo_name = $data['file_name'];
		//for old photo delete
		unlink('../../media/students/'.$_POST['old_photo'] );

	}
	else{
		$photo_name = $_POST['old_photo'];
	}



	$sql = "UPDATE students SET name='$name',email='$email',cell='$cell',photo='$photo_name' WHERE id='$id' ";
	$data = $connection -> query($sql);

