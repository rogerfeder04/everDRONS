<template>
  <div class="home">
    <!-- Hero Banner Component -->
    <HeroBanner />
    
    <!-- Services Section Component -->
    <ServicesSection />

    <!-- Portfolio Section Component -->
    <PortfolioSection />
    
    <!-- Estadísticas Section -->
    <section class="stats-section py-5" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);" data-aos="fade-up">
      <div class="container">
        <div class="row text-center text-white">
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="stat-item">
              <h2 class="stat-number">500+</h2>
              <p class="mb-0">Vuelos Realizados</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="stat-item">
              <h2 class="stat-number">150+</h2>
              <p class="mb-0">Clientes Satisfechos</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="stat-item">
              <h2 class="stat-number">98%</h2>
              <p class="mb-0"> Satisfacción</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="stat-item">
              <h2 class="stat-number">24</h2>
              <p class="mb-0">Horas de Cobertura</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contacto Section -->
    <section id="contacto" class="contact-section py-5" style="background-color: #f8f9fa;">
      <div class="container">

        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="text-center mb-5" data-aos="fade-up">
              <h2 class="section-title">¿Listo para volar?</h2>
              <p class="lead">Contáctanos y comencemos tu proyecto aéreo</p>
            </div>
            
            <div class="contact-form-wrapper" data-aos="fade-up" data-aos-delay="200">
              <form @submit.prevent="submitForm" class="contact-form">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="nombre" class="form-label">Nombre completo</label>
                    <input 
                      type="text" 
                      id="nombre"
                      v-model="contactForm.nombre" 
                      class="form-control" 
                      required
                      placeholder="Tu nombre"
                    >
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="correo" class="form-label">Correo electrónico</label>
                    <input 
                      type="email" 
                      id="correo"
                      v-model="contactForm.correo" 
                      class="form-control" 
                      required
                      placeholder="tu@email.com"
                    >
                  </div>
                </div>
                <div class="mb-3">
                  <label for="mensaje" class="form-label">Mensaje</label>
                  <textarea 
                    id="mensaje"
                    v-model="contactForm.mensaje" 
                    class="form-control" 
                    rows="5" 
                    required
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary btn-lg px-5">
                    <i class="fas fa-paper-plane me-2"></i>
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
                 <!-- Drone Banner Component --> 
    <DroneBanner /> <!-- 👈 Agregar aquí -->
        <!-- Información de contacto -->
      <div class="row mt-5" data-aos="fade-up" data-aos-delay="400">
          <div class="col-lg-4 mb-4">
            <div class="contact-info-card text-center clickable" @click="openLocation">
              <div class="contact-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <h5>Ubicación</h5>
              <p>San Gil, Santander<br>Colombia</p>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="contact-info-card text-center clickable" @click="callPhone">
              <div class="contact-icon">
                <i class="fas fa-phone"></i>
              </div>
              <h5>Teléfono</h5>
              <p>+57 310 256 1497</p>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="contact-info-card text-center clickable" @click="sendEmail">
              <div class="contact-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <h5>Email</h5>
              <p>joyaroger92@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Simple -->
    <footer class="barraas">
      <h3>Todos los derechos reservados - 2025</h3>
    </footer>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HeroBanner from './sections/HeroBanner.vue';
import ServicesSection from './sections/ServicesSection.vue';
import PortfolioSection from './sections/PortfolioSection.vue';
import DroneBanner from './sections/Banner.vue'; // 👈 Nuevo componente
// Formulario de contacto
const contactForm = ref({
  nombre: '',
  correo: '',
  mensaje: ''
});

const submitForm = () => {
  // Validar que todos los campos estén llenos
  if (!contactForm.value.nombre || !contactForm.value.correo || !contactForm.value.mensaje) {
    alert('Por favor, completa todos los campos del formulario.');
    return;
  }

  // Número de WhatsApp (el mismo que aparece en la página)
  const whatsappNumber = '+573102561497';
  
  // Crear el mensaje formateado para WhatsApp
  const mensaje = `¡Hola! Me interesa contratar servicios de drones.

👤 *Nombre:* ${contactForm.value.nombre}
📧 *Email:* ${contactForm.value.correo}

💬 *Mensaje:*
${contactForm.value.mensaje}

---
Enviado desde la página web de Drones Services`;

  // Codificar el mensaje para URL
  const mensajeCodificado = encodeURIComponent(mensaje);
  
  // Crear la URL de WhatsApp
  const whatsappURL = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${mensajeCodificado}`;
  
  // Abrir WhatsApp en una nueva ventana/pestaña
  window.open(whatsappURL, '_blank');
  
  // Limpiar el formulario después del envío
  contactForm.value = { nombre: '', correo: '', mensaje: '' };
  
  // Mostrar mensaje de confirmación
  alert('¡Perfecto! Te estamos redirigiendo a WhatsApp para completar tu consulta.');
};

// Función para abrir ubicación en Google Maps
const openLocation = () => {
  const locationURL = 'https://www.google.com/maps/place/San+Gil,+Santander,+Colombia/@6.5571623,-73.1376953,13z/data=!3m1!4b1!4m6!3m5!1s0x8e6844d3b1c5c3c3:0x8b5c5c5c5c5c5c5c!8m2!3d6.5571623!4d-73.1376953!16zL20vMDQ2NGtt';
  window.open(locationURL, '_blank');
};

// Función para llamar por teléfono - AHORA VA A WHATSAPP
const callPhone = () => {
  const whatsappNumber = '+573102561497';
  const mensaje = `¡Hola! Me interesa conocer más sobre sus servicios de drones. ¿Podrían proporcionarme más información?`;
  const mensajeCodificado = encodeURIComponent(mensaje);
  const whatsappURL = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${mensajeCodificado}`;
  window.open(whatsappURL, '_blank');
};

// Función para enviar email - AHORA ABRE GMAIL ESPECÍFICAMENTE
const sendEmail = () => {
  const emailDestino = 'joyaroger92@gmail.com';
  const asunto = encodeURIComponent('Consulta sobre servicios de drones');
  const cuerpo = encodeURIComponent(`Hola,

Me interesa conocer más sobre sus servicios de drones. Podrían proporcionarme información sobre:

- Servicios disponibles
- Precios
- Disponibilidad

Gracias por su atención.

Saludos cordiales.`);
  
  // URL específica de Gmail
  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailDestino}&su=${asunto}&body=${cuerpo}`;
  window.open(gmailURL, '_blank');
};

// Función para animar contadores
const animateCounter = (element, target) => {
  let current = 0;
  const increment = target / 50;
  const isPercentage = element.textContent.includes('%');
  const hasPlus = element.textContent.includes('+');
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    
    let displayValue = Math.floor(current);
    if (isPercentage) displayValue += '%';
    if (hasPlus && current >= target) displayValue += '+';
    
    element.textContent = displayValue;
  }, 20);
};

onMounted(() => {
  // Inicializar animaciones AOS
  if (typeof window !== 'undefined' && window.AOS) {
    window.AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
      delay: 100
    });
  } else {
    const aosCSS = document.createElement('link');
    aosCSS.rel = 'stylesheet';
    aosCSS.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
    document.head.appendChild(aosCSS);
    
    const aosJS = document.createElement('script');
    aosJS.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
    aosJS.onload = () => {
      window.AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
        delay: 100
      });
    };
    document.head.appendChild(aosJS);
  }
  
  // Animación de contadores
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        animateCounter(counter, target);
        observer.unobserve(counter);
      }
    });
  }, observerOptions);
  
  setTimeout(() => {
    document.querySelectorAll('.stat-number').forEach((counter) => {
      observer.observe(counter);
    });
  }, 100);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@300;400;600&display=swap');

/* Contenedor principal */
.home {
  width: 100%;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Estilos para la sección de estadísticas */
.stats-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  padding: 120px 0 !important;
}

.stats-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(0, 191, 255, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(0, 191, 255, 0.1) 0%, transparent 50%);
  z-index: 1;
}

.stats-section .container {
  position: relative;
  z-index: 2;
}

.stat-item {
  padding: 40px 30px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
}

.stat-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s ease-in-out;
}

.stat-item:hover::before {
  left: 100%;
}

.stat-item:hover {
  transform: translateY(-15px) scale(1.05);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 25px 50px rgba(0, 191, 255, 0.3);
  border-color: rgba(0, 191, 255, 0.5);
}

.stat-number {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 15px;
  color: #FFFFFF;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  background: linear-gradient(45deg, #FFD700, #00BFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
}

.stat-item:hover .stat-number {
  transform: scale(1.1);
  text-shadow: 3px 3px 12px rgba(0, 0, 0, 0.4);
}

.stat-item p {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1rem, 2vw, 1.3rem);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.5px;
  margin: 0;
  transition: all 0.3s ease;
}

.stat-item:hover p {
  color: #FFD700;
  transform: translateY(-2px);
}

/* Estilos para la sección de contacto */
.contact-section {
  position: relative;
  background: #0A0A0A !important;
  padding: 120px 0 !important;
  color: #FFFFFF;
}

.contact-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(ellipse at center, rgba(0, 191, 255, 0.1) 0%, transparent 70%),
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%2300BFFF" stroke-width="0.1" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>') repeat;
  opacity: 0.5;
  z-index: 1;
}

.contact-section .container {
  position: relative;
  z-index: 2;
}

.section-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: #00BFFF;
  margin-bottom: 20px;
  text-align: center;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #00BFFF, #FFD700);
  border-radius: 2px;
}

.lead {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin-bottom: 60px;
  font-weight: 400;
}

.contact-form-wrapper {
  background: rgba(255, 255, 255, 0.05);
  padding: 50px 40px;
  border-radius: 25px;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(0, 191, 255, 0.2);
  margin-bottom: 80px;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.contact-form-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #00BFFF, #FFD700, #00BFFF);
  background-size: 200% 100%;
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.contact-form .form-label {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #00BFFF;
  margin-bottom: 8px;
  font-size: 1rem;
}

.contact-form .form-control {
  border: 2px solid rgba(0, 191, 255, 0.3);
  border-radius: 15px;
  padding: 15px 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1rem;
  background: rgba(0, 0, 0, 0.3);
  color: #FFFFFF;
  backdrop-filter: blur(10px);
}

.contact-form .form-control::placeholder {
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
}

.contact-form .form-control:focus {
  border-color: #00BFFF;
  box-shadow: 
    0 0 0 0.25rem rgba(0, 191, 255, 0.25),
    0 10px 30px rgba(0, 191, 255, 0.2);
  transform: translateY(-3px);
  background: rgba(0, 0, 0, 0.5);
  outline: none;
}

.contact-form .btn-primary {
  background: linear-gradient(135deg, #00BFFF, #FFD700);
  border: none;
  border-radius: 50px;
  padding: 18px 40px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #0A0A0A;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.contact-form .btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.contact-form .btn-primary:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 20px 40px rgba(0, 191, 255, 0.4);
}

.contact-form .btn-primary:hover::before {
  left: 100%;
}

.contact-info-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(0, 191, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 100%;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
}

.contact-info-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 191, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}

.contact-info-card:active {
  transform: translateY(-5px) scale(0.98);
  transition: all 0.1s ease;
}

.contact-info-card::after {
  content: '';
  position: absolute;
  top: 10px;
  right: 10px;
  width: 8px;
  height: 8px;
  background: #00BFFF;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.contact-info-card:hover::after {
  opacity: 1;
}

.contact-icon {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #00BFFF, #FFD700);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 15px 35px rgba(0, 191, 255, 0.4);
}

.contact-info-card:hover .contact-icon {
  transform: rotateY(360deg) scale(1.1);
  box-shadow: 0 20px 45px rgba(255, 215, 0, 0.5);
}

.contact-icon i {
  font-size: 2.5rem;
  color: #0A0A0A;
}

.contact-info-card h5 {
  font-family: 'Montserrat', sans-serif;
  color: #FFD700;
  font-weight: 700;
  font-size: 1.4rem;
  margin-bottom: 15px;
  transition: all 0.3s ease;
}

.contact-info-card:hover h5 {
  color: #00BFFF;
  transform: translateY(-2px);
}

.contact-info-card p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0;
  line-height: 1.8;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.contact-info-card:hover p {
  color: rgba(255, 255, 255, 0.95);
}

/* Footer Simple - Barra Negra */
.barraas {
  background: #000000;
  color: #FFFFFF;
  padding: 20px 0;
  text-align: center;
  width: 100%;
  margin: 0;
  border-top: 1px solid #333333;
}

.barraas h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(0.8rem, 2vw, 1rem);
  font-weight: 400;
  color: #FFFFFF;
  margin: 0;
  padding: 0;
  letter-spacing: 0.5px;
}

/* Responsividad del Footer */
@media (max-width: 768px) {
  .barraas {
    padding: 15px 0;
  }
  
  .barraas h3 {
    font-size: clamp(0.7rem, 2.5vw, 0.9rem);
  }
}

@media (max-width: 576px) {
  .barraas {
    padding: 12px 0;
  }
  
  .barraas h3 {
    font-size: clamp(0.65rem, 3vw, 0.8rem);
  }
}

@media (max-width: 400px) {
  .barraas {
    padding: 10px 0;
  }
  
  .barraas h3 {
    font-size: 0.6rem;
  }
}

@media (max-width: 275px) {
  .barraas {
    padding: 8px 0;
  }
  
  .barraas h3 {
    font-size: 0.55rem;
  }
}

/* Responsividad consolidada */
@media (max-width: 1200px) {
  .stats-section,
  .contact-section { padding: 70px 0 !important; }
  .contact-form-wrapper { padding: 30px 25px; }
}

@media (max-width: 992px) {
  .stats-section,
  .contact-section { padding: 50px 0 !important; }
  .contact-form-wrapper { padding: 25px 20px; }
  .stat-item { padding: 25px 15px; margin-bottom: 15px; }
  .contact-icon { width: 60px; height: 60px; }
  .contact-icon i { font-size: 1.5rem; }
}

@media (max-width: 768px) {
  .stats-section,
  .contact-section { padding: 30px 0 !important; }
  
  .section-title {
    font-size: clamp(1.8rem, 5vw, 2.2rem) !important;
    margin-bottom: 20px;
  }
  
  .lead {
    font-size: clamp(0.9rem, 2.5vw, 1.1rem) !important;
    margin-bottom: 30px;
  }
  
  .contact-form-wrapper {
    padding: 20px 15px;
    margin-bottom: 30px;
    border-radius: 15px;
  }
  
  .stat-item {
    padding: 20px 12px;
    margin-bottom: 12px;
    border-radius: 15px;
  }
  
  .stat-number {
    font-size: clamp(1.8rem, 6vw, 2.5rem) !important;
    margin-bottom: 8px;
  }
  
  .stat-item p {
    font-size: clamp(0.8rem, 2.5vw, 1rem) !important;
  }
  
  .contact-info-card {
    padding: 20px 15px;
    margin-bottom: 15px;
    border-radius: 15px;
  }
  
  .contact-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 12px;
  }
  
  .contact-icon i { font-size: 1.2rem; }
  .contact-info-card h5 { font-size: 1rem; margin-bottom: 8px; }
  .contact-info-card p { font-size: 0.85rem; line-height: 1.4; }
}

@media (max-width: 576px) {
  .stats-section,
  .contact-section { padding: 25px 0 !important; }
  .row, .column, .flex {
    display: flex !important;
    flex-wrap: nowrap;
}
  .section-title {
    font-size: clamp(1.5rem, 6vw, 1.9rem) !important;
    margin-bottom: 15px;
  }
  
  .lead {
    font-size: clamp(0.85rem, 3vw, 1rem) !important;
    margin-bottom: 25px;
    padding: 0 10px;
  }
  
  .contact-form-wrapper {
    padding: 15px 12px;
    margin: 0 8px 25px;
    border-radius: 12px;
  }
  
  /* .stat-item {
    padding: 15px 10px;
    margin: 0 8px 10px;
    border-radius: 12px;
  } */
  
    .stat-item[data-v-08e32229] {
        padding: 0px 0px;
        margin-bottom: 12px;
        height: 140px;
        border-radius: 15px;
    }

  .stat-number {
    font-size: clamp(1.5rem, 8vw, 2rem) !important;
    margin-bottom: 6px;
  }
  
  .stat-item p {
    font-size: clamp(0.75rem, 3vw, 0.9rem) !important;
  }

 .contact-info-card[data-v-08e32229] {
        padding: 12px 10px;
        margin: 0 2px 2px;
        border-radius: 12px;
    }
  
  .contact-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
  }
  
  .contact-icon i { font-size: 1rem; }
  .contact-info-card h5 { font-size: 0.9rem; margin-bottom: 6px; }
  .contact-info_card p { font-size: 0.8rem; line-height: 1.3; }
  
  .contact-form .form-control {
    padding: 10px 12px;
    font-size: 0.85rem;
    border-radius: 10px;
  }
  
  .contact-form .btn-primary {
    padding: 10px 20px;
    font-size: 0.85rem;
    border-radius: 20px;
  }
  
  .container { padding: 0 12px; }
}



@media (max-width: 275px) {
  .stats-section,
  .contact-section { padding: 8px 0 !important; }
  
  .section-title { font-size: 1rem !important; margin-bottom: 6px; }
  .lead { font-size: 0.65rem !important; margin-bottom: 10px; padding: 0 2px; }
  .contact-form-wrapper { padding: 6px 4px; margin: 0 2px 10px; border-radius: 4px; }
  .stat-item { padding: 6px 3px; margin: 0 2px 4px; border-radius: 4px; }
  .stat-number { font-size: 1.1rem !important; margin-bottom: 2px; }
  .stat-item p { font-size: 0.55rem !important; }
  
  .contact-info-card {

    padding: 6px 4px !important;
    margin: 0 2px 4px !important;
    border-radius: 4px !important;
  }
  
  .contact-icon {
    width: 20px !important;
    height: 20px !important;
    margin-bottom: 3px !important;
  }
  
  .contact-icon i { font-size: 0.6rem !important; }
  .contact-info-card h5 { font-size: 0.6rem !important; margin-bottom: 2px !important; }
  .contact-info-card p { font-size: 0.55rem !important; line-height: 0.9 !important; }
  
  .contact-form .form-control { padding: 4px 5px; font-size: 0.65rem; border-radius: 4px; }
  .contact-form .btn-primary { padding: 4px 8px; font-size: 0.65rem; border-radius: 8px; }
  .container { padding: 0 4px !important; }
  .col-lg-4.mb-4 { margin-bottom: 0.5rem !important; padding: 0 2px !important; }
}
</style>