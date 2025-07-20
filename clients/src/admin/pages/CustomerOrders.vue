<template>
    <TopHeader></TopHeader>
    <NavbarHeader></NavbarHeader>

    <div class="container-fluid">
        <div class="row">
            <SideNavbar></SideNavbar>

            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <OrderList></OrderList>
            </main>
        </div>
    </div>
</template>
<script>
import TopHeader from '../layout/TopHeader.vue';
import NavbarHeader from '../layout/NavbarHeader.vue';
import OrderList from '../components/OrderList.vue';
import SideNavbar from '../layout/SideNavbar.vue';

export default{
    name: 'CustomerOrders',

    components:{
        OrderList,
        SideNavbar,
        TopHeader,
        NavbarHeader,
    }
}

</script>

<style scoped>


</style>