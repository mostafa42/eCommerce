<template>
    
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <div class="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <router-link to="/" class="sidebar-brand brand-logo">
              <h1> <span>eCom</span>merce</h1>
          </router-link>
        </div>
        <ul class="nav">
          <li class="nav-item nav-category">
            <span class="nav-link">Navigation</span>
          </li>
          <li class="nav-item menu-items">
            <router-link to="/" class="nav-link">
              <span class="menu-icon">
                <i class="mdi mdi-home"></i>
              </span>
              <span class="menu-title">Home</span>
            </router-link>
          </li>
          <li class="nav-item menu-items">
            <a class="nav-link" href="index.html">
              <span class="menu-icon">
                <i class="mdi mdi-login"></i>
              </span>
              <span class="menu-title">Login</span>
            </a>
          </li>
          <li class="nav-item menu-items">
            <a class="nav-link" href="index.html">
              <span class="menu-icon">
                <i class="mdi mdi-account-multiple-plus"></i>
              </span>
              <span class="menu-title">register</span>
            </a>
          </li>
          <li class="nav-item menu-items" @click.prevent="myFunction()" style="cursor:pointer">
            <a class="nav-link">
              <span class="menu-icon">
                <i class="mdi mdi-newspaper"></i>
              </span>
              <span class="menu-title">Products</span>
            </a>
          </li>
          <div id="our-prods">
              <li class="nav-item menu-prods-items">
                <a class="nav-link" href="index.html">
                    <span class="menu-icon">
                        <i class="mdi mdi-account-multiple-plus"></i>
                    </span>
                    <span class="menu-title">Products</span>
                </a>
              </li>
              <li class="nav-item menu-prods-items">
                <a class="nav-link" href="index.html">
                    <span class="menu-icon">
                        <i class="mdi mdi-laptop"></i>
                    </span>
                    <span class="menu-title">Products</span>
                </a>
              </li>
              <li class="nav-item menu-prods-items">
                <a class="nav-link" href="index.html">
                    <span class="menu-icon">
                        <i class="mdi mdi-account-multiple-plus"></i>
                    </span>
                    <span class="menu-title">Products</span>
                </a>
              </li>
          </div>
          <li class="nav-item menu-items">
            <a class="nav-link">
              <span class="menu-icon">
                <i class="mdi mdi-newspaper"></i>
              </span>
              <span class="menu-title">Products</span>
            </a>
          </li>
        </ul>
      </nav>
      
</template>
<script>
export default {
    mounted(){
        window.onload = function() {
            var x = document.getElementById("our-prods");
            x.style.display = "none";
        };
    },
    methods:{
        myFunction(){
            var x = document.getElementById("our-prods");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }
    }
}
</script>