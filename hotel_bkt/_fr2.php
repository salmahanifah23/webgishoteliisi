<?php
require '../connect.php';

$min=$_GET['min']; //harga min
$max=$_GET['max']; //harga max
$tipe=$_GET['tipe']; //tipe hotel
$toty=$_GET['toty']; //tipe wisata

$querysearch    ="SELECT DISTINCT hotel.id, hotel.name, st_x(st_centroid(hotel.geom)) as lon, st_y(st_centroid(hotel.geom)) as lat from hotel left join detail_room on hotel.id = detail_room.id_hotel left join room on room.id=detail_room.id_room left join hotel_type on hotel.id_type=hotel_type.id left join detail_hotel on detail_hotel.id_hotel=hotel.id, tourism_type left join tourism on tourism.id_type=tourism_type.id where room.price >= $min and room.price <= $max and hotel_type.id = '$tipe' and tourism_type.id = '$toty' and st_distancesphere(hotel.geom, tourism.geom) <= 300";

$hasil=pg_query($querysearch);
while($baris = pg_fetch_array($hasil))
    {
          $query="SELECT tourism.id as id2, st_x(st_centroid(tourism.geom)) as lon2, st_y(st_centroid(tourism.geom)) as lat2 from hotel, tourism where st_distancesphere(hotel.geom, tourism.geom) <= 300 and hotel.id='".$baris['id']."'";

          $id=$baris['id'];
          $name=$baris['name'];
          $lat=$baris['lat'];
          $lng=$baris['lon'];
          $res=pg_query($query);
          while($row=pg_fetch_array($res)){
            $id2=$row['id2'];
            $lat2=$row['lat2'];
            $lng2=$row['lon2'];
          }
          $dataarray[]=array('id'=>$id,'id2'=>$id2,'name'=>$name, 'lng'=>$lng, 'lat'=>$lat, 'lng2'=>$lng2, 'lat2'=>$lat2);
    }
echo json_encode ($dataarray);

?>