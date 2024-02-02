<template>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item carousel-image bg-img-1 active">
      <!-- <img src="https://i.imgur.com/ZtazxTO.jpg" class="d-block w-100" alt="Condominio"> -->
    </div>
    <div class="carousel-item carousel-image bg-img-2">
      <!-- <img src="https://i.imgur.com/9hfWT2B.jpg" class="d-block w-100" alt="Parque"> -->
    </div>
    <div class="carousel-item carousel-image bg-img-3">
      <!-- <img src="https://i.imgur.com/MRsVFRD.jpg" class="d-block w-100" alt="Departamento"> -->
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<style scoped>
.bg-img-1 {
    background-image: url(https://i.imgur.com/ZtazxTO.jpg);
}

.bg-img-2 {
    background-image: url(https://i.imgur.com/9hfWT2B.jpg);
}

.bg-img-3 {
    background-image: url(https://i.imgur.com/MRsVFRD.jpg);
}

.carousel-image {
    height: 100vh;
    background-size: cover;
    background-position: center;
}
</style>