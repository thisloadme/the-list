<?php 

$nama = $_POST['nama'];
$umur = $_POST['umur'];
$s = false;
if ($nama == 'Dion' && $umur == 19) {
	$s = true;
}
$arr = array(
	'success' => $s,
	'nama' => $nama,
	'umur' => $umur,
);
echo json_encode($arr);

 ?>