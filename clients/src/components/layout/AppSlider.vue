<template>
  <!-- <h2>Slid Bar</h2> -->
  <div
    id="carouselExampleFade"
    class="carousel slide carousel-fade"
    data-bs-ride="carous"
  >
    <div class="carousel-inner shadow">
      <div class="carousel-item active"  style="background-image: url('https://rrslide.com/wp-content/uploads/edd/2021/04/Slide1-min-59.jpg'); background-size: cover;">
        <!-- <img
          class="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpXd2b3E8HCiKm3JmVV8UP5_zTlJUo1QX6eg&usqp=CAU"
        /> -->
        <!-- <div class="carousel-caption">
          <h5>First</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div> -->
      </div>
      <div class="carousel-item active"  style="background-image: url('https://www.shutterstock.com/image-photo/wow-seasonal-sales-full-body-260nw-1954344382.jpg'); background-size: cover;">
        <!-- <img
          class="d-block w-100"
          src="https://www.gannett-cdn.com/presto/2018/08/14/PTAL/6e4fff76-595d-4069-9112-cfe15dbfaa43-IMG_Stadium.jpeg?width=660&height=319&fit=crop&format=pjpg&auto=webp"
        /> -->
        <!-- <div class="carousel-caption">
          <h5>Second</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div> -->
      </div>
      <div class="carousel-item active"  style="background-image: url('https://www.xenelsoft.com/wp-content/uploads/2019/07/webapplicationdesign.jpg'); background-size: cover;">
        <!-- <img
          class="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPYvs5arsp3PA8-XCi7bsP-Ms1eiikfBZzvQ&usqp=CAU"
        /> -->
        <!-- <div class="carousel-caption ">
          <h5>Third</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div> -->
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <!-- <div class="slide">
        <Transition name="slide">
            <slot>

            </slot>
        </Transition>
    </div> -->
</template>

<script>
export default {
  name: "AppSlider",
};
</script>


<style  scoped>
.slide{

    max-height: 500px;
}

/* .slide img {

}  */

.carousel {

}
.carousel-inner {
  width: 100%;
  display: inline-block;
  position: relative;
  max-height: 500px !important;
  min-height: 450px !important;
  /* background-image: repeating-linear-gradient(red, yellow 10%, green 20%); */

}

.carousel-inner {
  /* padding-top: 43.25%; */
  display: block;
  content: "";

}

.carousel-item {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  /* background: linear-gradient(rgb(255, 255, 255, 0.6) 5%, rgb(255, 255, 255, 0.4) 10%, rgb(0, 0, 0, 0.2) 30%); */
  background: skyblue;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  max-height: 500px;

}

.caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 60%;
  z-index: 9;
  margin-top: 20px;
  text-align: center;
}

.caption h1 {
  color: #fff;
  font-size: 52px;
  font-weight: 700;
  margin-bottom: 23px;
}

.caption h2 {
  color: rgba(255, 255, 255, .75);
  font-size: 26px;
  font-weight: 300;
}

a.big-button {
  color: #fff;
  font-size: 19px;
  font-weight: 700;
  text-transform: uppercase;
  background: #eb7a00;
  background: rgba(255, 0, 0, 0.75);
  padding: 28px 35px;
  border-radius: 3px;
  margin-top: 80px;
  margin-bottom: 0;
  display: inline-block;
}

a.big-button:hover {
  text-decoration: none;
  background: rgba(255, 0, 0, 0.9);
}

a.view-demo {
  color: #fff;
  font-size: 21px;
  font-weight: 700;
  display: inline-block;
  margin-top: 35px;
}

a.view-demo:hover {
  text-decoration: none;
  color: #333;
}

.carousel-indicators .active {
  background: #fff;
}

.carousel-indicators li {
  background: rgba(255, 255, 255, 0.4);
  border-top: 20px solid;
  z-index: 15;
}


@media only screen and (max-width: 768px) {
  .carousel-inner {
  width: 100%;
  max-height: 500px !important;
  min-height: 350px !important;

}
}
</style>
