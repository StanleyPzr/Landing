<template>
    <div class="servicios" id="servicios-view">
      <h1 id="title" class="mt-4 mb-4"><strong>Nuestros Servicios</strong></h1>
    <div class="contenido-servicios">
      
      <div class="servicios-uno">
        <i class="bi bi-buildings icon"></i>        
        <h1>Gestión de propiedades</h1>
        <ul>
          <li>Trabajo en terreno ajustable a exigencias de copropietarios.</li>
          <li>Aplicacion ley 21.442 y su futuro reglamento.</li>
          <li>Ejecución del reglamento de la comunidad.</li>
          <li>Redaccion y modificación del reglamento de la comunidad en base a nueva ley de copropiedad 21.442.</li>
          <li>Realizacion de asambleas periódicas.</li>      
        </ul> 
      </div>
      
      <div class="servicios-dos">
        <i class="bi bi-people icon"></i>
        <h1>Gestión Administrativa</h1>
        <ul>
          <li>Gastos Comunes.</li>
          <li>Conciliación Bancaria.</li>
          <li>Informe y rendición de ingresos y egresos.</li>
          <li>Estado de cuantas bancarias.</li>
          <li>Informes económicos anuales.</li>
        </ul>
      </div>
  
      <div class="servicios-tres">
        <i class="bi bi-person-circle icon"></i>
        <h1>Gestión del Capital Humano</h1>
        <ul>
          <li>Reglamento de orden higiene y seguridad laboral.</li>
          <li>Aplicación código de trabajo y normativa laboral vigente.</li>
          <li>Verificación de cursos OS10 de conserjes.</li>
          <li>Aplicación nueva normativa 40 horas.</li>
          <li>Remuneraciones y contratos de trabajo.</li>
          <li>Finiquitos e indemnizaciones.</li>
        </ul>
      </div>
  
      <div class="servicios-cuatro">
        <i class="bi bi-shield-lock icon"></i>
        <h1>Seguridad</h1>
        <ul>
          <li>Verificacion de sellos de seguridad.</li>
          <li>Plan de emergencia.</li>
          <li>Mantenciones y reparaciones necesarias de red hídrica y red seca.</li>
          <li>Mantenciones de infraestructuras necesarias.</li>
          <li>Revision de instalaciones.</li>
          <li>Revisión de seguros contra incendios.</li>
        </ul>
      </div>
  
      <div class="servicios-cinco">
        <i class="bi bi-cash-coin icon"></i>
        <h1>Financiero</h1>
        <ul>
          <li>Asesoría en inversión de capital buscando los mejores instrumentos financieros para darle mayor valor futuro a tu comunidad.</li>
          <li>Realización de proyectos para tu comunidad que conlleve la mejor ejecución en base a precio calidad.</li>
        </ul>
      </div>
  
      <div class="servicios-seis">
        <i class="bi bi-plus-circle icon"></i>
        <h1>... Y mucho más</h1>
        <ul>
          <li>Si su interés se centra en un servicio que no figura en nuestra lista, le invitamos a ponerse en contacto con nosotros. Estaremos encantados de evaluar su solicitud y trabajar en conjunto para encontrar la solución más adecuada para usted. No espere más; comuníquese con nosotros hoy mismo.</li>        
        </ul>
      </div>
    </div>
  </div>
  </template>
  
  <style scoped>

    #servicios-view{
      background-color: #7575f5a4;
    }
    .servicios h1{
      
      text-align: center;
    }  
  
    #title{
      color: black;
      padding-top: 75px;
    }
  
    .contenido-servicios {
      display: grid;    
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      color: white; /* Texto blanco */
      grid-template-columns: repeat(3, 1fr);
      padding: 20px;
    }
  
    .servicios-container {
      display: flex;
      justify-content: space-between;
    }
    .servicios-uno h1{
      color: black;
    }

    .icon{
        font-size: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        animation: pulse 2s infinite;
    }
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }
  
    .servicios-uno, .servicios-dos, .servicios-tres, .servicios-cuatro, .servicios-cinco, .servicios-seis {
      border-radius: 20px;
      background-color: rgba(255, 255, 255, 0.904);
      color: black;
      padding: 30px;
    }  
  
    .servicios-uno, .servicios-dos {    
      width: 100%;   
    }
  
    ul {
      padding: 0;    
    }
  
    @media (max-width: 768px) {
        .contenido-servicios {
            grid-template-columns: 1fr;
        }
  
        .servicios-uno, .servicios-dos, .servicios-tres, .servicios-cuatro, .servicios-cinco, .servicios-seis {
            width: 100%;
        }    
    }
  </style>