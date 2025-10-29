<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Inicializar animaciones AOS si está disponible
  if (typeof window !== 'undefined' && window.AOS) {
    window.AOS.refresh();
  }
});
</script>

<template>
  <section class="services-section">
    <div class="container">
      <h2 class="section-title">Nuestros Servicios</h2>
    
      <div class="services-grid">
        <div class="service-card" data-aos="fade-up" data-aos-delay="100">
          <div class="service-icon">
            <i class="fas fa-map-marked-alt"></i>
          </div>
          <img src="/assets/dronia.jpg" alt="Mapeo con drones" class="service-image">
          <h3>Fotografía de Lotes y Terrenos</h3>
          <p>Fotografía aérea profesional con drones DJI para capturar vistas impactantes de terrenos, fincas y proyectos inmobiliarios. Ideal para destacar propiedades y potenciar tus ventas con imágenes únicas y de alta calidad.</p>
          <div class="service-features">
            <span class="feature-tag">• Mapeo 3D</span>
            <span class="feature-tag">• Medición precisa</span>
            <span class="feature-tag">• 4K, HD</span>
          </div>
        </div>

        <div class="service-card" data-aos="fade-up" data-aos-delay="200">
          <div class="service-icon">
            <i class="fas fa-heart"></i>
          </div>
          <img src="/assets/fotobodas33.jpg" alt="Bodas con drones" class="service-image">
          <h3>Fotografía de Bodas y Eventos</h3>
          <p>Captura momentos únicos desde perspectivas aéreas cinematográficas que harán inolvidable tu día especial.</p>
          <div class="service-features">
            <span class="feature-tag">• Video 4K</span>
            <span class="feature-tag">• Fotos HD</span>
            <span class="feature-tag">• Edición profesional</span>
          </div>
        </div>

        <div class="service-card" data-aos="fade-up" data-aos-delay="300">
          <div class="service-icon">
            <i class="fas fa-video"></i>
          </div>
          <img src="/assets/aereo11.jpg" alt="Filmación con drones" class="service-image">
          <h3>Filmación Aérea Profesional</h3>
          <p>Videos cinematográficos en 4K para publicidad, documentales y producciones audiovisuales de alto nivel.</p>
          <div class="service-features">
            <span class="feature-tag">• Cine 4K</span>
            <span class="feature-tag">• Estabilización</span>
            <span class="feature-tag">• Color grading</span>
          </div>
        </div>

        <div class="service-card" data-aos="fade-up" data-aos-delay="400">
          <div class="service-icon">
            <i class="fas fa-search"></i>
          </div>
          <img src="/assets/inspecciond.jpg" alt="Inspección con drones" class="service-image">
          <h3>Inspección Técnica con Drones</h3>
          <p>Inspecciones seguras y precisas de infraestructuras, torres, tejados y estructuras elevadas con sensores especializados.</p>
          <div class="service-features">
            <span class="feature-tag">• Cámara térmica</span>
            <span class="feature-tag">• Zoom 30x</span>
            <span class="feature-tag">• Informes técnicos</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@300;400;600&display=swap');

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Sección de Servicios */
.services-section {
  padding: 120px 0;
  background: linear-gradient(135deg, #0A0A0A 0%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
  color: #FFFFFF;
}

.services-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23ffffff" stroke-width="0.1" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>') repeat;
  opacity: 0.3;
  z-index: 0;
}

.container {
  position: relative;
  z-index: 1;
}

.section-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: clamp(2.5rem, 5vw, 4rem);
  text-align: center;
  margin-bottom: 80px;
  color: #00BFFF;
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 50px;
  margin-top: 80px;
  padding: 0 20px;
}

.service-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 25px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 191, 255, 0.2);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 191, 255, 0.1), transparent);
  transition: left 0.6s ease-in-out;
}

.service-card:hover::before {
  left: 100%;
}

.service-card:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 191, 255, 0.3);
  border-color: #00BFFF;
}

.service-icon {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #00BFFF, #FFD700);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  font-size: 2.5rem;
  color: #0A0A0A;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 191, 255, 0.4);
}

.service-card:hover .service-icon {
  transform: rotateY(360deg) scale(1.1);
  box-shadow: 0 15px 40px rgba(255, 215, 0, 0.5);
}

.service-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 20px;
  margin: 25px 0;
  transition: all 0.3s ease;
  filter: brightness(0.9);
}

.service-card:hover .service-image {
  filter: brightness(1.1) saturate(1.2);
  transform: scale(1.05);
}

.service-card h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #FFD700;
  transition: color 0.3s ease;
}

.service-card:hover h3 {
  color: #00BFFF;
}

.service-card p {
  opacity: 0.9;
  line-height: 1.7;
  font-size: 1.1rem;
  margin-bottom: 25px;
}

.service-features {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
}

.feature-tag {
  background: rgba(0, 191, 255, 0.1);
  color: #00BFFF;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(0, 191, 255, 0.3);
  transition: all 0.3s ease;
}

.service-card:hover .feature-tag {
  background: rgba(255, 215, 0, 0.2);
  color: #FFD700;
  border-color: #FFD700;
}

/* Responsividad */
@media (max-width: 968px) {
  .services-section {
    padding: 80px 0;
  }
  
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 35px;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: clamp(2rem, 6vw, 2.5rem);
    margin-bottom: 50px;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 0 10px;
  }
  
  .service-card {
    padding: 30px 25px;
  }
  
  .service-icon {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }
  
  .service-image {
    height: 180px;
  }
  
  .service-card h3 {
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .services-section {
    padding: 60px 0;
  }
  
  .service-card {
    padding: 25px 20px;
  }
  
  .service-icon {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
  
  .service-image {
    height: 160px;
    margin: 20px 0;
  }
  
  .service-card h3 {
    font-size: 1.3rem;
  }
  
  .service-card p {
    font-size: 1rem;
  }
}
</style>