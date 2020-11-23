function _fs1(){
        hapus_menu();
        hapus_Semua();

        var y = [];
        for(i=0;i<$("input[name=fs1_fas]:checked").length;i++){
          y.push($("input[name=fs1_fas]:checked")[i].value);
        }
        var z = document.getElementById('fs1_type').value;
        var min = document.getElementById('fs1_hmin').value;
        var max = document.getElementById('fs1_hmax').value;
        document.getElementById('judul_table').innerHTML="Fungsional Baru";

        if (y.length==0||z==""||min=="") {          
          document.getElementById('modal_title').innerHTML="Info";
          document.getElementById('modal_body').innerHTML="Silahkan isi form terlebih dahulu";
          $('#myModal').modal('show'); 
          return;
        } else {
          $("#view_kanan_table").show();
          $('#kanan_table').empty();            
        }

        $('#kanan_table').append("<tr><th class='centered'>Name</th><th class='centered' colspan='3'>Action</th></tr>");
        console.log(server+'_fs1.php?min='+min+'&max='+max+'&fas='+y+'&tipe='+z);
        $.ajax({url: server+'_fs1.php?min='+min+'&max='+max+'&fas='+y+'&tipe='+z, data: "", dataType: 'json', success: function(rows){ 
          if(rows == null)
          {
            alert('Data Did Not Exist !');
          }
            for (var i in rows){ 
              var row = rows[i];
              var id = row.id;
              var name = row.name;
              var lng = row.lng;
              var lat = row.lat;
              $('#kanan_table').append("<tr><td>"+name+"</td><td><a role='button' class='btn btn-success fa fa-info' onclick='data_hotel_1_info(\""+id+"\")'></a></td><td><a role='button' class='btn btn-danger fa fa-taxi' title='Angkot' onclick='angkot_sekitar(\""+id+"\")'></a></td></tr>");  
              console.log(name);
              //MARKER
              centerBaru = new google.maps.LatLng(lat, lng);
              map.setCenter(centerBaru);
              map.setZoom(16);  
              var marker = new google.maps.Marker({
                position: centerBaru,              
                icon:'icon/marker_hotel.png',
                animation: google.maps.Animation.DROP,
                map: map
                });
              markersDua.push(marker);
              klikInfoWindow(id,marker);
            }//end for               
        }});//end ajax 
}

function _fs2(){
        hapus_menu();
        hapus_Semua();

        var y = [];
        for(i=0;i<$("input[name=fs2_fas]:checked").length;i++){
          y.push($("input[name=fs2_fas]:checked")[i].value);
        }
        var z = document.getElementById('fs2_type').value;
        var x = document.getElementById('fs2_category').value;
        document.getElementById('judul_table').innerHTML="Fungsional Baru";

        if (y ==""||z == ""||x == "") {          
          document.getElementById('modal_title').innerHTML="Info";
          document.getElementById('modal_body').innerHTML="Silahkan isi form terlebih dahulu";
          $('#myModal').modal('show'); 
          return;
        } else {
          $("#view_kanan_table").show();
          $('#kanan_table').empty();            
        }

        $('#kanan_table').append("<tr><th class='centered'>Name</th><th class='centered' colspan='3'>Action</th></tr>");
        console.log(server+'_fs2.php?category='+x+'&fas='+y+'&tipe='+z);
        $.ajax({url: server+'_fs2.php?category='+x+'&fas='+y+'&tipe='+z, data: "", dataType: 'json', success: function(rows){ 
          if(rows == null)
          {
            alert('Data Did Not Exist !');
          }
            for (var i in rows){ 
              var row = rows[i];
              var id = row.id;
              var name = row.name;
              var lng = row.lng;
              var lat = row.lat;
              var id2 = row.id2;
              var lng2 = row.lng2;
              var lat2 = row.lat2;
              $('#kanan_table').append("<tr><td>"+name+"</td><td><a role='button' class='btn btn-success fa fa-info' onclick='data_hotel_1_info(\""+id+"\")'></a></td><td><a role='button' class='btn btn-danger fa fa-taxi' title='Angkot' onclick='angkot_sekitar(\""+id+"\")'></a></td></tr>");  
              console.log(name);
              //MARKER hotel
              centerBaru = new google.maps.LatLng(lat, lng);
              map.setCenter(centerBaru);
              map.setZoom(16);  
              var marker = new google.maps.Marker({
                position: centerBaru,              
                icon:'icon/marker_hotel.png',
                animation: google.maps.Animation.DROP,
                map: map
                });
              markersDua.push(marker);
              klikInfoWindow(id,marker);
              // Mesjid
              centerMe = new google.maps.LatLng(lat2, lng2);
              // map.setCenter(centerMe);
              map.setZoom(16);  
              var marker2 = new google.maps.Marker({
                position: centerMe,              
                icon:'icon/marker_masjid.png',
                animation: google.maps.Animation.DROP,
                map: map
                });
              markersDua.push(marker2);
              klikInfoWindowMes(id2,marker2);
            }//end for               
        }});//end ajax 
}

function _fs3(){
  hapus_menu();
  hapus_Semua();

  var x = document.getElementById('fs3_wisata').value;
  var y = document.getElementById('fs3_type').value;
  var min = document.getElementById('fs3_hmin').value;
  var max = document.getElementById('fs3_hmax').value;
  document.getElementById('judul_table').innerHTML="Fungsional Baru";

  if (y ==""||min == ""||max == ""||x == "") {          
    document.getElementById('modal_title').innerHTML="Info";
    document.getElementById('modal_body').innerHTML="Silahkan isi form terlebih dahulu";
    $('#myModal').modal('show'); 
    return;
  } else {
    $("#view_kanan_table").show();
    $('#kanan_table').empty();            
  }

  $('#kanan_table').append("<tr><th class='centered'>Name</th><th class='centered' colspan='3'>Action</th></tr>");
  console.log(server+'_fs3.php?tw='+x+'&tipe='+y+'&min='+min+'&max='+max);
  $.ajax({url: server+'_fs3.php?tw='+x+'&tipe='+y+'&min='+min+'&max='+max, data: "", dataType: 'json', success: function(rows){ 
    if(rows == null)
    {
      alert('Data Did Not Exist !');
    }
      for (var i in rows){ 
        var row = rows[i];
        var id = row.id;
        var name = row.name;
        var lng = row.lng;
        var lat = row.lat;
        var id2 = row.id2;
        var name2 = row.name2;
        var lng2 = row.lng2;
        var lat2 = row.lat2;
        $('#kanan_table').append("<tr><td>"+name+"</td><td><a role='button' class='btn btn-success fa fa-info' onclick='data_hotel_1_info(\""+id+"\")'></a></td><td><a role='button' class='btn btn-danger fa fa-taxi' title='Angkot' onclick='angkot_sekitar(\""+id+"\")'></a></td></tr>");  
        console.log(name);
        //MARKER
        centerBaru = new google.maps.LatLng(lat, lng);
        map.setCenter(centerBaru);
        map.setZoom(16);  
        var marker = new google.maps.Marker({
          position: centerBaru,              
          icon:'icon/marker_hotel.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker);
        klikInfoWindow(id,marker);
        //MARKER souvenir
        centerSou = new google.maps.LatLng(lat2, lng2);
        map.setZoom(16);  
        var marker2 = new google.maps.Marker({
          position: centerSou,              
          icon:'icon/marker_tw.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker);
        klikInfoWindowSou(id2,marker2);
      }//end for               
  }});//end ajax 
}

function _fs4(){
  hapus_menu();
  hapus_Semua();

  var x = document.getElementById('fs4_category').value;
  var y = document.getElementById('fs4_wisata').value;
  var z = document.getElementById('fs4_type').value;
  document.getElementById('judul_table').innerHTML="Fungsional Baru";

  if (y ==""||x == ""||z == "") {          
    document.getElementById('modal_title').innerHTML="Info";
    document.getElementById('modal_body').innerHTML="Silahkan isi form terlebih dahulu";
    $('#myModal').modal('show'); 
    return;
  } else {
    $("#view_kanan_table").show();
    $('#kanan_table').empty();            
  }

  $('#kanan_table').append("<tr><th class='centered'>Name</th><th class='centered' colspan='3'>Action</th></tr>");
  console.log(server+'_fs4.php?tw='+y+'&tipe='+z+'&category='+x);
  $.ajax({url: server+'_fs4.php?tw='+y+'&tipe='+z+'&category='+x, data: "", dataType: 'json', success: function(rows){ 
    if(rows == null)
    {
      alert('Data Did Not Exist !');
    }
      for (var i in rows){ 
        var row = rows[i];
        var id = row.id;
        var name = row.name;
        var lng = row.lng;
        var lat = row.lat;
        var id2 = row.id2;
        var lng2 = row.lng2;
        var lat2 = row.lat2;
        var id3 = row.id3;
        var lng3 = row.lng3;
        var lat3 = row.lat3;
        $('#kanan_table').append("<tr><td>"+name+"</td><td><a role='button' class='btn btn-success fa fa-info' onclick='data_hotel_1_info(\""+id+"\")'></a></td><td><a role='button' class='btn btn-danger fa fa-taxi' title='Angkot' onclick='angkot_sekitar(\""+id+"\")'></a></td></tr>");  
        console.log(name);
        //MARKER
        centerBaru = new google.maps.LatLng(lat, lng);
        map.setCenter(centerBaru);
        map.setZoom(16);  
        var marker = new google.maps.Marker({
          position: centerBaru,              
          icon:'icon/marker_hotel.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker);
        klikInfoWindow(id,marker);
        //MARKER tourism
        centerOW = new google.maps.LatLng(lat2, lng2);
        map.setZoom(16);  
        var marker2 = new google.maps.Marker({
          position: centerOW,              
          icon:'icon/marker_tw.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker2);
        klikInfoWindowOW(id2,marker2);
        //MARKER Mes
        centerMes = new google.maps.LatLng(lat3, lng3);
        map.setZoom(16);  
        var marker3 = new google.maps.Marker({
          position: centerMes,              
          icon:'icon/marker_masjid.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker3);
        klikInfoWindowMes(id3,marker3);
      }//end for               
  }});//end ajax 
}

function _fs5(){
  hapus_menu();
  hapus_Semua();

  var x = document.getElementById('fs5_si').value;
  var y = document.getElementById('fs5_sou').value;
  var z = document.getElementById('fs5_type').value;
  document.getElementById('judul_table').innerHTML="Fungsional Baru";

  if (y ==""||x == ""||z == "") {          
    document.getElementById('modal_title').innerHTML="Info";
    document.getElementById('modal_body').innerHTML="Silahkan isi form terlebih dahulu";
    $('#myModal').modal('show'); 
    return;
  } else {
    $("#view_kanan_table").show();
    $('#kanan_table').empty();            
  }

  $('#kanan_table').append("<tr><th class='centered'>Name</th><th class='centered' colspan='3'>Action</th></tr>");
  console.log(server+'_fs5.php?si='+x+'&sou='+y+'&tipe='+z);
  $.ajax({url: server+'_fs5.php?si='+x+'&sou='+y+'&tipe='+z, data: "", dataType: 'json', success: function(rows){ 
    if(rows == null)
    {
      alert('Data Did Not Exist !');
    }
      for (var i in rows){ 
        var row = rows[i];
        var id = row.id;
        var name = row.name;
        var lng = row.lng;
        var lat = row.lat;
        var id2 = row.id2;
        var lng2 = row.lng2;
        var lat2 = row.lat2;
        var id3 = row.id3;
        var lng3 = row.lng3;
        var lat3 = row.lat3;
        $('#kanan_table').append("<tr><td>"+name+"</td><td><a role='button' class='btn btn-success fa fa-info' onclick='data_hotel_1_info(\""+id+"\")'></a></td><td><a role='button' class='btn btn-danger fa fa-taxi' title='Angkot' onclick='angkot_sekitar(\""+id+"\")'></a></td></tr>");  
        console.log(name);
        //MARKER
        centerBaru = new google.maps.LatLng(lat, lng);
        map.setCenter(centerBaru);
        map.setZoom(16);  
        var marker = new google.maps.Marker({
          position: centerBaru,              
          icon:'icon/marker_hotel.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker);
        klikInfoWindow(id,marker);
        //MARKER tourism
        centerOW = new google.maps.LatLng(lat2, lng2);
        map.setZoom(16);  
        var marker2 = new google.maps.Marker({
          position: centerOW,              
          icon:'icon/marker_oo.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker2);
        klikInfoWindowSou(id2,marker2);
        //MARKER Mes
        centerMes = new google.maps.LatLng(lat3, lng3);
        map.setZoom(16);  
        var marker3 = new google.maps.Marker({
          position: centerMes,              
          icon:'icon/marker_industri.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker3);
        klikInfoWindowSM(id3,marker3);
      }//end for               
  }});//end ajax 
}

function _fr1(){
  hapus_menu();
  hapus_Semua();


  var y = [];
  for(i=0;i<$("input[name=fr1_fas]:checked").length;i++){
    y.push($("input[name=fr1_fas]:checked")[i].value);
  }
  var z = document.getElementById('fr1_destinasi').value;
  var min = document.getElementById('fr1_hmin').value;
  var max = document.getElementById('fr1_hmax').value;
  document.getElementById('judul_table').innerHTML="Fungsional Baru";

  if ((y =="")&&(z == "")&&(min == ""||max == "")) {          
    document.getElementById('modal_title').innerHTML="Info";
    document.getElementById('modal_body').innerHTML="Silahkan isi form terlebih dahulu";
    $('#myModal').modal('show'); 
    return;
  } else {
    $("#view_kanan_table").show();
    $('#kanan_table').empty();            
  }

  $('#kanan_table').append("<tr><th class='centered'>Name</th><th class='centered' colspan='3'>Action</th></tr>");
  console.log(server+'_fr1.php?min='+min+'&max='+max+'&fas='+y+'&destinasi='+z);
  $.ajax({url: server+'_fr1.php?min='+min+'&max='+max+'&fas='+y+'&destinasi='+z, data: "", dataType: 'json', success: function(rows){ 
    if(rows == null)
    {
      alert('Data Did Not Exist !');
    }
      for (var i in rows){ 
        var row = rows[i];
        var id = row.id;
        var aid = row.aid;
        var name = row.name;
        var lng = row.lng;
        var lat = row.lat;
        var color = row.color;
        $('#kanan_table').append("<tr><td>"+name+"</td><td><a role='button' class='btn btn-success fa fa-info' onclick='data_hotel_1_info(\""+id+"\")'></a></td><td><a role='button' class='btn btn-danger fa fa-taxi' title='Angkot' onclick='angkot_sekitar(\""+id+"\")'></a></td></tr>");  
        console.log(name);
        //MARKER
        centerBaru = new google.maps.LatLng(lat, lng);
        map.setCenter(centerBaru);
        map.setZoom(16);  
        var marker = new google.maps.Marker({
          position: centerBaru,              
          icon:'icon/marker_hotel.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker);
        klikInfoWindow(id,marker);
        route_angkot_1(z,color);
      }//end for               
  }});//end ajax 
}

function _fr2(){
  hapus_menu();
  hapus_Semua();


  var y = document.getElementById('fr2_type').value;
  var z = document.getElementById('fr2_toty').value;
  var min = document.getElementById('fr2_hmin').value;
  var max = document.getElementById('fr2_hmax').value;
  document.getElementById('judul_table').innerHTML="Fungsional Baru";

  if ((y =="")&&(z == "")&&(min == ""||max == "")) {          
    document.getElementById('modal_title').innerHTML="Info";
    document.getElementById('modal_body').innerHTML="Silahkan isi form terlebih dahulu";
    $('#myModal').modal('show'); 
    return;
  } else {
    $("#view_kanan_table").show();
    $('#kanan_table').empty();            
  }

  $('#kanan_table').append("<tr><th class='centered'>Name</th><th class='centered' colspan='3'>Action</th></tr>");
  console.log(server+'_fr2.php?min='+min+'&max='+max+'&tipe='+y+'&toty='+z);
  $.ajax({url: server+'_fr2.php?min='+min+'&max='+max+'&tipe='+y+'&toty='+z, data: "", dataType: 'json', success: function(rows){ 
    if(rows == null)
    {
      alert('Data Did Not Exist !');
    }
      for (var i in rows){ 
        var row = rows[i];
        var id = row.id;
        var id2 = row.id2;
        var name = row.name;
        var lng = row.lng;
        var lat = row.lat;
        var lng2 = row.lng2;
        var lat2 = row.lat2;
        $('#kanan_table').append("<tr><td>"+name+"</td><td><a role='button' class='btn btn-success fa fa-info' onclick='data_hotel_1_info(\""+id+"\")'></a></td><td><a role='button' class='btn btn-danger fa fa-taxi' title='Angkot' onclick='angkot_sekitar(\""+id+"\")'></a></td></tr>");  
        console.log(name);
        //MARKER
        centerBaru = new google.maps.LatLng(lat, lng);
        map.setCenter(centerBaru);
        map.setZoom(16);  
        var marker = new google.maps.Marker({
          position: centerBaru,              
          icon:'icon/marker_hotel.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker);
        klikInfoWindow(id,marker);
        // Objek Wisata
        centerDua = new google.maps.LatLng(lat2, lng2);
        map.setCenter(centerDua);
        map.setZoom(16);  
        var markerOW = new google.maps.Marker({
          position: centerDua,              
          icon:'icon/marker_tw.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(markerOW);
        klikInfoWindowOW(id2,markerOW);

      }//end for               
  }});//end ajax 
}

function _fr3(){
  hapus_menu();
  hapus_Semua();

  var x = document.getElementById('fr3_souvenir').value;
  var y = document.getElementById('fr3_type').value;
  var z = document.getElementById('fr3_intyp').value;
  document.getElementById('judul_table').innerHTML="Fungsional Baru";

  if ((y =="")&&(z == "")&&(x == "")) {          
    document.getElementById('modal_title').innerHTML="Info";
    document.getElementById('modal_body').innerHTML="Silahkan isi form terlebih dahulu";
    $('#myModal').modal('show'); 
    return;
  } else {
    $("#view_kanan_table").show();
    $('#kanan_table').empty();            
  }

  $('#kanan_table').append("<tr><th class='centered'>Name</th><th class='centered' colspan='3'>Action</th></tr>");
  console.log(server+'_fr3.php?sou='+x+'&tipe='+y+'&intyp='+z);
  $.ajax({url: server+'_fr3.php?sou='+x+'&tipe='+y+'&intyp='+z, data: "", dataType: 'json', success: function(rows){ 
    if(rows == null)
    {
      alert('Data Did Not Exist !');
    }
      for (var i in rows){ 
        var row = rows[i];
        var id = row.id;
        var name = row.name;
        var lng = row.lng;
        var lat = row.lat;
        var id2 = row.id2;
        var lng2 = row.lng2;
        var lat2 = row.lat2;
        var id3 = row.id3;
        var lng3 = row.lng3;
        var lat3 = row.lat3;
        $('#kanan_table').append("<tr><td>"+name+"</td><td><a role='button' class='btn btn-success fa fa-info' onclick='data_hotel_1_info(\""+id+"\")'></a></td><td><a role='button' class='btn btn-danger fa fa-taxi' title='Angkot' onclick='angkot_sekitar(\""+id+"\")'></a></td></tr>");  
        console.log(name);
        //MARKER
        centerBaru = new google.maps.LatLng(lat, lng);
        map.setCenter(centerBaru);
        map.setZoom(16);  
        var marker = new google.maps.Marker({
          position: centerBaru,              
          icon:'icon/marker_hotel.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker);
        klikInfoWindow(id,marker);
        //MARKER souvenir
        centerSou = new google.maps.LatLng(lat2, lng2);
        map.setZoom(16);  
        var marker2 = new google.maps.Marker({
          position: centerSou,              
          icon:'icon/marker_oo.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker2);
        klikInfoWindowSou(id2,marker2);
        //MARKER Industri
        centerIn = new google.maps.LatLng(lat3, lng3);
        map.setZoom(16);  
        var marker3 = new google.maps.Marker({
          position: centerIn,
          icon:'icon/ik.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker3);
        klikInfoWindowSM(id3,marker3);
      }//end for               
  }});//end ajax 
}

function _fr4(){
  hapus_menu();
  hapus_Semua();

  var x = document.getElementById('fr4_kuliner').value;
  var y = document.getElementById('fr4_type').value;
  var z = [];
  for(i=0;i<$("input[name=fr4_fas]:checked").length;i++){
    z.push($("input[name=fr4_fas]:checked")[i].value);
  }
  document.getElementById('judul_table').innerHTML="Fungsional Baru";

  if ((y =="")&&(z == "")&&(x == "")) {          
    document.getElementById('modal_title').innerHTML="Info";
    document.getElementById('modal_body').innerHTML="Silahkan isi form terlebih dahulu";
    $('#myModal').modal('show'); 
    return;
  } else {
    $("#view_kanan_table").show();
    $('#kanan_table').empty();            
  }

  $('#kanan_table').append("<tr><th class='centered'>Name</th><th class='centered' colspan='3'>Action</th></tr>");
  console.log(server+'_fr4.php?kul='+x+'&tipe='+y+'&fas='+z);
  $.ajax({url: server+'_fr4.php?kul='+x+'&tipe='+y+'&fas='+z, data: "", dataType: 'json', success: function(rows){ 
    if(rows == null)
    {
      alert('Data Did Not Exist !');
    }
      for (var i in rows){ 
        var row = rows[i];
        var id = row.id;
        var name = row.name;
        var lng = row.lng;
        var lat = row.lat;
        var id2 = row.id2;
        var name2 = row.name2;
        var lng2 = row.lng2;
        var lat2 = row.lat2;
        $('#kanan_table').append("<tr><td>"+name+"</td><td><a role='button' class='btn btn-success fa fa-info' onclick='data_hotel_1_info(\""+id+"\")'></a></td><td><a role='button' class='btn btn-danger fa fa-taxi' title='Angkot' onclick='angkot_sekitar(\""+id+"\")'></a></td></tr>");  
        console.log(name);
        //MARKER
        centerBaru = new google.maps.LatLng(lat, lng);
        map.setCenter(centerBaru);
        map.setZoom(16);  
        var marker = new google.maps.Marker({
          position: centerBaru,              
          icon:'icon/marker_hotel.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker);
        klikInfoWindow(id,marker);
        //MARKER souvenir
        centerSou = new google.maps.LatLng(lat2, lng2);
        map.setZoom(16);  
        var marker2 = new google.maps.Marker({
          position: centerSou,              
          icon:'icon/marker_kuliner.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker);
        klikInfoWindowKul(id2,marker2);
      }//end for               
  }});//end ajax 
}

function _fr5(){
  hapus_menu();
  hapus_Semua();

  var x = document.getElementById('fr5_ik').value;
  var y = [];
  for(i=0;i<$("input[name=fr5_fas]:checked").length;i++){
    y.push($("input[name=fr5_fas]:checked")[i].value);
  }
  var z = document.getElementById('fr5_destinasi').value;
  document.getElementById('judul_table').innerHTML="Fungsional Baru";

  if ((y =="")&&(z == "")&&(x == "")) {          
    document.getElementById('modal_title').innerHTML="Info";
    document.getElementById('modal_body').innerHTML="Silahkan isi form terlebih dahulu";
    $('#myModal').modal('show'); 
    return;
  } else {
    $("#view_kanan_table").show();
    $('#kanan_table').empty();            
  }

  $('#kanan_table').append("<tr><th class='centered'>Name</th><th class='centered' colspan='3'>Action</th></tr>");
  console.log(server+'_fr5.php?ik='+x+'&fas='+y+'&destinasi='+z);
  $.ajax({url: server+'_fr5.php?ik='+x+'&fas='+y+'&destinasi='+z, data: "", dataType: 'json', success: function(rows){ 
    if(rows == null)
    {
      alert('Data Did Not Exist !');
    }
      for (var i in rows){ 
        var row = rows[i];
        var id = row.id;
        var name = row.name;
        var lng = row.lng;
        var lat = row.lat;
        var id2 = row.id2;
        var name2 = row.name2;
        var lng2 = row.lng2;
        var lat2 = row.lat2;
        var color = row.color;
        $('#kanan_table').append("<tr><td>"+name+"</td><td><a role='button' class='btn btn-success fa fa-info' onclick='data_hotel_1_info(\""+id+"\")'></a></td><td><a role='button' class='btn btn-danger fa fa-taxi' title='Angkot' onclick='angkot_sekitar(\""+id+"\")'></a></td></tr>");  
        console.log(name);
        //MARKER
        centerBaru = new google.maps.LatLng(lat, lng);
        map.setCenter(centerBaru);
        map.setZoom(16);  
        var marker = new google.maps.Marker({
          position: centerBaru,              
          icon:'icon/marker_hotel.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker);
        klikInfoWindow(id,marker);
        //MARKER souvenir
        centerSou = new google.maps.LatLng(lat2, lng2);
        map.setZoom(16);  
        var marker2 = new google.maps.Marker({
          position: centerSou,              
          icon:'icon/ik.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker);
        klikInfoWindowSM(id2,marker2);
        route_angkot_1(z,color);
      }//end for               
  }});//end ajax 
}

function listGallery(){
  hapus_menu();
  $('#view_kanan_table').show();
  document.getElementById('judul_table').innerHTML="List Gallery";

  $('#kanan_table').empty();
  $('#kanan_table').append("<tr><th class='centered'>Name</th><th class='centered' colspan='3'>Action</th></tr>");
  // console.log(server+'_data_hotel.php');
  $.ajax({ 
  url: server+'_gallery.php', data: "", dataType: 'json', success: function(rows) 
  { 
    for (var i in rows){ 
      var row = rows[i];
      var id = row.id;
      var name = row.name;
      var latitude=row.lat;
      var longitude = row.lng;
      var img = row.img;
      console.log(id + latitude + longitude + img);
      $('#kanan_table').append("<tr><td><img style='max-height:100px;' src='../_foto/"+img+"'><br><center>"+name+"</center></td><td><a role='button' class='btn btn-success fa fa-info' title='info'  onclick='data_hotel_1_info(\""+id+"\")'></a></td><td><a role='button' class='btn btn-danger fa fa-taxi' title='Angkot' onclick='angkot_sekitar(\""+id+"\")'></a></td></tr>");  

      //MARKER
      centerBaru = new google.maps.LatLng(latitude, longitude);
      map.setCenter(centerBaru);
        
      map.setZoom(16); 
      var marker = new google.maps.Marker({
        position: centerBaru,              
        icon:'icon/marker_hotel.png',
        animation: google.maps.Animation.DROP,
        map: map
        });
      markersDua.push(marker);

      klikInfoWindow(id,marker);
      }    
    } 
  });  
}

function galleryType(){
  hapus_menu();

  var x = document.getElementById('gal_ht').value;
  $('#view_kanan_table').show();
  document.getElementById('judul_table').innerHTML="List Gallery";

  $('#kanan_table').empty();
  $('#kanan_table').append("<tr><th class='centered'>Name</th><th class='centered' colspan='3'>Action</th></tr>");
  console.log(server+'_gallery.php?tipe='+x);
  $.ajax({ 
  url: server+'_gallery.php?tipe='+x, data: "", dataType: 'json', success: function(rows) 
  { 
    for (var i in rows){ 
      var row = rows[i];
      var id = row.id;
      var name = row.name;
      var latitude=row.lat;
      var longitude = row.lng;
      var img = row.img;
      // console.log(id + latitude + longitude + img);
      $('#kanan_table').append("<tr><td><img style='max-height:100px;' src='../_foto/"+img+"'><br><center>"+name+"</center></td><td><a role='button' class='btn btn-success fa fa-info' title='info'  onclick='data_hotel_1_info(\""+id+"\")'></a></td><td><a role='button' class='btn btn-danger fa fa-taxi' title='Angkot' onclick='angkot_sekitar(\""+id+"\")'></a></td></tr>");  

      //MARKER
      centerBaru = new google.maps.LatLng(latitude, longitude);
      map.setCenter(centerBaru);
        
      map.setZoom(16); 
      var marker = new google.maps.Marker({
        position: centerBaru,              
        icon:'icon/marker_hotel.png',
        animation: google.maps.Animation.DROP,
        map: map
        });
      markersDua.push(marker);

      klikInfoWindow(id,marker);
      }    
    } 
  });  
}