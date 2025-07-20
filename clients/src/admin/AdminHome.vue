<template>
    <TopHeader></TopHeader>
    <NavbarHeader></NavbarHeader>

    <div class="container-fluid">
        <div class="row">
            <SideNavbar></SideNavbar>

            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div
                    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h4 class="">Dashboard</h4>
                    <div class="btn-toolbar mb-2 mb-md-0">
                        <div class="btn-group me-2">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                        </div>
                        <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <span data-feather="calendar" class="align-text-bottom"></span>
                            This week
                        </button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-xl-3 py-1">
                        <div class="card h-100 p-2 mb-3 widget-content shadow">
                            <div class="widget-content-outer">
                                <div class="widget-content-wrapper">
                                    <div class="widget-content-left">
                                        <div class="widget-heading">Total Orders</div>
                                        <div class="widget-subheading">Orders From Customers</div>
                                    </div>
                                    <div class="widget-content-right">
                                        <div class="widget-numbers text-success">1896</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-3 py-1">
                        <div class="card h-100 p-2 mb-3 widget-content shadow">
                            <div class="widget-content-outer">
                                <div class="widget-content-wrapper">
                                    <div class="widget-content-left">
                                        <div class="widget-heading">In Process</div>
                                        <div class="widget-subheading">Orders Panding</div>
                                    </div>
                                    <div class="widget-content-right">
                                        <div class="widget-numbers text-warning">50</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-3 py-1">
                        <div class="card h-100 p-2 mb-3 widget-content shadow">
                            <div class="widget-content-outer">
                                <div class="widget-content-wrapper">
                                    <div class="widget-content-left">
                                        <div class="widget-heading">Complete</div>
                                        <div class="widget-subheading">Deliverd to Customres</div>
                                    </div>
                                    <div class="widget-content-right">
                                        <div class="widget-numbers text-danger">1024</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-3 py-1">
                        <div class="card h-100 p-2 mb-3 widget-content shadow">
                            <div class="widget-content-outer">
                                <div class="widget-content-wrapper">
                                    <div class="widget-content-left">
                                        <div class="widget-heading">Users</div>
                                        <div class="widget-subheading">All Registered Users</div>
                                    </div>
                                    <div class="widget-content-right">
                                        <div class="widget-numbers text-danger">2000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row py-3">
                    <div class=" col-lg-7 py-2">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">New Order</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item d-flex justify-content-between">
                                    <span>Order 1</span>
                                    <div>
                                        <a href="#" class="btn btn-sm btn-secondary card-link">Dispatch</a>
                                        <a href="#" class="btn btn-sm btn-info card-link">View</a>
                                        <a href="#" class="btn btn-sm btn-danger card-link"><i class="bi bi-trash"></i></a>
                                    </div>
                                </li>
                                <li class="list-group-item d-flex justify-content-between">
                                    <span>Order 2</span>
                                    <div>
                                        <a href="#" class="btn btn-sm btn-secondary card-link">Dispatch</a>
                                        <a href="#" class="btn btn-sm btn-info card-link">View</a>
                                        <a href="#" class="btn btn-sm btn-danger card-link"><i class="bi bi-trash"></i></a>

                                    </div>
                                </li>
                                <li class="list-group-item d-flex justify-content-between">
                                    <span>Order 3</span>
                                    <div>
                                        <a href="#" class="btn btn-sm btn-secondary card-link">Dispatch</a>
                                        <a href="#" class="btn btn-sm btn-info card-link">View</a>
                                        <a href="#" class="btn btn-sm btn-danger card-link"><i class="bi bi-trash"></i></a>
                                    </div>
                                </li>
                            </ul>
                            <div class="card-body">
                                <small>Click to Dispatch the order</small>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-5 py-2">
                        <div class="list-group">
                            <label
                                class="list-group-item Active bg-primary d-flex justify-content-between text-white"><span>Categories
                                    List</span><span class="badge">Products</span></label>
                            <a v-for="category in categories" href="#"
                                class="list-group-item  d-flex justify-content-between"><span>{{ category.name }}</span>
                                <span class="badge rounded bg-secondary text-white h6">{{ category.count }}</span></a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>

import TopHeader from './layout/TopHeader.vue';
import NavbarHeader from './layout/NavbarHeader.vue';
import SideNavbar from './layout/SideNavbar.vue';
import CustomerOrders from './pages/CustomerOrders.vue';

export default {
    components: {
        TopHeader,
        SideNavbar,
        CustomerOrders,
        NavbarHeader
    },


    created() {
        this.$store.dispatch('fetchProducts');
    },

    computed: {

        // To Display Only Categories ------------------------
        categories() {
            return this.$store.getters.uniqueCategories;
        },

    }
}


</script>

<style scoped>
.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}

.b-example-divider {
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;
}

.bi {
    vertical-align: -.125em;
    fill: currentColor;
}

.nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
}

.nav-scroller .nav {
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}

nav a.router-link-exact-active {
    color: #2d71a1;
}




/* ///////////////////////////////////////////////// */
.widget-content .widget-content-wrapper {
    display: flex;
    flex: 1;
    position: relative;
    align-items: center
}

.widget-content .widget-content-left .widget-heading {
    opacity: .8;
    font-weight: 700
}

.widget-content .widget-content-left .widget-subheading {
    opacity: .5
}

.widget-content .widget-content-right {
    margin-left: auto
}

.widget-content .widget-numbers {
    font-weight: 700;
    font-size: 1.8rem;
    display: block
}

.widget-content .widget-content-outer {
    display: flex;
    flex: 1;
    flex-direction: column
}

.widget-content .widget-progress-wrapper {
    margin-top: 1rem
}

.widget-content .widget-progress-wrapper .progress-sub-label {
    margin-top: .33333rem;
    opacity: .5;
    display: flex;
    align-content: center;
    align-items: center
}

.widget-content .widget-progress-wrapper .progress-sub-label .sub-label-right {
    margin-left: auto
}

.widget-content .widget-content-right.widget-content-actions {
    visibility: hidden;
    opacity: 0;
    transition: opacity .2s
}

.widget-content:hover .widget-content-right.widget-content-actions {
    visibility: visible;
    opacity: 1
}</style>