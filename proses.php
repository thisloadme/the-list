<?php 

$nama = $_POST['nama'];
$umur = $_POST['umur'];
$deskripsi = $_POST['deskripsi'];
$nama_gambar = $_FILES['gambar']['name'];
$s = false;
if ($nama == 'Dion' && $umur == 19) {
	$s = true;
}
$arr = array(
	// 'success' => $s,
	'nama' => $nama,
	'umur' => $umur,
	'deskripsi' => $deskripsi,
	'nama_gambar' => $nama_gambar
);
echo json_encode($arr);

 ?>