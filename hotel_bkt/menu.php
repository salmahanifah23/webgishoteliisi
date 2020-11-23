<!--sidebar start-->
      <aside>
          <div id="sidebar"  class="nav-collapse ">
              <!-- sidebar menu start-->
              <ul class="sidebar-menu" id="nav-accordion">
              
              	  <p class="centered"><a href="index.php"><img src="icon/jamgadangbener.jpeg" class="img-circle" width="90" height="90" style="border-radius:50%"></a></p>
              	  <h5 class="centered" style="color:white; font-style:bold;">Bukittinggi</h5>

                  <!-- List Hotel -->
                  <li class="sub">
                      <a onclick="init();listHotel();" style="cursor:pointer;background:none"><i class="fa fa-list"></i>List Hotel</a>
                  </li>

                  <!-- Hotel Sekitar -->
                  <li class="sub">
                      <a onclick="" style="cursor:pointer;background:none"><i class="fa fa-thumb-tack"></i>Hotel Around You</a>
                      <ul class="treeview-menu">
                        <!-- <li style="margin-top:10px"><input id="inputradius" type="range" name="inputradius" data-highlight="true" min="1" max="10" value="1"></li>                             
                        <li><a onclick="init();hotel_sekitar_user();" style="cursor:pointer;background:none">Search</a></li> -->
                         <div class=" form-group" style="color: black;font-size:8pt;" > <!-- <br> -->
                          <!-- <label>Based On Radius</label><br> -->
                          <label for="inputradius" style="font-size: 10pt";>Radius : </label>
                          <label  id="nilai"  style="font-size: 10pt";>0</label> m
                          
                          <input  type="range" onchange="init();hotel_sekitar_user();cekkk();" id="inputradius" name="inputradius" data-highlight="true" min="0" max="20" value="0" >
                          <script>
                            function cekkk()
                            {
                              document.getElementById('nilai').innerHTML=document.getElementById('inputradius').value*100;
                              console.log(document.getElementById('inputradius').value*100);
                            }
                          </script>
                        </div>

                      </ul>                     
                  </li>

                  <!-- Fungsional Asli -->
                  <li class="sub-menu">
                    <a href="javascript:;" >
                        <i class="fa fa-search"></i>
                        <span>Search Hotel By</span>
                    </a>
                    <ul class="sub">
                      <li class="sub">
                      <a style="cursor:pointer;background:none"><i class="fa fa-search"></i> By Name</a>
                        <ul class="sub">
                          <li style="margin-top:10px"><input id="input_name" type="text" class="form-control"></li>                             
                          <li><a onclick="init();cari_hotel(1)" style="cursor:pointer;background:none">Search</a></li>
                        </ul>
                      </li>
                      <li class="sub">
                        <a style="cursor:pointer;background:none"><i class="fa fa-search"></i> By Address</a>
                        <ul class="sub">
                          <li style="margin-top:10px"><input id="input_address" type="text" class="form-control"></li>                             
                          <li><a onclick="init();cari_hotel(2)" style="cursor:pointer;background:none">Search</a></li>
                        </ul>
                      </li>
                      <li class="sub">
                        <a style="cursor:pointer;background:none"><i class="fa fa-search"></i> By Type</a>
                        <ul class="sub">
                          <li style="margin-top:10px">
                            <select class="form-control kota text-center" style="width:100%;margin-top:10px" id="select_jenis">
                              <?php                      
                              include('../connect.php');    
                              $querysearch="SELECT id, name FROM hotel_type"; 
                              $hasil=pg_query($querysearch);

                                while($baris = pg_fetch_array($hasil)){
                                    $id=$baris['id'];
                                    $name=$baris['name'];
                                    echo "<option value='$id'><span style='font-size:8pt'>$name</span></option>";
                                }
                              ?>
                            </select>
                          </li>                             
                          <li><a onclick="init();cari_hotel(3)" style="cursor:pointer;background:none">Search</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  
                  <!-- --------------------------------------------------------------------- -->

                  <!-- List Gallery -->
                  <!-- <li class="sub">
                      <a onclick="init();listGallery();" style="cursor:pointer;background:none"><i class="fa fa-image"></i>List Gallery</a>
                  </li> -->

                  <!-- Gellery by Hotel Type -->
                  <!-- <li class="sub">
                      <a onclick="" style="cursor:pointer;background:none"><i class="fa fa-image"></i>Gallery by Hotel Type</a>
                      <ul class="treeview-menu">
                        <li>  
                          <select class="form-control kota text-center" style="width:100%;margin-top:10px" id="gal_ht"> -->
                            <!-- <option value=""> - </option> -->
                            <!-- <?php                      
                            include('../connect.php');    
                            $querysearch="SELECT id, name FROM hotel_type"; 
                            $hasil=pg_query($querysearch);

                              // while($baris = pg_fetch_array($hasil)){
                              //     $id=$baris['id'];
                              //     $name=$baris['name'];
                              //     echo "<option value='$id'><span style='font-size:8pt'>$name</span></option>";
                                  // echo "<input type='checkbox' name='fas' id='fas' value='$id'><span style='font-size:8pt'>$name</span></input><br>";
                  //             }
                  //           ?> -->
                  <!-- //         </select>
                  //       </li>
                  //       <li><a onclick="init();galleryType()" style="cursor:pointer;background:none">Search</a></li>
                  //     </ul>                     
                  // </li> -->

                  <!-- Rekomendasi -->
                  <!-- <li class="sub">
                      <a onclick="init();menu_rekom();" style="cursor:pointer;background:none">Recomendation</a>
                  </li> -->

                  <!-- Dashboard -->
                  <li class="sub-menu">
                      <a class="active" href="../">
                          <i class="fa fa-hand-o-left"></i>
                          <span>Dashboard</span>
                      </a>
                  </li>

              </ul>
              <!-- sidebar menu end-->
          </div>
      </aside>
      <!--sidebar end