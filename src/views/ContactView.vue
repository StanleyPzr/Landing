<template>
    <div class="contactos">
        <h1 id="contact-title"><strong>Contacto</strong></h1>
        <div class="card">
        <form class="was-validated">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre" >
        </div>

        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Telefono</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Teléfono" >
        </div>

        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="correo@email.com" >
        </div>
 
        <div class="form-check">
            <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" >
            <label class="form-check-label" for="validationFormCheck2">Empresa</label>
        </div>

        <div class="form-check mb-3">
            <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" >
            <label class="form-check-label" for="validationFormCheck3">Persona Natural</label>
            <div class="invalid-feedback">Seleccione su rol</div>
        </div>

        <div class="mb-3">
          <label for="validationTextarea" class="form-label">Mensaje</label>
          <textarea class="form-control" id="validationTextarea" placeholder="Ingrese su mensaje acá" ></textarea>
          <div class="invalid-feedback">Por favor ingrese un mensaje en el area designada.</div>
        </div>

        <div class="enviar mb-3">
            <button class="btn btn-primary" type="submit"><i class="bi bi-envelope-arrow-up-fill"></i> Enviar</button>
        </div>

        </form>
        </div>
    </div>
</template>
  
<style scoped>
#contact-title {
    color: black;
    text-align: center;
}

.contactos {
    background-color: #f4f6f7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto; /* Ajusta la altura según tus necesidades */
    padding: 75px;
}

.card {
    padding: 20px;    
    width: 50%;    
}

.enviar {
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (max-width: 768px) {
    .card {
        padding: 20px;    
        width: 100%;    
    }          
}
</style>