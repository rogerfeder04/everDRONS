<template>
  <section class="drone-banner">
    <div class="banner-container">
      <div class="banner-content">
        <div class="banner-icon">
          <i class="fas fa-helicopter"></i>
        </div>
        <div class="banner-text">
          <h3 class="banner-title">Vuelos Profesionales</h3>
          <p class="banner-subtitle">⏬Capturamos desde las alturas ⏬</p>
        </div>
        <div class="banner-action">
          <button @click="contactNow" class="banner-btn">
            <i class="fab fa-whatsapp"></i>
            <span>⏬Contactar⏬</span>
          </button>
        </div>
      </div>
      
      <!-- Elementos decorativos -->
      <div class="banner-decorations">
        <div class="drone-path">
          <i class="fas fa-helicopter drone-icon-1"></i>
          <i class="fas fa-helicopter drone-icon-2"></i>
          <i class="fas fa-helicopter drone-icon-3"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Función para contactar por WhatsApp
const contactNow = () => {
  const whatsappNumber = '+573102561497';
  const mensaje = `¡Hola! Estoy interesado en sus servicios de drones profesionales. ¿Podrían darme más información?`;
  const mensajeCodificado = encodeURIComponent(mensaje);
  const whatsappURL = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${mensajeCodificado}`;
  window.open(whatsappURL, '_blank');
};
</script>

<style scoped>
.drone-banner {
  position: relative;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #00BFFF 100%);
  padding: 25px 0;
  overflow: hidden;
  margin: 20px 0;
}

.drone-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(255, 215, 0, 0.1) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(0, 191, 255, 0.15) 0%, transparent 50%);
  z-index: 1;
}

.banner-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}

.banner-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.banner-icon {
  flex-shrink: 0;
}

.banner-icon i {
  font-size: 3rem;
  color: #FFD700;
  animation: hoverDrone 3s ease-in-out infinite;
  filter: drop-shadow(0 5px 15px rgba(255, 215, 0, 0.3));
}

@keyframes hoverDrone {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-5px) rotate(-2deg); }
  50% { transform: translateY(-8px) rotate(0deg); }
  75% { transform: translateY(-3px) rotate(2deg); }
}

.banner-text {
  flex: 1;
  text-align: center;
}

.banner-title {
  font-family: 'Montserrat', sans-serif;
  color: #FFFFFF;
  font-size: clamp(1.2rem, 4vw, 2rem);
  font-weight: 700;
  margin: 0 0 5px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.banner-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(0.8rem, 2.5vw, 1.1rem);
  margin: 0;
  font-weight: 400;
}

.banner-action {
  flex-shrink: 0;
}

.banner-btn {
  background: linear-gradient(135deg, #25D366, #128C7E);
  border: none;
  border-radius: 25px;
  padding: 12px 20px;
  color: #FFFFFF;
  font-weight: 600;
  font-size: clamp(0.8rem, 2vw, 1rem);
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
}

.banner-btn:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
  background: linear-gradient(135deg, #128C7E, #075E54);
}

.banner-btn i {
  font-size: 1.2em;
}

/* Elementos decorativos */
.banner-decorations {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

.drone-path {
  position: relative;
  width: 100%;
  height: 100%;
}

.drone-path i {
  position: absolute;
  color: rgba(255, 215, 0, 0.2);
  font-size: 1rem;
}

.drone-icon-1 {
  top: 20%;
  left: 10%;
  animation: flyDrone1 8s linear infinite;
}

.drone-icon-2 {
  top: 60%;
  right: 15%;
  animation: flyDrone2 6s linear infinite reverse;
}

.drone-icon-3 {
  top: 40%;
  left: 50%;
  animation: flyDrone3 10s linear infinite;
}

@keyframes flyDrone1 {
  0% { transform: translateX(-20px) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateX(calc(100vw + 20px)) rotate(360deg); opacity: 0; }
}

@keyframes flyDrone2 {
  0% { transform: translateX(20px) rotate(0deg); opacity: 0; }
  15% { opacity: 1; }
  85% { opacity: 1; }
  100% { transform: translateX(calc(-100vw - 20px)) rotate(-360deg); opacity: 0; }
}

@keyframes flyDrone3 {
  0% { transform: translateY(-10px) scale(0.8); opacity: 0; }
  20% { opacity: 1; }
  50% { transform: translateY(10px) scale(1.1); }
  80% { opacity: 1; }
  100% { transform: translateY(-10px) scale(0.8); opacity: 0; }
}

/* Responsividad para móviles */
@media (max-width: 768px) {
  .drone-banner {
    padding: 20px 0;
    margin: 15px 0;
  }
  
  .banner-content {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
  
  .banner-icon i {
    font-size: 2.5rem;
  }
  
  .banner-btn {
    padding: 10px 18px;
  }
}

@media (max-width: 576px) {
  .drone-banner {
    padding: 15px 0;
    margin: 10px 0;
  }
  
  .banner-container {
    padding: 0 15px;
  }
  
  .banner-content {
    gap: 12px;
  }
  
  .banner-icon i {
    font-size: 2rem;
  }
  
  .banner-btn {
    padding: 8px 15px;
    border-radius: 20px;
  }
  
  .banner-title {
    font-size: clamp(1rem, 5vw, 1.5rem);
  }
  
  .banner-subtitle {
    font-size: clamp(0.7rem, 3vw, 0.9rem);
  }
}

@media (max-width: 400px) {
  .drone-banner {
    padding: 12px 0;
    margin: 8px 0;
  }
  
  .banner-container {
    padding: 0 12px;
  }
  
  .banner-content {
    gap: 10px;
  }
  
  .banner-icon i {
    font-size: 1.8rem;
  }
  
  .banner-btn {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
  
  .banner-btn span {
    font-size: 0.75rem;
  }
}

@media (max-width: 350px) {
  .drone-banner {
    padding: 10px 0;
    margin: 6px 0;
  }
  
  .banner-container {
    padding: 0 10px;
  }
  
  .banner-content {
    gap: 8px;
  }
  
  .banner-icon i {
    font-size: 1.5rem;
  }
  
  .banner-btn {
    padding: 5px 10px;
    font-size: 0.7rem;
  }
  
  .banner-title {
    font-size: 0.9rem;
  }
  
  .banner-subtitle {
    font-size: 0.65rem;
  }
}

@media (max-width: 275px) {
  .drone-banner {
    padding: 8px 0;
    margin: 4px 0;
  }
  
  .banner-container {
    padding: 0 8px;
  }
  
  .banner-content {
    gap: 6px;
  }
  
  .banner-icon i {
    font-size: 1.2rem;
  }
  
  .banner-btn {
    padding: 4px 8px;
    font-size: 0.6rem;
    border-radius: 15px;
  }
  
  .banner-btn i {
    font-size: 0.8em;
  }
  
  .banner-title {
    font-size: 0.8rem;
  }
  
  .banner-subtitle {
    font-size: 0.6rem;
  }
}
</style>