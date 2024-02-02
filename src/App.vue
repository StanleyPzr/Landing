<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img src="./assets/dafal.jpg" alt="" class="logo">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <button class="nav-link" @click="$scrollTo('#home')">Inicio</button>
        <button class="nav-link" @click="$scrollTo('#about')">Sobre Nosotros</button>
        <button class="nav-link" @click="$scrollTo('#servicios')">Servicios</button>
        <button class="nav-link" @click="$scrollTo('#contacto')">Contactanos</button>        
      </div>
      <div class="btns ml-auto">
        <button type="button" class="btn btn-outline-* bi bi-facebook"></button>
        <button type="button" class="btn btn-outline-* bi bi-instagram"></button>        
      </div>
    </div>
  </div>
</nav>  

<div id="home" class="section">     
  <HomeView />
</div>

<div id="about" class="section">      
  <AboutView />
</div>

<div id="servicios" class="section" ref="servicios"> 
  <ServiciosView />
</div>

<div id="contacto" class="section">    
  <ContactView />
</div>

<footer class="mt-5 p-3 text-white">
  <div class="container">
    <div class="row">          
      <div id="pie" class="col-md-4">
        <p>
          En Dafal, creemos en construir relaciones sólidas y duraderas, basadas en la transparencia, la confianza y la excelencia en el servicio.
        </p>
      </div>
          
      <div class="col-md-4 text-center">            
        <img src="./assets/dafal.jpg" alt="Logo de Dafal" style="max-width: 100%; border-radius: 50%;">
        <p class="mt-3">&copy; Ronald Campillay Pizarro</p>
      </div>
          
      <div class="col-md-4 mt-5">
        <div>
          <i class="bi bi-geo-alt-fill"></i> Dirección: Reñaca Norte 265 of 510, Viña del Mar
        </div>
        <div>
          <i class="bi bi-phone"></i> Teléfono: +569 91731425
        </div>
        <div>
          <i class="bi bi-instagram"></i> Instagram: @dafalcl
        </div>
        <div>
          <i class="bi bi-envelope"></i> Correo: Contacto@dafal.cl
        </div>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue';
import ServiciosView from './views/ServiciosView.vue';


export default {
  name: 'App',
  components: {
    HomeView,   
    AboutView,
    ContactView,
    ServiciosView
  }
}
</script>

<style>
.logo {
  width: 100%;
  max-width: 150px;
  border-radius: 50%; 
}

footer {
  background-color: #050908;
  color: white;
}
#pie{
  text-align: justify;
  margin-top: 60px;
}
</style>