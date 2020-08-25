<?php 

$q = $_GET["q"];
// koneksi db
$con = mysqli_connect('localhost','root','','db_ajax');
if (!$con){
    die('koneksi gagal' . mysql_error());
}


$sql ="SELECT * FROM mahasiswa WHERE IdMhs = ".$q."";
$hasil = mysqli_query($con,$sql);

?>

<table border='1'>
    <tr>
        <th>Nama Depan</th>
        <th>Nama Belakang</th>
        <th>Umur</th>
    </tr>
    <?php while ($row = mysqli_fetch_array($hasil,MYSQLI_BOTH)){ 
      
        
       echo "<tr>"; 
       echo     "<td>" . $row["NamaDepan"] . "</td>";
       echo     "<td>" . $row["NamaBelakang"] . "</td>";
       echo     "<td>" . $row["Umur"] . "</td>";
       echo "</tr>";
        } 
        ?>

</table>
<?php mysqli_close($con);?>

