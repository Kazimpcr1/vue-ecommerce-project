<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 class="">Orders List</h4>
        <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group rounded me-2">
                <input type="text" class="" placeholder="Search..."/>
                <button type="button" class="btn btn-sm btn-outline-secondary"><i class="bi bi-search"></i></button>
            </div>
            <button type="button" class="btn btn-sm btn-outline-secondary"><i class="bi bi-plus"></i>Create Order</button>

            <!-- <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar" class="align-text-bottom"></span>
                This week
            </button> -->
        </div>
    </div>

    <div class="table-responsive">
        <table class="table table-striped table-sm">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Status</th>
                    <th class="text-center" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Ali</td>
                    <td>1</td>
                    <td>Pay</td>
                    <td>
                        <a href="" class="form-control btn btn-sm shadow-none rounded btn-dark" data-bs-toggle="modal"
                            data-bs-target="#update_status">New</a>
                        <!-- <span class="badge rounded-pill bg-warning text-dark">Pending</span> -->
                    </td>
                    <td class="text-center">
                        <a class="btn btn-sm btn-outline-dark" href=""><i class="bi bi-eye"></i></a>
                        <!-- <a class="btn btn-sm btn-danger text-white" href=""><i class="bi bi-trash3-fill"></i></a> -->
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Gul</td>
                    <td>3</td>
                    <td>Pay</td>
                    <td>
                        <a href="" class="form-control btn btn-sm shadow-none rounded btn-success" data-bs-toggle="modal"
                            data-bs-target="#update_status">Delivered</a>
                    </td>
                    <td class="text-center">
                        <a class="btn btn-sm btn-outline-dark" href=""><i class="bi bi-eye"></i></a>
                    </td>

                </tr>
                <tr>
                    <td>3</td>
                    <td>James</td>
                    <td>2</td>
                    <td>Not Pay</td>
                    <td>
                        <a href="" class="form-control btn btn-sm shadow-none rounded btn-primary" data-bs-toggle="modal"
                            data-bs-target="#update_status">Process</a>
                    </td>
                    <td class="text-center">
                        <a class="btn btn-sm btn-outline-dark" href=""><i class="bi bi-eye"></i></a>
                    </td>

                </tr>
                <tr>
                    <td>4</td>
                    <td>Hussain</td>
                    <td>1</td>
                    <td>Pay</td>
                    <td>
                        <a href="" class="form-control btn btn-sm shadow-none rounded btn-danger" data-bs-toggle="modal"
                            data-bs-target="#update_status">Cancel</a>
                    </td>
                    <td class="text-center">
                        <a class="btn btn-sm btn-outline-dark" href=""><i class="bi bi-eye"></i></a>
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Hassan</td>
                    <td>1</td>
                    <td>Not Pay</td>
                    <td>
                        <a href="" class="form-control btn btn-sm shadow-none rounded btn-warning " data-bs-toggle="modal"
                            data-bs-target="#update_status">Pending</a>
                    </td>
                    <td class="text-center">
                        <a class="btn btn-sm btn-outline-dark" href=""><i class="bi bi-eye"></i></a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>




    <!-- /////////////////Update Status/////////////////// -->
    <div class="modal fade" id="update_status" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <!-- <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div> -->
                <div class="modal-body py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 py-1">
                                <div class="">
                                    <label for="product_status" class="form-label">Order Status</label>
                                    <select class="form-select form-control-sm shadow-none border border-dark" id="product_status" required>
                                        <option selected disabled value="">Select Status</option>
                                        <option >New</option>
                                        <option >Pending</option>
                                        <option >Process</option>
                                        <option >delivered</option>
                                        <option >Cancel</option>
                                    </select>
                                    <small class="invalid-feedback">Invalid</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Update Status</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Orderlist',
}

</script>