<script setup>
// Función para WhatsApp con mensaje preestablecido
const openWhatsApp = () => {
  const whatsappNumber = '+573102561497';
  const mensaje = `¡Hola! Me interesa conocer más sobre sus servicios de drones. ¿Podrían proporcionarme más información?`;
  const mensajeCodificado = encodeURIComponent(mensaje);
  const whatsappURL = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${mensajeCodificado}`;
  window.open(whatsappURL, '_blank');
};

// Función para enviar email - IGUAL QUE EN HOME
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

// Función para scroll al portafolio
const scrollToPortfolio = () => {
  const portfolioSection = document.querySelector('#portfolio');
  if (portfolioSection) {
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <section class="hero-section">
    <div class="hero-background-css">
      <div class="hero-overlay"></div>
    </div>
    
    <div class="hero-content">
      <h1 class="hero-title">Capturamos tu mundo desde otra perspectiva</h1>
      <p class="hero-subtitle">Servicios profesionales de fotografía y filmación aérea con drones</p>
      <button class="hero-btn" @click="scrollToPortfolio">
        Ver Portafolio
      </button>
    </div>

    <!-- Botones sociales flotantes -->
    <div class="social-buttons">
      <a @click.prevent="openWhatsApp" href="#" aria-label="WhatsApp" class="whatsapp-btn">
        <i class="fab fa-whatsapp"></i>
      </a>
      <a href="https://www.instagram.com/everdrons/" target="_blank" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
      </a>
      <a @click.prevent="sendEmail" href="#" aria-label="Email" class="email-btn">
        <i class="fas fa-envelope"></i>
      </a>
      <a href="https://www.facebook.com/developers.full.stack.2025" target="_blank" aria-label="Facebook">
        <i class="fab fa-facebook"></i>
      </a>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@300;400;600&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

/* Hero Section */
.hero-section {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Agregar estilos para el fondo de imagen */
.hero-background-css {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -2;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.7);
  z-index: -1;
}

.hero-content {
  text-align: center;
  z-index: 1;
  max-width: 800px;
  padding: 0 20px;
  color: #FFFFFF;
}

.hero-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-btn {
  background: linear-gradient(135deg, #00BFFF, #FFD700);
  color: #0A0A0A;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 15px 40px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 191, 255, 0.4);
}

/* Botones sociales flotantes */
.social-buttons {
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.social-buttons a {
  width: 50px;
  height: 50px;
  background: #00BFFF;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-buttons a:hover {
  transform: scale(1.1);
}

/* Estilo específico para WhatsApp */
.social-buttons .whatsapp-btn {
  background: #25D366; /* Color oficial de WhatsApp */
  cursor: pointer;
  animation: whatsappPulse 2s infinite;
}

.social-buttons .whatsapp-btn:hover {
  background: #128C7E; /* Verde más oscuro al hover */
  transform: scale(1.15);
  box-shadow: 0 8px 20px rgba(37, 211, 102, 0.4);
}

.social-buttons .whatsapp-btn:active {
  transform: scale(1.05);
  transition: all 0.1s ease;
}

/* Estilo específico para Instagram */
.social-buttons a[href*="instagram"] {
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  animation: instagramGlow 3s ease-in-out infinite alternate;
}

.social-buttons a[href*="instagram"]:hover {
  background: linear-gradient(45deg, #ff6b35, #f7931e, #ff006e);
  transform: scale(1.15) rotate(5deg);
  box-shadow: 0 8px 25px rgba(225, 48, 108, 0.5);
}

/* Estilo específico para Email */
.social-buttons a[href*="mailto"] {
  background: linear-gradient(135deg, #EA4335, #34A853, #FBBC05, #4285F4);
  animation: emailShine 2.5s ease-in-out infinite;
}

.social-buttons a[href*="mailto"]:hover {
  background: #EA4335;
  transform: scale(1.15);
  box-shadow: 0 8px 20px rgba(234, 67, 53, 0.4);
}

/* Estilo específico para Facebook */
.social-buttons a[href*="facebook"] {
  background: #1877F2; /* Color oficial de Facebook */
  animation: facebookPulse 2.8s ease-in-out infinite;
}

.social-buttons a[href*="facebook"]:hover {
  background: #166FE5;
  transform: scale(1.15);
  box-shadow: 0 8px 20px rgba(24, 119, 242, 0.4);
}

/* Animaciones específicas */
@keyframes whatsappPulse {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}

@keyframes instagramGlow {
  0% {
    box-shadow: 0 0 5px rgba(225, 48, 108, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(225, 48, 108, 0.6);
  }
  100% {
    box-shadow: 0 0 5px rgba(225, 48, 108, 0.3);
  }
}

@keyframes emailShine {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}

@keyframes facebookPulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(24, 119, 242, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 8px rgba(24, 119, 242, 0);
  }
}

/* Efectos hover adicionales para iconos */
.social-buttons a i {
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* WhatsApp icon effect */
.social-buttons .whatsapp-btn:hover i {
  animation: whatsappShake 0.6s ease-in-out;
}

@keyframes whatsappShake {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  75% { transform: rotate(10deg); }
}

/* Instagram icon effect */
.social-buttons a[href*="instagram"]:hover i {
  animation: instagramSpin 0.8s ease-in-out;
}

@keyframes instagramSpin {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.2); }
  100% { transform: rotate(360deg) scale(1); }
}

/* Email icon effect */
.social-buttons a[href*="mailto"]:hover i {
  animation: emailBounce 0.6s ease-in-out;
}

@keyframes emailBounce {
  0%, 100% { transform: translateY(0); }
  25% { transform: translateY(-3px); }
  50% { transform: translateY(0); }
  75% { transform: translateY(-1.5px); }
}

/* Facebook icon effect */
.social-buttons a[href*="facebook"]:hover i {
  animation: facebookFlip 0.7s ease-in-out;
}

@keyframes facebookFlip {
  0% { transform: rotateY(0deg); }
  50% { transform: rotateY(180deg); }
  100% { transform: rotateY(360deg); }
}

/* Responsividad */
@media (max-width: 768px) {
  .hero-title {
    font-size: clamp(2rem, 8vw, 3rem);
  }
  
  .hero-subtitle {
    font-size: clamp(1rem, 4vw, 1.2rem);
  }
  
  .social-buttons {
    right: 15px;
    gap: 12px;
  }
  
  .social-buttons a {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }
}

@media (max-width: 576px) {
  .hero-content {
    padding: 0 15px;
  }
  
  .hero-btn {
    padding: 12px 30px;
    font-size: 1rem;
  }
  
  .social-buttons {
    position: fixed;
    bottom: 20px;
    right: 20px;
    top: auto;
    transform: none;
    flex-direction: row;
    gap: 10px;
  }
  
  .social-buttons a {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }
}
</style>