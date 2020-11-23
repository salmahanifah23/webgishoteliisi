
<ul class="sidebar-menu" id="nav-accordion">              
  <p class="centered"><a href="profile.html"><img src="../icon/jamgadangbener.jpeg" class="img-circle" width="90" height="90" style="border-radius:50%"></a></p>
  <h5 class="centered"><p><?php echo $_SESSION['username']; ?></p></h5>
                  
  <li class="mt">
      <a href="../">
        <i class="fa fa-book"></i>
          <span>User Access</span>
      </a>
  </li>
  <li class="sub-menu">
      <a href="?">
          <i class="fa fa-list"></i>
          <span>List Hotel</span>
      </a>
  </li>
  <li class="sub-menu">
      <a href="?page=pass_change">
          <i class="fa fa-cog"></i>
          <span>Change Password</span>
      </a>
  </li>
  <li class="sub-menu">
                      <a class="active" href="../../">
                          <i class="fa fa-hand-o-left"></i>
                          <span>Dashboard</span>
                      </a>
                  </li>

</ul> 
