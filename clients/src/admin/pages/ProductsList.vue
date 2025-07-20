<template>
    <TopHeader></TopHeader>
    <NavbarHeader></NavbarHeader>

    <div class="container-fluid">
        <div class="row">
            <SideNavbar></SideNavbar>

            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div
                    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-1 border-bottom">
                    <h4 class="">Products</h4>
                    <div class="btn-toolbar mb-2 mb-md-0">
                        <div class="btn-group rounded me-2">
                            <input type="text" class="" placeholder="Search..." />
                            <button type="button" class="btn btn-sm btn-outline-secondary"><i
                                    class="bi bi-search"></i></button>
                        </div>
                        <div class="btn-group me-2">
                            <!-- <button type="button" class="btn btn-sm btn-outline-secondary">Share</button> -->
                            <button type="button" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"><i class="bi bi-plus"></i> Add Product</button>
                        </div>
                        <!-- <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                                        <span data-feather="calendar" class="align-text-bottom"></span>
                                        This week
                                    </button> -->
                        <form class="d-flex">
                            <!-- <label for="filter-by-name">Filter : </label> -->
                            <select id="filter-by-name" v-model="selectedName" style="background:transparent;">
                                <option value="" selected>Filter by Catogory</option>
                                <option v-for="category in categories" :value="category.name">{{ category.name }}
                                </option>
                            </select>
                        </form>
                    </div>
                </div>
                <!-- <div>
                                <div class="col-12 py-2 d-sm-flex justify-content-between text-end">
                                    <form class="d-flex">
                                        <label for="filter-by-name">Filter : </label>
                                        <select id="filter-by-name" v-model="selectedName" style="background:transparent;">
                                            <option value="" selected>All</option>
                                            <option v-for="category in categories" :value="category.name">{{ category.name }}
                                            </option>
                                        </select>
                                    </form>
                                </div>
                            </div> -->
                <div class="row">
                    <div class="col-12">
                        <!-- cart items details -->

                        <div class="small-container cart-page table-responsive">
                            <table>
                                <tr>
                                    <th>Product</th>
                                    <th>Category</th>
                                    <th>Brand</th>
                                    <th>Discount</th>
                                    <th>Subtotal</th>
                                    <th>Action</th>
                                </tr>

                                <!-- <tr>
                                                                                <td>
                                                                                    <div class="cart-info">
                                                                                        <img src="https://i.ibb.co/B3vYjvw/buy-1.jpg" alt="" />
                                                                                        <div>
                                                                                            <p>Red Printed T-Shirt</p>
                                                                                            <small>Price ₹500.00</small>
                                                                                            <br />
                                                                                            <a href="#">View Detail</a>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>Shirts</td>
                                                                                <td><input type="number" value="1" /></td>
                                                                                <td>10%</td>
                                                                                <td>₹500.00</td>
                                                                                <td>
                                                                                    <a class="btn btn-sm btn-success text-white" href=""><i
                                                                                            class="bi bi-pencil-square"></i></a>
                                                                                    <a class="btn btn-sm btn-danger text-white" href=""><i
                                                                                            class="bi bi-trash3-fill"></i></a>

                                                                                </td>

                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <div class="cart-info">
                                                                                        <img src="https://i.ibb.co/qmSHWx7/buy-2.jpg" alt="" />
                                                                                        <div>
                                                                                            <p>HRX Shoes</p>
                                                                                            <small>Price ₹1500.00</small>
                                                                                            <br />
                                                                                            <a href="#">View Detail</a>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td>Shoes</td>
                                                                                <td><input type="number" value="1" /></td>
                                                                                <td>1%</td>
                                                                                <td>₹1500.00</td>
                                                                                <td>
                                                                                    <a class="btn btn-sm btn-success text-white" href=""><i
                                                                                            class="bi bi-pencil-square"></i></a>
                                                                                    <a class="btn btn-sm btn-danger text-white" href=""><i
                                                                                            class="bi bi-trash3-fill"></i></a>
                                                                                </td>

                                                                            </tr> -->
                                <tr v-if="loading" class="row justify-content-center text-center pt-5 all-products">
                                    <h2>Loading.....</h2>
                                </tr>
                                <tr v-else-if="error" class="row all-products">
                                    <div class="empty-state">
                                        <div class="empty-state__content">
                                            <div class="empty-state__icon">
                                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAACuCAMAAACFrPhHAAAC9FBMVEUAAADn6do3tE7l5ufo6ejl7vLs8fPd6e3woX/o2WoutEz/0Ug1Lj7e3t3s7e0e1VAX1lL/41Hl5eUQykrj5eWm8l+o5Vzs7Ow6NUcM0FAM21dG41Q6OT2O7lz135YEtz8B2Vgm31EJ21jh5OTnw3A4MUTE92IBuEM44lMojErg4OACuUKI7VsBsTM/41Sm81/i4+PF+GLg4+PU82OG7VvW9mFs6Vjq7Oz411rNmoCin6bj4dbz3pP643zR0tHk/KG5uLvn6e7////8/fzp+v/u/P/4/v/z/f/k+f/k5OT/Yhu79mHZ2dmR8Fzc3d3G+GKi8l7r6+yp9F/f39+a8V1/7VpM5VV261n/301Z51b/2ktk6VjA+GHQ+mOw9V+19mCI71v/4lDm5ubi4uFVT2Xw8PDK+WL09PL/wkH/1Un/uz474lP/yUX/WQ3/cltu61n/0EbW1tYA21rU+2QByVJOR1/S09PFxcZfVmkA1FcA4lz/bWD/dlfZ/GX/kSsBrTD9yldEPVX/Z2X/tTv+qzn/9eQ2L0UBwk8Aszr/448Bz1T/4oMAt0L/Ymr/z14r4FH/mTL/iSpJQlr/ojY+OFD/sjL/gSn/rCfqrDba4+b/76v/7KP/6JkEvE3Kysr/oiC4t7f/1Gr/230OnD3BwsL/mSb8w07/2HP942H/yj04MzL5+fm8vLxLw1uJiYn/oiz/uzL7/PHegVYNqEjPz82rqKeRkZH/eCQRn0fuvEN/f3+nsbbf1M3/wTn/bh4uKCn/3kToUj35VmFbylwLskz9hF+R515JPzTttDsVj0J2dHFqaWmf6V+xsK+U0lGgoKDvYEml11KCzE5gwk3/7t5IuUr+5eTo3trYnjfumzTyfi3f32FpVjbyaSP/cnKwur/kh1xl2Fs6u1orsUbb+pLt7Vnu47Qjl0nDlTlfXFvwWFCrhDnv9/Tz78xyx06YdznW+mq53lSCZzfktUOwlEnR5pfgs1hRUFBDmUTTwq79m57P8XpxWfaWAAAAQnRSTlMABAR+/vlX/vMRGeo/imoyY1GkSS1OLYq0hquPb6L5qurl1Ej93IbwwvfhyG7r4ta72pn12q/QxKz72smTYeGxsKmDcPDbAAAXwklEQVR42tyXv4vTUADHk1iVVrT1RwtaWjgPpIhUxZ8gCl6nYI3Wtja29yNNUZAbDjno1tGpw811dLFLBneHwIGTe+cUzOb/4DeNyUvbF70+n5D4uR4luRLeh8/70ROOhOSwcC38H/gmUiqVSuM3+es6/oauQSqdyZdK5VcOnU7n7t3CtWxOirmgNBNI50vllw6uHNjb22u1WrcL2VR8BWfDTufLu7u7y3KgCQrXkvH0w5BTmdLBrisHKHKapt0u5OLn57jl1+BGylHlnoJCVhDipIcW0sW1AyIXUs61azQKuRj5YaAZuB2tXMPheSEZFz1JSF2CW3g5Igdmcs+fX4/H9PTC0cvR5cCLF3HI56y4g1XLQQ5czwmiEGkwK0sHLOXA9nY22vUkIb12lHJgQQ5u2zs716Jcj8itUo7I7Ty5El09WrmjygHIPYmu3t+XA5sR1cOGwliOyMFuM5JrT5Kky+zliNzms2wE9SThEo9ysNuM3rknCRk+5cBNMWJ22FF4yLl2byK2s2DRrfGTe/PmD0tPDEUg8Ex3kbLmmOW2biYZx8lVj8xLnuW2trZ+PzfXz9A5keSqR/ZLDuWeeXLgVui+KYrJe7XXISTWuetB7jzXcmD/TqidcKyWqFHB/asifzupxLUc5Pb3ES/E7oYs3zhHpSfLF/5JOno5drmFeGKAG/X6ukDlal25IAbgY1fitVsSuQHihXCu3w+xe9TvJ7mnS3MvNxjsD+a2zfUThAfV6ukTVK5W350hVzx2UNjlqeVaTeZyA4dbSdHnTI2FezwOe6lMK2cZh3BjK+cKZgWfxwk9gZf7E4Luvfs/Mo905ynlWofTQ2O6xyQHte8Od876PEjoOhn18eM6Hfwl8Dm99/DsAiLDxKSU60xbTc0yNE+usUq5790FVPuk7KP/KNoyFd0u2nrgcjLuLnAqxzAxl+RaltHEvJzCcGrQ+PpkJ1xOpdj1ZJeePOma5hDvC+COrZpmMfBJ2C1yXxBX3DFpu2Vn2nTMUG42N7+6NBrfHJBwO7Qczc60Rz2PUdHEnUlvmdHQ7KrjHmEyVpfiJVf9r5V2zjWNqWVNLU2jrjh0C5OD3nd1RhdDc19oN6p7jGxTNcd1Co63+XFEbrh23nNmrGyXp59zlmG0ghvKvF+4HOzaqoNJQDul7qIo9WJ3bNdxPQ/uKB+7n74oin89CT6DxQ6U6N9QNI3lKBj4du3xkGArQapKGNX5q2EANrtUmf4NBWawY5Bz7NqqOaxsEBLvqgwowUd8MNV2u72qXZpWDnKtQ2tZDvxRDnZt2H3Y8MZWqWzojHYV/xkbn9U2g915upzlnOZaY3nNgVA5zw64dp6h3H/HQLUyE3Of8r7NYpehTkscdY2GZUBtTsz/VjkvBzfg273FMN5+qDggnDO2Wp+Fn7Tby2sTURQGcC3ZmE0KohDFB0F0oSDi4w+YAUG0mmhEkBofRdOKiI6zmaggPggMuhTczFaEkEUZFyO4sR2DQheuVBCEFkEQBDe60I3fnTszJ9Ocm6Tt7XfNTCJd+OPce+50Jp4yKCvQZXHIGGCYl+2x8ny7O7Nx2nNXxmGjypGNZmYa8OqXlxEzq5tS65RPtTezv/KcWaiOlU+3y9VOmrnOHOXoiRj3pTf3niOTWz/GmTY0ROqmpqBTfimK1fG/z7VxKbZwplzNrDf6ZUfi9v95e+fO9TS3k9xP8gT5+vejYWrRIawOrpE8z9useLIqdvMyu4kjMe7t9TsIAYmY4pCZJzp4j6YUOqjyxdL20ijH26z6HgpkA/Y54GS6ZInutuTdJ55uHc3K9aWGSJHhbeZwyGDcjgRHuutShhcVT/D+6tDdwOjRAVRsxFlPPNKxuPLY/OkBVyhvGR2GBGZ1X1uGBh1COvrmUCPJpl7dHh53Brt5uwpaqqNFh4itAB1FpQNO78ozeR1m5fZGXx07LccWOrXa/GztJFyxCSIkvi7BaYCObMBp1tGSG41hts3rNrBrbn72ZLVcbZdrp9uzXGq31Lr7XcWTupkZDbob17I6UEaSWWkFFt9WNjK4KjbyWrnWaddqcx3KHGUcJeR1zMTUp7sGHbfkQk8cmT0hf6YHh5xsz1Y7C6fPnzxPGxxCtxdwUuuQ1dAh0KW4QinBOQHfM5FD/E1ZNBXgehsKLb6+6261dcBRP/Ht6FRYrMPnLQwOQUMBrt8dZ+W6Wx0dbKRDs7QaYjTwsv3ozfY8o9ujvJ3eH3dXWbvV16FZRjD8wStwImiJbKTbuKzb6VztJI10iH5dgrMs20KgC0MYEdoQun0HlveUh6kd21P06ySuEbhChZYiaHhbZHRYeEvHQfflzwdFfsiRZEaXbvLa5CR0MQ418yKdj1OUUVa3YRmVg+7zm+Hy48nMDz06BLoYJ5sJjgGOUahldmddZ+kPQu4ib/l87Qlqp08nuqWMEzg4Bnasky2TmZoXloH79VLmNZtPrz9lUmkZmnTAJfHRVzwUUKYkMFzXXE7lfuOmVXJnDjmORDfJJ05NTMgHVEgOqYjk6ivWwQbd2sJ2y5FDNEsncC3HcVBI2TK5HFg6DrosD4l9ECIRkYC6dPkSKJb02D6AVvS56bJNRfaVIXGwCRrpJC+lEQ6yRFfRpbs6OXn1VckRseTBtwPI7NAPfFc2Fda3l8f9y14/Q5etHZIpXYZHtdMwMw2hQ15FrNC25Pm914QsbDpoKtLGFo/Djf/+PX4lqdsviqzdv5exjWpHOiSy0cxs6ahdqgulznvv+5iTlviEZafijeztwY3/nM5NTPeL2TctEdPQFDOpnStYtg8PEjSFTKYInbJ4i3HnvxnG5UuGOvUj/TJRMVsY9fQh+OUV666SDp0yKiGQaWjZcXtepKPKHf1mmpUj+AcqYtRzl+JQB6Ecga4FXfI5V9eocy3fc1zHhVFiEVp2XNbtXbTmXh4/fvOm6hFpxTBa6YOPegvBx2wqUehnjJUFugdS57qu4/mCGFqRVRhp2SnmJuG6aqeMcflYnJu5usiAB5A5fToMO3DEy40SnWi343k7s/sc1l3lCHd1SE+t4iTl6RfD0KBD3sWgwHYCDyxROxt/QReZyr4JXYI7kehUMczpF0vII8PUqvM9L3AQ2xM7uesqJyZdbu5LcaQzlJl+ga+kDBX82KOV1w426Gyp83zfdr0wEFs5MzG5r/RuJNxQuovDR6sOsd+/9yOZIxdfnnTqzpLgButMqt0wJdShewjdM8+1EdcOQs92IcMHHJiJyVRvw7jEDVG7wbqzmnVPhS6MdI4fShkiTszEZHlHkzt7w9ROyDAASYO3XLTUDuPZ96haXoATJdMxR5KwvBNZHT8Oi9pR1c4mA1k9HfLue1PoAi+jK8a4rInhoXMKHOlUgQ4aFjXVPeRBm87H1HTDqHSUAiQpLF9YP1rctntbgeWtOwjcuVR3mB2mKXRcppho0cEGXehDEzQzuN0JLb8erF2PZXYV+P9FtZN0hwWv92XiAB1HWl3ds2bQdH0/LZ3nh+gpI1IGWBwPuMfb1vDZsO/cuW8mdGCIgWotOuOg0t1I0/VWm84OvGYgZc3Qx27u2SXQRrclMgqvQ/n+t3d/MW1VcRzAGeKmhqmJRjFZ9MHNRI2J2Yt/otH0TqCkISF9MXsEmzKCyUi0+AQYmIxgCDj5M/50DGoNBdkUKKPaockSoATI2IzFYDRZ4iCARCD+efP7O+f0nt7elvZein8Wv/cP0GQdn33PObe0MA48FenOYsEhdlab+EA7MgklcdrUpKZTUtSNXMPUE7Jr9WxNeYho+jyYkTCPvMa7E9OMRPSGznzqobtTKg49fa11naQPyynsDJ1ZntSdqzvX8U7PzJUeJuth/SER2siVyDszIzg/i7kYNw8//8zhg4oS0SnCJ0oTc5F0oi8AJ3YmOA8mbBM72xiY5d5ykeSPoh1Wq3NXHXDQ1dfPzGA41gMm0nP2LEf1j3Bbfz9bVHANTPAzZCUldruiXTO1SybNuyZOw0OSiZ2tqcmtk9xGObU2ObW8to1XulVdMlwhnmxSdtchHfXXrjCZzFnkQzr1s3f6+4HF24eAi59n6JuurehOLpTa1ZPOQneSaD7flG+q/PQAtvIBbKeXfbiNgCnqgMO/6GASHbrrwaqiyYcg9RNrpJ+EGJRnKbjAJ/zpxhLiZfE1M7qx6AKhI9wOGAgk5QOIKGtlGTdTNstLKWdSaM5enEJ3t0dYcTKR1lAabHiP5Qkt7oAmx4lnt2WhMfg4TY5O1iB0p7FCvrk5SbTNcOlp2HBwzUBpeI0Bl5PoFOyEQ6y4ju6iO0dZul0fU111NVrjOvhEsKJkavrS5rCdD06FPgFYVJc8uO7kNqPBJQIZ93HgSvLuOI43l1R3jS0k1yLjs6caOq6amamO4J6LXVEejsnznGcZdGVZ0J8QSSfv7jSy7T11Ciqpi8pEB55ApiTS0d07bKQrcQ5qosTTYd710JUOX92x1J+tBqkfBwYlpZrhHsjQNvekFU+Iq89NltgLK2zAFRZaXe7RImB0m0LdsZx8EysJEkR/TBdEe8FgsBQuOhLrCOd2lxQi9BfGvDTmjKNrXrrNLnUojYJxCV21OuGquU8sl1L3aJGqAw7Ll81VYS+029x4tcARGZtK7LyjnNrenDgdJNz05jYhy4LTm+EBjtpcEbqb8aYU5pnNNepmf5ELBWp1RbG6ZjYyYepR0w+dMLEW6SxxsrssVVeCiJ/YsY2Outw0MnXzDjvXlZ/amlzm3S1Pbg0EoRvAxa5jgNrbmpyKdMdwep8y6hodBQ807QtHRcUO4mt0yFLPZ/PzN4St/ko/4VAcziJ6HPGOqzqE+TjONewfJB5sdOTioB1ep5frVrAwrkxPryz7fCswlZUFw7j4rXVMh7dwQSirpdR9p+uOl+cJeCo4j809JAIsUnTdIeEbvyKC9yFYzNaPJMZRHj6ozXFnFuH8ocCC4KkbJh14w9viceQaXe5o9V+jwsrAW5kSt2xBxnShElD0OPdwgHhuuzM2/MKu7+46ixiXM8yGAMnfe07gdO3F5KDF5naNDoeG/cOCJy97VJ3/9wn2iBK8lWXSLK8EKVRWMLzFH6oQjO2zoSLi6XB+P3gYnMAkyZlmqZvvuTG/eAvXAIg0UVdLHS8mB3MdWFDmAn4/4+VqMmgZ+30VOgp4peGVlfBl0C4HL7OuLtfSLdP0ZAEO7KHVYSc4Ohzu3F9sd1uVVHXzyPXFXzA8r/fPPB2DezbJ05qyyoO5SpbVYhka5rwYXO/qKulEBoIkYwniiblWpBbvE04kNDvrH4yLW3BaBrGAGNHBh/z6B6rrj/Y9QbiUdUVWDEcPhqbgSVzlKunKIym9LAIi2YQQKqkLhRYgisJVRnBKCjYloltkAW/++h9/LC5+C19E+FgGcEZ0llzBC4Anca7ZWei2Y3WsvlYZqM5hF7pAaI4gRnFSV9XcXLX0Cwsr8MZ1jM9bYMHH1xPgjOnAGwJvGDwVVziL/B7yxuo6prmuLowDG2Bsx7YwGwKvlyiGcVJXVbV0g0UUiPxibFRKXW6RFRjJc7KP8izFIeBWZ0uaSsv5JnRh3zLOUG351nBuhU7NGfACgVAlYQzipK6KdN9SWIGLrMBbi4u3qp97kEalKR14gWHBA64oMEu8QsVbChpLsBUq6HxrQbxdmeK6umid4p8NIKPEAS4gccZ0394inWzwxvz1X+epOOBM6fJU3jpG6vrwbAg6l8VZA5fQoSiwtnxTm+Hw5pRvua69rr29/ZzMTcugP0Q8mwWpxN0JnFHdLQqEGuIjhDOjy2M+wfM7Bh1+hnNb8j73qroy6ODrWPaxTIXbL126VAddM9uw38Qjt2HGsyuKR+IM666MUKSRhZ51NqUDjzbwSOcZrVwIQTdkycvV6cDbXJ6amtoiHPnONVPYmb5GKBoGzj/kdo9JnGHd0zOU22qephzJzs42qMsjXR5CRGov4K+s9HjcY6HZOQtudnqDqq69lW+tHeHw0iUR6ESgo0/Qirtw013MDXOccd337yFvUd6lfER5n/LxkYxMEzoOBK830OsZ8niGKgMLwOXqddjhg0pNtE7BZovchd8gDjlT1SJ04Gl9TJdjqjtEnD29QzzsBujK4OJbOwIcJZ6uCjpWQIW4izmHQZxCOgQ6LW7POm7DNtRLmcOtQidSWtsuE42rUgMdRRF3UWwMh2h07xGO8Rhuj92J4ekeo8+sd13qeHNlGt0nl7CzTeiahY4i7mLQIE12l3hkGpx3eXczncz60NjY2Nx53Ji4O+jUxHaHOOkuUJ15nZTJ3o7l5ORkm9XJFI66HLhNq9N2B5UacrVgI52IYh+tcFrM6Fq4DrKPAKJ8EIm8HJjWqRcHVVer6i60t18QWzSuhcLO0JmM1LWRjsalBKq6TGxmdTJv4NDrWi9cAIwfOh2L1CmKYlrXxnUIxiUHqrq9d4fodbWka1d9n1SRC5vUpas7ROokz6xOLCBv0IFdtid1OEinBjoEOJzoX5vv6dYBRzrGM69L0p2IVsdpdLS0qUl3d2nRUVfxNjqtQycSrWPLJJ32qlNoFxs+/C69ujeggyNh1r2tBNPpWsRSmdbuBou+iq9D9qLLS7BBhye+aNK1Ml2d11t2iXSA4cmU5hYox8fH8RnhZEKnOBHx7eNZxXb7Vy3j6Zx3sru8RN15G7q6uvrg++TCxe7u7oZGL+nqmi42NdV4wRxvW+ro6FiqGh83rnNyGGT0iht0beP7MDKxJ+iurKmTpcvbfqGvq7uhoaGxoeaTlrpPCVfT5K1qa5uegA4+wzpF6IArxos2eBUFOuRvm3eOGsA66ehub+rsZrq+xtrmTy+SDryy8bqJ6Q6WFlPdieYIZ2O6tjTq3ji0u66BVwdeX3cX1zU2XmziOvLVTUR0S/jq1Wh3RVG4QptNdke4NOiSrJldEV1XJ3Bc19fXx3UUr9AhBnWIQ4MTuvR2B0TibHQJHSJ1nzJdk1a3/blBG3QaXMU+6NDdicQ6Z6eIVidHptcb0f1suDrFocG5CvepuxNxNzqhvATdwRatOwqc0WhxFVrdu2nSnYAiEXBdVJe0uw0zuuJiiXPZoLsK3Q9/17wD/GbX7vMOOpPVQSebQ3W76+4z/rX5CdKdIES8nR+dXSmMzOkzZnRZGhzXXb0aV3cs04TuBOl2j6Mrhe4eB854ijU46GCDTjfvUB2eDtsXHRaWpPNuQgHOhM4u5hxwMTpEozuyX7r15CPzZxPVKZbBqOaS6bL3S4fyknR31GIqWRyHJNXRtNsXHZLsscqG0xGJM+U4rLw3V5QONv28EwPTnC45Lv8MlafvLqI7WumJn8qYuDUZxXdxIQl0sjtxPTCryxdbzEnenL9bd9PbUOiSFEZxsSQdmWaqI10+6QRHD5S3OxLPO1ad3BLhaI8DlDyuK9DraNahOtO6fL5rTvJG9tGGTqdOu9+kKJFMr5IyAaOc//NqgX7e8QXTlC6fdLtFcNc743cH3Z8eliHPkEwvbalG/rGxgoKCqwWa7j76WF7J062T2ejW6fjAPAqZIPHMxWZsbizVFFC0IxO4TOD2U4d0dscdmd5KxMPzoy5fGstLWh3hzE060h0wosvS6ZoIt/STLl+Yzg+x3VFz9M1hprp7UqyZSZKPDeXF626i4O04KcCu2VJMgaqTuEzgTOmePH7oUKHtUEo5f8gRb1VpKUh7ZHcff3DsSIbZZD55/Px5W8X51HIof6NB111dmmFS995bWC2NjcoDmohVJT/l6EfmeME+5BvSvYvvcMhGA3v4xZUP351vICgvRtf89j7kh9V3Pzp2LCfb8MPmR2Pzwt2G0hWju2cf8tKC/+WXXz98112HE+X++EvkvUW6ZMWkWN2jY7UWW+m0odF5H8+/22gOJU8WYrXLX6qjyzMp6fTUpPk5SldzEb8jzBo/JanErkkhh3AN0Yzp4LtrrzkcrXvlrn8mGJn7lFek7sWMf1kO7Dn3Pt7Yh9e4SPfIgX8qGfsTzN1XGxuP7uz89unFF/9dv0U6PbzMx3cmkc2j92bcecH/2eWb9PkmJ+mZjjsvmRk51N2xO9FGuuzJyTu1uv91/+H8r/sv5z7SZd+husyMIz5fzp1p4+3dl/HvyV/H06x7VvcVEwAAAABJRU5ErkJggg=="
                                                    alt="">
                                            </div>
                                            <div class="empty-state__message">No product has been found.</div>
                                            <div class="empty-state__help">
                                                Check daily we will update any time
                                            </div>
                                        </div>
                                    </div>
                                </tr>
                                <tr v-else v-for="product in products2" key="product.id">
                                    <td>
                                        <div class="cart-info">
                                            <img :src="product.image" alt="" />
                                            <div>
                                                <strong>{{ product.name }}</strong><br>
                                                <small>Price : {{ product.price }}</small>
                                                <br />
                                                <a class="btn text-primary" @click="showProductDetail(product)">View
                                                    Detail</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{{ product.category }}</td>
                                    <td>{{ product.brand }}</td>
                                    <!-- <td><input type="number" value="1" readonly /></td> -->
                                    <td>{{ product.discount }}%</td>
                                    <td>Rs {{ calculateDiscountedPrice(product.price, product.discount) }}</td>
                                    <td>
                                        <a class="btn btn-sm btn-success text-white" @click="editProduct(product)"><i
                                                class="bi bi-pencil-square"></i></a>
                                        <a class="btn btn-sm btn-danger text-white" @click="deleteProduct(product._id)"><i
                                                class="bi bi-trash3-fill"></i></a>
                                        <!-- <a class="btn btn-sm btn-danger text-white" @click="deleteProduct(product.id)"><i
                                                class="bi bi-trash3-fill"></i></a> -->
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div v-show="filteredItems.length > 0" class="col-12 mb-3">
                        <div class=" pt-3" v-if="showPagination">
                            <div class="pagination justify-content-center">
                                <button class="btn btn-sm text-white" @click="previousPage"
                                    style="width:90px; background: linear-gradient(-45deg, #1391a5, #274685);"><i
                                        class="bi bi-chevron-double-left"></i> Previous</button>
                                <span class="mx-2"
                                    style="width:fit-content; background-color: transparent; font-size: 18px; font-weight: 600; border: 0; color: #000;">{{
                                        currentPage
                                    }} of {{ totalPages }}</span>
                                <button class="btn btn-sm text-white" @click="nextPage"
                                    style="width:90px; background: linear-gradient(-45deg,#274685, #1391a5 );">Next <i
                                        class="bi bi-chevron-double-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>




    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <form @submit.prevent="addProduct">
                    <div class="modal-header border-0">
                        <h5 class="modal-title" id="staticBackdropLabel">Add Product</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body pt-0">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-12 py-1">
                                    <div class="">
                                        <label for="product_title" class="form-label">Product Title</label>
                                        <input class="form-control form-control-sm mt-0 shadow-none border border-dark"
                                            v-model="productTitle" type="text" id="product_title">
                                        <span v-if="errors.productTitle" class="error text-danger">{{ errors.productTitle
                                        }}</span>
                                    </div>
                                </div>
                                <div class="col-sm-6 py-1">
                                    <div class="">
                                        <label for="product_status" class="form-label">Status</label>
                                        <select class="form-select form-control-sm shadow-none border border-dark"
                                            v-model="productStatus" id="product_status" required>
                                            <option disabled value="">----Select---</option>
                                            <option v-for="status in status" :value="status">{{ status }}</option>
                                        </select>
                                        <span v-if="errors.productStatus" class="error text-danger">{{ errors.productStatus
                                        }}</span>
                                    </div>
                                </div>
                                <div class="col-sm-6 py-1">
                                    <div class="">
                                        <label for="product_category" class="form-label">Categories</label>
                                        <select class="form-select form-control-sm shadow-none border border-dark"
                                            v-model="productCategory" id="product_category" required>
                                            <option selected disabled value="">--Select--</option>
                                            <option v-for="category in categories2" :value="category.name">{{ category.name
                                            }}</option>
                                        </select>
                                        <span v-if="errors.productCategory" class="error text-danger">{{
                                            errors.productCategory }}</span>
                                    </div>
                                </div>
                                <div class="col-6 py-1">
                                    <div class="">
                                        <label for="product_price" class="form-label">Price</label>
                                        <input class="form-control form-control-sm mt-0 shadow-none border border-dark"
                                            v-model="productPrice" type="number" id="product_price" min="0" placeholder="">
                                        <span v-if="errors.productPrice" class="error text-danger">{{ errors.productPrice
                                        }}</span>
                                    </div>
                                </div>

                                <div class="col-6 py-1">
                                    <div class="">
                                        <label for="product_discount" class="form-label">Discount (%)</label>
                                        <input class="form-control form-control-sm mt-0 shadow-none border border-dark"
                                            v-model="productDiscount" type="number" id="product_discount" min="0"
                                            placeholder="">
                                        <span v-if="errors.productDiscount" class="error text-danger">{{
                                            errors.productDiscount }}</span>
                                    </div>
                                </div>

                                <div class="col-md-12 py-1">
                                    <div class="">
                                        <label for="product_brand" class="form-label">Brand Name</label>
                                        <input class="form-control form-control-sm mt-0 shadow-none border border-dark"
                                            v-model="productBrand" type="text" id="product_brand" placeholder="">
                                        <span v-if="errors.productBrand" class="error text-danger">{{ errors.productBrand
                                        }}</span>
                                    </div>
                                </div>
                                <div class="col-sm-12 py-1">
                                    <div class="">
                                        <label for="product_image" class="form-label">Product Image</label>
                                        <input class="form-control border border-dark mt-0 shadow-none"
                                            v-model="productImage" type="link" id="product_image" placeholder="">
                                        <span v-if="errors.productImage" class="error text-danger">{{ errors.productImage
                                        }}</span>
                                    </div>
                                </div>
                                <div class="col-12 py-1">
                                    <div class="">
                                        <label for="product_desc" class="form-label">Product Description</label>
                                        <textarea class="form-control shadow-none border border-dark" id="product_desc"
                                            v-model="productDescription" cols="" rows="5"></textarea>
                                        <span v-if="errors.productDescription" class="error text-danger">{{
                                            errors.productDescription }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">

                                    <!-- Bootstrap toast -->
                                    <div aria-live="polite" aria-atomic="true" class="position-fixed top-0 end-0 p-3">
                                        <div class="toast align-items-center text-white bg-success border-0" role="alert"
                                            aria-live="assertive" aria-atomic="true" data-bs-delay="5000"
                                            ref="successToast">
                                            <div class="d-flex">
                                                <div class="toast-body">
                                                    Data saved successfully!
                                                </div>
                                                <button type="button" class="btn-close ms-auto me-2" data-bs-dismiss="toast"
                                                    aria-label="Close"></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer py-0">
                        <button type="button" class="btn btn-secondary w-auto mx-3" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary w-auto">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    </div>


    <!-- ////////////////////////////Edit Modal////////////////////////// -->
    <div class="modal" :class="{ 'is-active': showModal }">
        <div class="modal-background" @click="showModal = false"></div>
        <div class="modal-content">
            <div class="box">
                <h2 class="title">Edit Product</h2>
                <form>
                    <div class="field">
                        <label class="label">Title</label>
                        <div class="control">
                            <input class="input" type="text">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Price</label>
                        <div class="control">
                            <input class="input" type="number">
                        </div>
                    </div>
                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-link" @click.prevent="updateProduct()">Update</button>
                        </div>
                        <div class="control">
                            <button class="button is-link is-light" @click="showModal = false">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="modal" tabindex="-1" role="dialog" v-if="showModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ modalProduct.title }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="showModal = false">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <img :src="modalProduct.image" alt="" />
                    <p>Price: ${{ modalProduct.price }}</p>
                    <p>Category: {{ modalProduct.category }}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal"
                        @click="showModal = false">Close</button>
                </div>
            </div>
        </div>
    </div>

    <!-- ///////////////////////////////////////////// -->

    <div class="">
        <div class="show-details-modal bg-light shadow-lg border border-dark" v-if="showModal">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Product Details</h3>
                        <h4>{{ modalProduct.title }}</h4>
                    </div>
                    <div class="col-md-4">
                        <img :src="modalProduct.image" alt="" style=" width: 100%; height: 250px;" />
                    </div>
                    <div class="col-md-8">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <th scope="row">Price</th>
                                    <td>${{ modalProduct.price }}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Category</th>
                                    <td>${{ modalProduct.category }}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Rating</th>
                                    <td>${{ modalProduct.rating.rate }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-12 py-2">
                        <p class="pb-0 mb-0 text-primary">Description</p>
                        <p>{{ modalProduct.description }}</p>
                    </div>
                    <div class="col-12 text-end">
                        <button class="btn btn-primary float-right" @click="showModal = false">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

import { mapActions } from 'vuex';
import TopHeader from '../layout/TopHeader.vue';
import NavbarHeader from '../layout/NavbarHeader.vue';
import OrderList from '../components/OrderList.vue';
import SideNavbar from '../layout/SideNavbar.vue';


export default {
    name: 'ProductList',

    components: {
        OrderList,
        SideNavbar,
        TopHeader,
        NavbarHeader,
    },
    data() {
        return {
            minInputPrice: 1,
            maxInputPrice: 10000,

            selectedName: '',
            selectedCategory: '',
            allOptionSelected: true,
            selectedCategories: [],

            page: 1,
            limit: 6,

            minAngle: 10,
            maxAngle: 30,

            newProduct: {
                title: '',
                price: '',
                description: '',
                image: '',
                category: '',
            },

            ////////////////
            editingProduct: null,
            showModal: false,

            showModal: false,
            modalProduct: {},

            ///////////Add Product//////////////
            status: ["In Stock", "Out of Stock"],
            productTitle: '',
            productStatus: '',
            productCategory: '',
            productPrice: '',
            productDiscount: '',
            productBrand: '',
            productImage: '',
            productDescription: '',
            errors: {},

            ///////////Get Product//////////////
            products2: [],

            ///////////Get categories//////////////
            categories2: []
        }
    },

    created() {
        this.$store.dispatch('fetchProducts');
    },

    computed: {

        //////////////////1st Methods////////////////

        // Function for Filteration By Price and Brand name 
        filteredItems() {
            let filtered = this.products;
            if (this.selectedName !== '') {
                filtered = filtered.filter(item => item.category === this.selectedName)
            }
            if (this.minInputPrice !== null && this.maxInputPrice !== null) {
                filtered = filtered.filter(item => {
                    return item.price >= this.minInputPrice && item.price <= this.maxInputPrice
                })
            }
            // return filtered;
            return filtered.sort((a, b) => b.price - a.price);
        },




        // filteredItems() {
        //     let filtered = this.products;
        //     if (!this.allOptionSelected) {
        //         if (this.allOptionSelected) {
        //             return filtered;
        //         }
        //         if (this.selectedCategories.length === 0) {
        //             return [];
        //         }
        //         if (this.selectedCategories.length > 0) {
        //             filtered = filtered.filter(item => this.selectedCategories.includes(item.category))
        //         }
        //     }
        //     if (this.minInputPrice !== null && this.maxInputPrice !== null) {
        //         filtered = filtered.filter(item => {
        //             return item.price >= this.minInputPrice && item.price <= this.maxInputPrice
        //         })
        //     }
        //     return filtered;
        // },

        //////////////////////////////////////////////////////////////

        paginatedItems() {
            return this.filteredItems.slice((this.page - 1) * this.limit, this.page * this.limit);
        },
        totalPages() {
            return Math.ceil(this.filteredItems.length / this.limit);
        },
        currentPage() {
            return this.page;
        },

        showPagination() {
            return this.filteredItems.length > this.limit;
        },

        //////////////////////////////////////////////////////////////

        products() {
            return this.$store.getters.products;
        },

        loading() {
            return this.$store.state.loading;
        },

        error() {
            return this.$store.state.error;
        },


        categories() {
            return this.$store.getters.uniqueCategories;
        },


        ////////////////////////////
        isFormInvalid() {
            return Object.keys(this.errors).length > 0;
        }
    },

    methods: {
        applyPriceRangeFilter() {
            this.products = this.filteredItems
        },

        previousPage() {
            if (this.page > 1) {
                this.page--;
            }
        },
        nextPage() {
            if (this.page < this.totalPages) {
                this.page++;
            }
        },

        addNewProduct() {
            this.$store.dispatch('addProduct', this.newProduct)
                .then(product => {
                    console.log('Product added successfully:', product);
                    this.newProduct = { title: '', price: '', description: '', image: '', category: '', };
                })
                .catch(error => {
                    console.error('Failed to add product:', error);
                });
        },

        ...mapActions(['deleteProduct']),

        editProduct(product) {
            this.editingProduct = product;
            this.showModal = true;
        },

        updateProduct() {
            this.editingProduct = null;
            this.showModal = false;
        },

        showProductDetail(product) {
            this.modalProduct = product;
            this.showModal = true;
        },


        ////////////////////////////////////////////////
        addProduct() {
            // validate form input
            this.validateForm();

            // check if form input is valid
            if (this.isFormInvalid) {
                return;
            }

            // create a user object with the form input values
            const product = {
                name: this.productTitle,
                status: this.productStatus,
                category: this.productCategory,
                price: this.productPrice,
                discount: this.productDiscount,
                brand: this.productBrand,
                image: this.productImage,
                description: this.productDescription,
            };

            // make API call to add product
            axios.post('http://localhost:5000/api/products', product)
                .then(response => {
                    // handle successful response
                    console.log(response.data, "data store");
                    this.$refs.successToast.classList.add("show");
                    // clear form input values
                    this.productTitle = '';
                    this.productStatus = '';
                    this.productCategory = '';
                    this.productPrice = '';
                    this.productDiscount = '';
                    this.productBrand = '';
                    this.productImage = '';
                    this.productDescription = '';

                    this.getProduct();
                })
                .catch(error => {
                    // handle error
                    console.log(error.response.data, "data are not store");
                });
        },


        validateForm() {
            this.errors = {};
            if (!this.productTitle) {
                this.errors.productTitle = 'product Title is required.';
            }
            if (!this.productStatus) {
                this.errors.productStatus = 'product Status is required.';
            }
            if (!this.productCategory) {
                this.errors.productCategory = 'product Category is required.';
            }
            if (!this.productPrice) {
                this.errors.productPrice = 'product Price is required.';
            }
            if (!this.productDiscount) {
                this.errors.productDiscount = 'product Discount is required.';
            }
            if (!this.productBrand) {
                this.errors.productBrand = 'product Brand is required.';
            }
            if (!this.productImage) {
                this.errors.productImage = 'product Image is required.';
            }
            if (!this.productDescription) {
                this.errors.productDescription = 'product Description is required.';
            }
        },


        ////////////////////Show Categories/////////////////////
        async getCategories() {
            try {
                const response = await axios.get('http://localhost:5000/api/categories');
                this.categories2 = response.data;

            } catch (error) {
                console.error(error);
            }
        },


        // async getCategoryNames() {
        //     if (!this.categoryNames) {
        //         try {
        //             const response = await axios.get('http://localhost:5000/api/categories');
        //             const categories = response.data;
        //             this.categoryNames = categories.map(category => category.name);
        //         } catch (error) {
        //             console.error(error);
        //         }
        //     }
        //     return this.categoryNames;
        // },

        ////////////////////Show Categories/////////////////////
        async getProduct() {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                this.products2 = response.data;
            } catch (error) {
                console.error(error);
            }
        },


        ////////////////////Delete Categories/////////////////////////
        async deleteProduct(productId) {
            try {
                const response = await fetch(`http://localhost:5000/api/products/${productId}`, {
                    method: 'DELETE'
                });
                const data = await response.json();
                console.log(data.message);
                this.products = this.products.filter(product => product._id !== productId);
                this.getProduct();

            } catch (error) {
                console.error(error);
            }
        },


        /////////////////////////////////////////
        calculateDiscountedPrice(price, discount) {
            return price * (1 - discount / 100)
        }

    },

    mounted() {

        this.getCategories();
        this.getProduct();

    }

}

</script>

<style scoped>
/* all products page */

.row-2 {
    justify-content: space-between;
    margin: 100px auto 50px;
}

select {
    border: px solid #000;
    padding: 0 5px;
}

select:focus {
    outline: none;
}

.page-btn {
    margin: 0 auto 80px;
}

.page-btn span {
    display: inline-block;
    border: 1px solid #ff523b;
    margin-left: 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
}

.page-btn span:hover {
    background: #ff523b;
    color: #ffffff;
}

/* single product details */

.single-product {
    margin-top: 80px;
}

.single-product .col-2 img {
    padding: 0;
}

.single-product .col-2 {
    padding: 20px;
}

.single-product h4 {
    margin: 20px 0;
    font-size: 22px;
    font-weight: bold;
}

.single-product select {
    display: block;
    padding: 10px;
    margin-top: 20px;
}

.single-product input {
    width: 50px;
    height: 40px;
    padding-left: 10px;
    font-size: 20px;
    margin-right: 10px;
    border: 1px solid #ff523b;
}

input:focus {
    outline: none;
}

.single-product .fas {
    color: #ff523b;
    margin-left: 10px;
}

.small-img-row {
    display: flex;
    justify-content: space-between;
}

.small-img-col {
    flex-basis: 24%;
    cursor: pointer;
}

/* cart items */

.cart-page {
    /* margin: 90px auto; */
}

table {
    width: 100%;
    border-collapse: collapse;
}

.cart-info {
    display: flex;
    flex-wrap: wrap;
}

th {
    text-align: left;
    padding: 5px;
    color: #ffffff;
    background: #ff523b;
    font-weight: normal;
}

td {
    padding: 10px 5px;
}

td input {
    width: 40px;
    height: 30px;
    padding: 5px;
}

td a {
    color: blue;
    font-size: 12px;
    text-decoration: none;
}

td img {
    width: 80px;
    height: 80px;
    margin-right: 10px;
}

.total-price {
    display: flex;
    justify-content: flex-end;
}

.total-price table {
    border-top: 3px solid #ff523b;
    width: 100%;
    max-width: 400px;
}

td:last-child {
    text-align: right;
}

th:last-child {
    text-align: right;
}

/* account page */
.account-page {
    padding: 50px 0;
    background: radial-gradient(#fff, #ffd6d6);
}

.form-container {
    background: #ffffff;
    width: 300px;
    height: 400px;
    position: relative;
    text-align: center;
    padding: 20px 0;
    margin: auto;
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.form-container span {
    font-weight: bold;
    padding: 0 10px;
    color: #555555;
    cursor: pointer;
    width: 100px;
    display: inline-block;
}

.form-btn {
    display: inline-block;
}

.form-container form {
    max-width: 300px;
    padding: 0 20px;
    position: absolute;
    top: 130px;
    transition: transform 1s;
}

form input {
    width: 100%;
    height: 30px;
    margin: 10px 0;
    padding: 0 10px;
    border: 1px solid #ccc;
}

form .btn {
    width: 100%;
    border: none;
    cursor: pointer;
    margin: 10px 0;
}

form .btn:focus {
    outline: none;
}

#LoginForm {
    left: -300px;
}

#RegForm {
    left: 0;
}

form a {
    font-size: 12px;
}

#Indicator {
    width: 100px;
    border: none;
    background: #ff523b;
    height: 3px;
    margin-top: 8px;
    transform: translateX(100px);
    transition: transform 1s;
}

/* media query for less than 600 screen size */

@media only screen and (max-width: 600px) {
    .row {
        /* text-align: center; */
    }

    .col-2,
    .col-3,
    .col-4 {
        flex-basis: 100%;
    }

    .single-product .row {
        text-align: left;
    }

    .single-product .col-2 {
        padding: 20px 0;
    }

    .single-product h1 {
        font-size: 26px;
        line-height: 32px;
    }

    .cart-info p {
        display: none;
    }
}


/* /////////////////Details Modal///////////////////////// */

.show-details-modal {
    position: absolute;
    padding: 10px;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
}
</style>