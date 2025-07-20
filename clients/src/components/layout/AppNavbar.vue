<template>
  <!-- <div class="overlay"></div> -->

  <!-- <div class="utility-nav d-none d-md-block">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <p class="small"><i class="bx bx-envelope"></i> logo@example.com | <i class="bx bx-phone"></i> +92-0022114563
          </p>
        </div>

        <div class="col-12 col-md-6 text-right">
          <p class="small">Free shipping on total of $99 of all products</p>
        </div>
      </div>
    </div>
  </div> -->

  <div class="top-fix" :class="{ 'scrolled-nav': scrolledNav }">
    <nav class="navbar navbar-expand-md main-menu" style="box-shadow:none">
      <div class="container-fluid">
        <button type="button" id="sidebarCollapse" @click="togglebtn" class="btn btn-link d-block d-md-none">
          <i class="bi bi-list icon-single text-dark"></i>
        </button>

        <a class="navbar-brand" href="#">
          <!-- <img src="../../assets/logo2.png" width="100px" alt="img-fluid"> -->
          <h4 class="font-weight-bold">Logo1</h4>
        </a>

        <ul class="navbar-nav ml-auto d-block d-md-none">
          <li class="nav-item">
            <a class="btn btn-link position-relative" @click="openModal">
              <!-- <RouterLink to="/CheckOut">  -->
              <i class="bi bi-cart-check-fill icon-single text-decoration-none text-dark"></i>
              <!-- <span class="badge badge-danger">5</span> -->
              <span v-show="cartItemCount" class="position-absolute top-0 start-50 badge rounded-pill bg-danger">
                {{ cartItemCount }}
                <span class="visually-hidden">unread messages</span>
              </span>
              <!-- </RouterLink> -->
            </a>
          </li>
        </ul>

        <div class="collapse navbar-collapse">
          <!-- <form class="input-group form-inline my-2 my-lg-0 mx-auto">
            <input class="form-control" type="search" placeholder="Search for products..." aria-label="Search">
            <button class="btn btn-success my-2 my-sm-0" type="submit"><i class="bi bi-search"></i></button>
          </form> -->

          <nav class="navbar navbar-expand-md navbar-light bg-light sub-menu mx-auto">
            <div class="container">
              <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav mx-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <!-- <RouterLink to="/"> Home</RouterLink> <span class="sr-only">(current)</span> -->
                      <RouterLink to="/"> Home</RouterLink>

                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link">
                      <RouterLink to="/about"> About</RouterLink>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link">
                      <RouterLink to="/categories-details"> Products</RouterLink>
                    </a>
                  </li>
                  <!-- <li class="dropdown">
                    <a class="nav-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      categories

                    </a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="#">
                          <RouterLink to="/categories-details">Sandals</RouterLink>
                        </a></li>
                      <li v-for="Category in categories" :key="Category"><a class="dropdown-item" href="#">
                          <RouterLink :to="{ name: 'category', params: { category: category } }">{{ Category }}</RouterLink>
                          <RouterLink to="/categories-details">{{ Category }}</RouterLink>
                        </a>
                      </li>
                    </ul>
                  </li> -->

<!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

                  <!-- <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">
                      Support
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">Delivery Information</a>
                      <a class="dropdown-item" href="#">Privacy Policy</a>
                      <a class="dropdown-item" href="#">Terms & Conditions</a>
                    </div>
                  </li> -->

                  <!-- <li class="nav-item">
                    <a class="nav-link">
                      <RouterLink to="/CheckOut"> CheckOut</RouterLink>
                    </a>
                  </li> -->
                  <li class="nav-item">
                    <a class="nav-link">
                      <RouterLink to="/Contact"> Contact</RouterLink>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <ul class="navbar-nav">
            <li>
              <form class="input-group desk-nav-search mb-2 p-0">
                <input class="form-control p-0" type="search" placeholder="Search for products..." aria-label="Search">
                <button class="btn btn-success btn-sm pr-8" type="submit"><i class="bi bi-search"></i></button>
              </form>
            </li>
            <li class="nav-item">
              <a class="btn btn-link position-relative" @click="openModal">
                <!-- <RouterLink to="CheckOut">  -->
                  <i class="bi bi-cart-check-fill icon-single text-decoration-none text-dark"></i>
                  <span v-show="cartItemCount" class="position-absolute top-0 start-50 badge rounded-pill bg-danger">
                    {{ cartItemCount }}
                    <span class="visually-hidden">unread messages</span>
                  </span>
                <!-- </RouterLink> -->
              </a>
            </li>
            <li class="nav-item ml-md-3">
              <RouterLink to="/LogIn">
                <a class="btn h2" href="#"><i class="bi bi-person-circle icon-single mr-1"></i></a>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </div>

  <!-- //////////////////SideBar//////////////// -->

  <!-- Sidebar -->
  <nav v-show="sliderActive" :class="{ 'active': sliderActive }" id="sidebar">
    <div class="sidebar-header">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-3 pl-0">
            <a class="" href="#">LOGo</a>
          </div>
          <div class="col-7 pl-0">
            <a class="btn btn-primary" href="#"><i class="bx bxs-user-circle mr-1"></i> Log In</a>
          </div>

          <div class="col-2 text-left">
            <button type="button" id="sidebarCollapseX" @click="togglebtn" class="btn btn-link text-dark">
              <i class="bi bi-x-lg icon-single"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <ul class="list-unstyled components links">
      <li class="active py-0">
        <a href="#">
          <RouterLink to="/"><i class="bi bi-house-door-fill mr-3"></i> Home</RouterLink>
        </a>
      </li>
      <li>
        <a href="#">
          <RouterLink to="/about"><i class="bi bi-file-earmark-person mr-3"></i> About</RouterLink>
        </a>
      </li>
      <!-- <li>
        <a href="#">
          <RouterLink to="/"><i class="bi bi-cast mr-3"></i> Product</RouterLink>
        </a>
      </li> -->
      <!-- <li class="dropdown">
        <a href="#" class="nav-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
          aria-expanded="false"> <i class="bi bi-list-columns-reverse"></i>
          categories
        </a>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">Clothes</a></li>
          <li><a class="dropdown-item" href="#">Jewelry</a></li>
          <li><a class="dropdown-item" href="#">Decoration</a></li>
        </ul>
      </li> -->
      <!-- <li class="dropdown">
        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i
            class="bx bx-help-circle mr-3"></i>
          Support</a>
        <ul class="collapse list-unstyled" id="pageSubmenu">
          <li>
            <a href="#">Delivery Information</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
        </ul>
      </li> -->
      <li>
        <a href="#">
          <RouterLink to="/categories-details"><i class="bi bi-boxes mr-3"></i> Products</RouterLink>
        </a>
      </li>
      <li>
        <a href="#">
          <RouterLink to="/Contact"><i class="bi bi-telephone-inbound-fill mr-3"></i> Contact</RouterLink>
        </a>
      </li>
    </ul>

    <h6 class="text-uppercase mb-1">Categories</h6>
    <ul class="list-unstyled components mb-3">
      <li v-for="Category in categories" :key="Category">
        <a href="#">
          <RouterLink to="/categories-details">{{ Category.name }}</RouterLink>
        </a>
      </li>
    </ul>

    <ul class="social-icons">
      <li><a href="#" target="_blank" title=""><i class="bi bi-facebook"></i></a></li>
      <li><a href="#" target="_blank" title=""><i class="bi bi-twitter"></i></a></li>
      <li><a href="#" target="_blank" title=""><i class="bi bi-linkedin"></i></a></li>
      <li><a href="#" target="_blank" title=""><i class="bi bi-instagram"></i></a></li>
    </ul>
  </nav>

  <!-- <MiniCart v-if="showModal"></MiniCart> -->


  <child-modal v-if="showModal" @close="showModal = false"></child-modal>


</template>


<script>
import { thisTypeAnnotation } from '@babel/types';

import MiniCart from '@/components/MiniCart.vue'
import ChildModal from '@/components/ChildModal.vue'


export default {
  name: 'AppNavbar',


  data() {
    return {
      sliderActive: null,
      scrolledNav: null,

      // showModal: false,
      showModal: true

    };

  },

  components: {
    MiniCart,
    ChildModal,

  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },

  created() {
    this.$store.dispatch('fetchProducts');
  },

  computed: {
    products() {
      return this.$store.getters.products;
    },

    // To Display Only Categories ------------------------
    categories() {
      return this.$store.getters.uniqueCategories;
    },

    cartItemCount() {
      return this.$store.getters.productCount;
    }
  },

  methods: {
    togglebtn() {
      this.sliderActive = !this.sliderActive;
    },

    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 20) {
        this.scrolledNav = true;
        return
      }
      this.scrolledNav = false;
    },

    // showModal() {
    //   let element = this.$refs.modal.$el
    //   $(element).modal('show')
    // },

    showModaltoggle() {
      // this.showModal = !this.showModal;
    },

    openModal() {
      $('#childModal').modal('show')
    },

    closeModal() {
      // this.showModal = false;
      $('#childModal').modal('close')
    },

    


    
    // showModal() {
    //   $('.modal').modal('show');
    // }
  



    // checkScreen(){
    //   this.windowWidth = Window.innerWidth;
    //   if(this.windo <= 750) {
    //     this.mobile = true;
    //     return
    //   }
    //   this.mobile = false;
    //   thisTypeAnnotation.mobileNav = false;
    //   return
    // }
  }
}


</script>

<style scoped>
.btn .bx {
  vertical-align: inherit;
  margin-top: -3px;
  font-size: 1.15rem;
}

.form-control {
  height: calc(2.5rem + 2px);
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

.btn {
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
}

.bi.icon-single {
  font-size: 1.5rem;
}

.desk-nav-search {
  max-width: 200px !important;
  background-color: transparent;
  border-bottom: 2px solid #000;
  padding: auto 0;
}

.desk-nav-search input,
.desk-nav-search button {
  background-color: transparent;
  box-shadow: none;
  border: transparent;
  padding: auto 0;
  color: #000;
}

/* .input-group {
  background-color: rgb(0, 0, 0, 0.1);
  border-radius: 20px;
  border: 1px solid #000;
  height: 35px;
}

.input-group input,
.input-group button {
  background-color: transparent;
  border: none;
  box-shadow: none;
  color: #000;
  height: 35px;
}

.input-group button:focus {
  box-shadow: none;
  background-color: transparent;
} */

.form-inline .form-control {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.form-inline .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

  /* .form-inline .form-control {
    width: 210px;
  } */
  .input-group {
    width: 300px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

  /* .form-inline .form-control {
    width: 440px;
  } */
  .input-group {
    width: 440px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  /* .form-inline .form-control{
    width: 600px;
  } */

  .input-group {
    width: 600px;
  }
}

.sub-menu.navbar-light .navbar-nav .nav-link {
  font-weight: bold;
  color: rgb(60, 59, 59);
}

.sub-menu.navbar-light .navbar-nav .active>.nav-link,
.sub-menu.navbar-light .navbar-nav .nav-link.active,
.sub-menu.navbar-light .navbar-nav .nav-link.show,
.sub-menu.navbar-light .navbar-nav .show>.nav-link {
  /* border-bottom: 3px solid #007bff; */
  color: #2d71a1;
}

.navbar .navbar-toggler {
  border: none;
}

.navbar-light .navbar-toggler:focus {
  outline: none;
}

.navbar {
  padding: 1rem;
}

.top-fix {
  position: fixed;
  z-index: 9;
  width: 100%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 3px 4px -1px rgba(0, 0, 0, 0.06);

}

.main-menu {
  position: relative;
  z-index: 3;
  padding: 5px 0 0 0;
}

.sub-menu {
  position: relative;
  z-index: 2;
  padding: 0 1rem;
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .sub-menu {
    padding: 0 1rem;
  }

  .sub-menu.navbar-expand-md .navbar-nav .nav-link {
    padding: .8rem .8rem;
  }
}

.navbar.bg-light {
  background: rgb(255, 255, 255, 0) !important;
  /* box-shadow: 0px 2px 15px 0px rgba(255, 255, 255, 0.1); */
}

.user-dropdown .nav-link {
  padding: 0.15rem 0;
}

#sidebar {
  background: #fff;
  height: 100%;
  left: -100%;
  top: 0;
  bottom: 0;
  overflow: auto;
  position: fixed;
  transition: 1s ease all;
  width: 84%;
  z-index: 5001;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  padding: 1.25rem 1rem 1rem;
}

#sidebar.active {
  left: 0;
}

#sidebar .sidebar-header {
  background: #fff;
  border-bottom: 1px solid #e4e4e4;
  padding-bottom: 1.5rem;
}

#sidebar ul.components {
  text-align: start;
  padding: 20px 0;
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 40px;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  padding: 5px 10px;
  font-size: 1em;
  display: block;
  color: #000;
  text-decoration: none;
}

#sidebar ul li a:hover {
  color: #7386d5;
  background: #fff;
}

#sidebar ul li.active>a,
#sidebar a[aria-expanded="true"] {
  color: #007bff;
  /* background: #e6f2ff; */
  border-radius: 6px;
}

a[data-toggle="collapse"] {
  position: relative;
}

#sidebar .links .dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

section {
  padding: 6rem;
  background: #e4e4e4;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
}

.overlay {
  background: rgba(0, 0, 0, 0.7);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  z-index: -1;
  width: 100%;
  opacity: 0;
}

.overlay.visible {
  opacity: 1;
  z-index: 5000;
}

/* .mobiHeader .menuActive~.overlay {
    opacity: 1;
    width: 100%;
} */

ul.social-icons {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 0;
}

ul.social-icons li {
  display: inline-block;
  margin-right: 0px;
  margin-bottom: 0;
}

#sidebar ul.social-icons li a {
  font-size: 24px;
}

.utility-nav {
  background: #e4e4e4;
  padding: 0.5rem 1rem;
}

.utility-nav p {
  margin-bottom: 0;
}

.search-bar {
  position: relative;
  z-index: 2;
  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
}

.search-bar .form-control {
  width: calc(100% - 45px);
}

.avatar {
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  margin-right: 8px;
}

.avatar.avatar-xs {
  width: 2.25rem;
  height: 2.25rem;
}

.user-dropdown .dropdown-menu {
  left: auto;
  right: 0;
}


.scrolled-nav {
  background-color: rgb(255, 255, 255);
  transition: .3s ease-in-out all;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 3px 4px -1px rgba(0, 0, 0, 0.06);
}

.scrolled-nav nav {
  padding: 5px 0;
  transition: .2s ease all;

}

.scrolled-nav nav .branding img {
  width: 40px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}



/* .scrolled-nav {
    background-color: rgb(0, 0, 0);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    nav {
        padding: 8px 0;

        .branding {

            img {
                width: 40px;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }
        }
    }
} */




/* .container {
  padding: 2rem 0rem;
} */

.table-image thead td,
.table-image thead th {
  border: 0;
  color: #666;
  font-size: 0.8rem;
}

.table-image td,
.table-image th {
  vertical-align: middle;
  text-align: center;
}

.table-image td.qty,
.table-image th.qty {
  max-width: 2rem;
}

.price {
  margin-left: 1rem;
}

.modal-footer {
  padding-top: 0rem;
}
</style>