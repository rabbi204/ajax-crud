<?php 
	
	/**
	 * DB Connection
	 */
	require_once "../../app/db.php";
	require_once "../../app/function.php";
	
	//for check
	//print_r($_POST);
	

	//value get
	$name = $_POST['name'];
	$email = $_POST['email'];
	$cell = $_POST['cell'];

	$data = fileUp($_FILES['photo'], '../../media/students/' );
	$photo_name = $data['file_name'];

	$sql = "INSERT INTO students (name, email, cell, photo) VALUES ('$name','$email','$cell','$photo_name')";
	$connection -> query($sql);

	echo '<p class="alert alert-success">student added successfuly!<button class="close" data-dismiss="alert">&times;</button></p>';






















 ?>