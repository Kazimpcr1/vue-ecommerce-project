<template>
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block h-100 p-0 bg-dark text-white sidebar collapse">
        <div class="position-sticky pt-0 sidebar-sticky">
            <!-- <ul class="nav nav-pills flex-column mb-auto">
                <li>
                    <a href="#" class="nav-link link-dark">
                        <RouterLink to="/Admin-Home">
                            <svg class="bi pe-none me-2" width="16" height="16">
                                <use xlink:href="#table"></use>
                            </svg>
                            Dashboard
                        </RouterLink>
                    </a>
                </li>
            </ul> -->

        </div>
        <div class="slidebar">
            <div class="text-center text-dark py-3 d-none d-md-block">
                <h4>
                    Admin
                </h4>
            </div>
            <ul>
                <li>
                    <a href="#" class="nav-link link-dark">
                        <RouterLink to="/Admin-Home">
                          <svg class="bi pe-none me-2" width="16" height="16">
                                <use xlink:href="#table"></use>
                            </svg>
                            Dashboard
                        </RouterLink>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link link-dark">
                        <RouterLink to="/Customer-Orders">
                            <svg class="bi pe-none me-2" width="16" height="16">
                                <use xlink:href="#table"></use>
                            </svg>
                            Orders
                        </RouterLink>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link link-dark">
                        <RouterLink to="/Product-List">
                            <svg class="bi pe-none me-2" width="16" height="16">
                                <use xlink:href="#grid"></use>
                            </svg>
                            Products
                        </RouterLink>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link link-dark">
                        <RouterLink to="/Product-Category">
                            <svg class="bi pe-none me-2" width="16" height="16">
                                <use xlink:href="#grid"></use>
                            </svg>
                            Categories
                        </RouterLink>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link link-dark">
                        <RouterLink to="Register-User">
                            <svg class="bi pe-none me-2" width="16" height="16">
                                <use xlink:href="#grid"></use>
                            </svg>
                            Users
                        </RouterLink>
                    </a>
                </li>
                
            </ul>
            <h6
                class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                <span>Saved reports</span>
                <a class="link-secondary" href="#" aria-label="Add a new report">
                    <span data-feather="plus-circle" class="align-text-bottom"></span>
                </a>
            </h6>
            <ul>
                <li>
                    <a href="#" class="nav-link link-dark">
                        <RouterLink to="ABC">
                            <svg class="bi pe-none me-2" width="16" height="16">
                                <use xlink:href="#grid"></use>
                            </svg>
                            AAAA
                        </RouterLink>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link link-dark">
                        <RouterLink to="ABC">
                            <svg class="bi pe-none me-2" width="16" height="16">
                                <use xlink:href="#grid"></use>
                            </svg>
                            BBBB
                        </RouterLink>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link link-dark">
                        <RouterLink to="ABC">
                            <svg class="bi pe-none me-2" width="16" height="16">
                                <use xlink:href="#grid"></use>
                            </svg>
                            CCCC
                        </RouterLink>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'SideNavbar',
}

</script>

<style scoped>
nav a.router-link-exact-active {
    color: #fff;

}


nav a {
    color: rgb(255, 255, 255, 0.5);
}


.slidebar {
    width: 100%;
    min-height: auto;
    float: left;
    border-right: 1px solid rgb(235, 235, 235);
    background-color: rgb(247, 247, 247);
}

.slidebar .logo {
    height: 145px;
    border-bottom: 1px solid rgb(235, 235, 235);
}

.slidebar ul {
    padding: 0;
    margin: 0;
}

.slidebar li {
    list-style-type: none;
    margin: 0;
    position: relative;
}

.slidebar li:before {
    content: "";
    font-family: 'icomoon';
    speak: none;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    position: absolute;
    display: block;
    line-height: 40px;
    color: rgb(102, 102, 102);
    right: 20px;
    -webkit-font-smoothing: antialiased;
}

/*插入icon图标*/
.slidebar li:nth-child(1):before {
    content: "";
}

.slidebar li:nth-child(2):before {
    content: "";
}

.slidebar li:nth-child(3):before {
    content: "";
}

.slidebar li:nth-child(4):before {
    content: "";
}

.slidebar li:nth-child(5):before {
    content: "";
}

.slidebar li:nth-child(6):before {
    content: "";
}

.slidebar li:nth-child(7):before {
    content: "";
}

.slidebar li:nth-child(8):before {
    content: "";
}

.slidebar li:nth-child(9):before {
    content: "";
}

.slidebar li:nth-child(10):before {
    content: "";
}

.slidebar li:nth-child(11):before {
    content: "";
}

.slidebar ul a {
    color: rgb(140, 140, 140);
    text-decoration: none;
    font: 16px/40px helvetica, verdana, sans-serif;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(235, 235, 235);
    display: block;
    box-shadow: inset 0 1px 0 rgb(255, 255, 255);
    text-indent: 20px;
    text-transform: capitalize;
}

.slidebar li:hover a {
    background-color: rgb(255, 255, 255);
    box-shadow: 1px 0 0 rgb(255, 255, 255), inset 5px 0 0 -1px rgb(234, 83, 63);
}


nav a.router-link-exact-active {
    background-color: rgb(255, 255, 255);
    box-shadow: 1px 0 0 rgb(255, 255, 255), inset 5px 0 0 -1px rgb(234, 83, 63);

}
</style>