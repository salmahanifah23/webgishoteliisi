<?php
    include("../connect.php");
    $id = $_GET['id'];

    $result=  pg_query("SELECT detail_hotel.id_angkot, angkot.route_color as color, angkot.destination, st_x(st_centroid(hotel.geom)) as lng2, st_y(st_centroid(hotel.geom)) as lat2, detail_hotel.lat, detail_hotel.lng, detail_hotel.description FROM detail_hotel left join hotel on hotel.id=detail_hotel.id_hotel left join angkot on angkot.id = detail_hotel.id_angkot where detail_hotel.id_hotel='$id' ");

        while($baris = pg_fetch_array($result))
            {
                $id=$baris['id_angkot'];
                $destination=$baris['destination'];
                $color=$baris['color'];
                $lat=$baris['lat'];
                $lng=$baris['lng'];
                $lat2=$baris['lat2'];
                $lng2=$baris['lng2'];
                $description=$baris['description'];
                $dataarray[]=array('id'=>$id,'destination'=>$destination,'lat'=>$lat,'lng'=>$lng,'lat2'=>$lat2,'lng2'=>$lng2,'color'=>$color,'description'=>$description);
            }
            echo json_encode ($dataarray);
?>