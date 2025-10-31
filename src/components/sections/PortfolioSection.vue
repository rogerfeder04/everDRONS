<script setup>
import { ref, onMounted } from 'vue';

// Estado reactivo para la galería
const selectedFilter = ref('todos');
const showModal = ref(false);
const selectedImage = ref(null);
const currentSlides = ref({});

// Datos actualizados con múltiples imágenes por categoría
const portfolioItems = ref([
    {
    id: 7,
    title: 'Emergencias y Monitoreo',
    category: 'inspeccion',
    images: [
      '/assets/catastrofe.jpg',
      '/assets/llu.jpg',
      '/assets/cata.jpg'
    ],
    description: 'monitoreo con cámaras especiales pueden usarse para buscar personas o para evaluar los daños tras un desastre natural.'
  },
  {
    id: 1,
    title: 'Mapeo Aéreo de Terrenos',
    category: 'terrenos',
    images: [
      '/assets/dron2.jpg',
      '/assets/lote.jpg',
      '/assets/barichara.jpg'
    ],
    description: 'Capturamos vistas únicas de lotes y propiedades con drones DJI — ideales para ventas, publicidad y desarrollo inmobiliario.'
  },
  {
    id: 2,
    title: 'Fotografía Aérea de Bodas',
    category: 'bodas',
    images: [
      '/assets/fotobodas.jpg',
      '/assets/fotobodas22.jpg',
      '/assets/fotobodas33.jpg'
    ],
    description: 'Captura única del momento especial desde perspectivas aéreas cinematográficas'
  },
  {
    id: 3,
    title: 'Inspección y seguimiento con Drones',
    category: 'inspeccion',
    images: [
      '/assets/inspeccion.jpg',
      '/assets/cabañas.jpg',
      '/assets/dron2.jpg'
    ],
    description: 'Inspección técnica aérea de infraestructura industrial y zonas rurales mediante drones equipados con sensores y cámaras de alta resolución. Ideal para detectar fallas estructurales, puntos de calor, o fugas energéticas. Además, permite realizar búsquedas eficientes de personas o animales en terrenos amplios o de difícil acceso, precisa y en tiempo real.'
  },
  {
    id: 4,
    title: 'Eventos Corporativos Aéreos',
    category: 'eventos',
    images: [
      '/assets/corpo.jpg',
      '/assets/aereo.jpg',
      '/assets/fotobodas.jpg'
    ],
    description: 'Cobertura aérea profesional completa de eventos empresariales'
  },
  {
    id: 5,
    title: 'Agricultura de Precisión',
    category: 'terrenos',
    images: [
      '/assets/lote.jpg',
      '/assets/casa.jpg',
      '/assets/campo.jpg'
    ],
    description: 'Análisis topográfico y monitoreo de cultivos con drones especializados'
  },
  {
    id: 6,
    title: 'Celebraciones Aéreas',
    category: 'eventos',
    images: [
      '/assets/aereo.jpg',
      '/assets/corpo.jpg',
      '/assets/fotobodas.jpg'
    ],
    description: 'Momentos únicos capturados desde las alturas en celebraciones especiales'
  },

  {
    id: 8,
    title: 'Paisajes Naturales',
    category: 'terrenos',
    images: [
      '/assets/santander.jpg',
      '/assets/barichara.jpg',
      '/assets/palmas.jpg'
    ],
    description: 'Captura de paisajes naturales para turismo y documentación'
  }
]);

// Filtrado de items
const filteredItems = ref([]);

const filterItems = (category) => {
  selectedFilter.value = category;
  if (category === 'todos') {
    filteredItems.value = portfolioItems.value;
  } else {
    filteredItems.value = portfolioItems.value.filter(item => item.category === category);
  }
};

// Funciones del carousel
const nextSlide = (itemId) => {
  const item = portfolioItems.value.find(p => p.id === itemId);
  if (!item) return;
  
  const currentIndex = currentSlides.value[itemId] || 0;
  const nextIndex = (currentIndex + 1) % item.images.length;
  currentSlides.value[itemId] = nextIndex;
};

const prevSlide = (itemId) => {
  const item = portfolioItems.value.find(p => p.id === itemId);
  if (!item) return;
  
  const currentIndex = currentSlides.value[itemId] || 0;
  const prevIndex = currentIndex === 0 ? item.images.length - 1 : currentIndex - 1;
  currentSlides.value[itemId] = prevIndex;
};

const goToSlide = (itemId, slideIndex) => {
  currentSlides.value[itemId] = slideIndex;
};

const openModal = (item) => {
  selectedImage.value = item;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedImage.value = null;
};

onMounted(() => {
  filterItems('todos');
  // Inicializar slides en 0 para todos los items
  portfolioItems.value.forEach(item => {
    currentSlides.value[item.id] = 0;
  });
});
</script>

<template>
  <section id="portfolio" class="portfolio-section">
    <div class="container">
      <h2 class="section-title">Nuestro Portafolio</h2>
      
      <!-- Filtros -->
      <div class="filter-buttons">
        <button 
          :class="{ active: selectedFilter === 'todos' }" 
          @click="filterItems('todos')"
        >
          Todos
        </button>
        <button 
          :class="{ active: selectedFilter === 'bodas' }" 
          @click="filterItems('bodas')"
        >
          Bodas
        </button>
        <button 
          :class="{ active: selectedFilter === 'terrenos' }" 
          @click="filterItems('terrenos')"
        >
          Terrenos
        </button>
        <button 
          :class="{ active: selectedFilter === 'eventos' }" 
          @click="filterItems('eventos')"
        >
          Eventos
        </button>
        <button 
          :class="{ active: selectedFilter === 'inspeccion' }" 
          @click="filterItems('inspeccion')"
        >
          Inspección
        </button>
      </div>

      <!-- Grid de imágenes con carousel -->
      <div class="portfolio-grid">
        <div 
          v-for="item in filteredItems" 
          :key="item.id" 
          class="portfolio-item"
        >
          <!-- Carousel Container -->
          <div class="carousel-container">
            <div class="carousel-wrapper">
              <div 
                class="carousel-slide"
                v-for="(image, index) in item.images"
                :key="index"
                :class="{ active: (currentSlides[item.id] || 0) === index }"
                @click="openModal(item)"
              >
                <img :src="image" :alt="`${item.title} - Imagen ${index + 1}`" />
              </div>
            </div>
            
            <!-- Controles del carousel -->
            <div class="carousel-controls">
              <button 
                class="carousel-btn prev" 
                @click.stop="prevSlide(item.id)"
                v-if="item.images.length > 1"
              >
                <i class="fas fa-chevron-left"></i>
              </button>
              <button 
                class="carousel-btn next" 
                @click.stop="nextSlide(item.id)"
                v-if="item.images.length > 1"
              >
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
            
            <!-- Indicadores -->
            <div class="carousel-indicators" v-if="item.images.length > 1">
              <button
                v-for="(image, index) in item.images"
                :key="index"
                :class="{ active: (currentSlides[item.id] || 0) === index }"
                @click.stop="goToSlide(item.id, index)"
              ></button>
            </div>
          </div>
          
          <div class="portfolio-overlay">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
            <div class="image-counter" v-if="item.images.length > 1">
              {{ (currentSlides[item.id] || 0) + 1 }} / {{ item.images.length }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal para imágenes con carousel -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">&times;</button>
        
        <div class="modal-carousel">
          <div class="modal-carousel-wrapper">
            <div 
              class="modal-carousel-slide"
              v-for="(image, index) in selectedImage?.images"
              :key="index"
              :class="{ active: (currentSlides[selectedImage?.id] || 0) === index }"
            >
              <img :src="image" :alt="`${selectedImage?.title} - Imagen ${index + 1}`" />
            </div>
          </div>
          
          <div class="modal-carousel-controls" v-if="selectedImage?.images.length > 1">
            <button 
              class="modal-carousel-btn prev" 
              @click="prevSlide(selectedImage.id)"
            >
              <i class="fas fa-chevron-left"></i>
            </button>
            <button 
              class="modal-carousel-btn next" 
              @click="nextSlide(selectedImage.id)"
            >
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        
        <div class="modal-info">
          <h3>{{ selectedImage?.title }}</h3>
          <p>{{ selectedImage?.description }}</p>
          <div class="modal-image-counter" v-if="selectedImage?.images.length > 1">
            Imagen {{ (currentSlides[selectedImage?.id] || 0) + 1 }} de {{ selectedImage?.images.length }}
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

/* Sección de Portafolio */
.portfolio-section {
  padding: 120px 0;
  background: #0A0A0A;
  position: relative;
  color: #FFFFFF;
}

.portfolio-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at center, rgba(0, 191, 255, 0.1) 0%, transparent 70%);
  z-index: 0;
}

.portfolio-section .container {
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

.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 70px;
  flex-wrap: wrap;
  padding: 0 20px;
}

.filter-buttons button {
  background: transparent;
  color: #FFFFFF;
  border: 2px solid #00BFFF;
  padding: 15px 30px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
}

.filter-buttons button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #00BFFF, #FFD700);
  transition: left 0.3s ease;
  z-index: -1;
}

.filter-buttons button:hover::before,
.filter-buttons button.active::before {
  left: 0;
}

.filter-buttons button:hover,
.filter-buttons button.active {
  color: #0A0A0A;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 191, 255, 0.4);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  padding: 0 20px;
}

.portfolio-item {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 4/3;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.portfolio-item:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 191, 255, 0.3);
}

/* Carousel Styles */
.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.carousel-slide.active {
  opacity: 1;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease;
  filter: brightness(0.8);
}

.portfolio-item:hover .carousel-slide img {
  transform: scale(1.1);
  filter: brightness(1.1) saturate(1.3);
}

/* Controles del carousel */
.carousel-controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 10;
}

.portfolio-item:hover .carousel-controls {
  opacity: 1;
}

.carousel-btn {
  background: rgba(0, 191, 255, 0.8);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.carousel-btn:hover {
  background: rgba(0, 191, 255, 1);
  transform: scale(1.1);
}

.carousel-btn i {
  font-size: 14px;
}

/* Indicadores */
.carousel-indicators {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 10;
}

.portfolio-item:hover .carousel-indicators {
  opacity: 1;
}

.carousel-indicators button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-indicators button.active {
  background: #00BFFF;
  transform: scale(1.2);
}

.carousel-indicators button:hover {
  background: #FFD700;
}

.portfolio-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  color: #FFFFFF;
  padding: 40px 25px 25px;
  transform: translateY(100%);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 5;
}

.portfolio-item:hover .portfolio-overlay {
  transform: translateY(0);
}

.portfolio-overlay h4 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  margin-bottom: 12px;
  color: #FFD700;
  font-size: 1.3rem;
}

.portfolio-overlay p {
  opacity: 0.9;
  line-height: 1.5;
  font-size: 0.95rem;
  margin-bottom: 10px;
}

.image-counter {
  font-size: 0.8rem;
  color: #00BFFF;
  font-weight: 600;
  text-align: right;
}

/* Modal Carousel Styles */
.modal-carousel {
  position: relative;
  width: 100%;
  max-height: 60vh;
  overflow: hidden;
  border-radius: 15px 15px 0 0;
}

.modal-carousel-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.modal-carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.modal-carousel-slide.active {
  opacity: 1;
}

.modal-carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #000;
}

.modal-carousel-controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 10;
}

.modal-carousel-btn {
  background: rgba(0, 191, 255, 0.9);
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.modal-carousel-btn:hover {
  background: rgba(0, 191, 255, 1);
  transform: scale(1.1);
}

.modal-carousel-btn i {
  font-size: 18px;
}

.modal-info {
  padding: 20px;
  color: #FFFFFF;
}

.modal-info h3 {
  font-family: 'Montserrat', sans-serif;
  color: #FFD700;
  margin-bottom: 10px;
}

.modal-image-counter {
  margin-top: 15px;
  font-size: 0.9rem;
  color: #00BFFF;
  font-weight: 600;
  text-align: center;
}

/* Responsividad */
@media (max-width: 968px) {
  .portfolio-section {
    padding: 80px 0;
  }
  
  .filter-buttons {
    gap: 15px;
  }
  
  .filter-buttons button {
    padding: 12px 25px;
    font-size: 0.9rem;
  }
  
  .portfolio-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: clamp(2rem, 6vw, 2.5rem);
    margin-bottom: 50px;
  }
  
  .portfolio-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  
  .filter-buttons {
    gap: 10px;
    padding: 0 10px;
  }
  
  .filter-buttons button {
    padding: 10px 20px;
    font-size: 0.85rem;
  }
  
  .carousel-btn {
    width: 35px;
    height: 35px;
  }
  
  .carousel-btn i {
    font-size: 12px;
  }
  
  .carousel-indicators button {
    width: 8px;
    height: 8px;
  }
  
  .modal-carousel-btn {
    width: 45px;
    height: 45px;
  }
  
  .modal-carousel-btn i {
    font-size: 16px;
  }
}

@media (max-width: 576px) {
  .portfolio-section {
    padding: 60px 0;
  }
  
  .portfolio-grid {
    gap: 20px;
  }
  
  .portfolio-item {
    border-radius: 15px;
  }
  
  .filter-buttons {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  
  .filter-buttons button {
    width: 200px;
    padding: 8px 15px;
  }
  
  .carousel-controls {
    padding: 0 10px;
  }
  
  .carousel-btn {
    width: 30px;
    height: 30px;
  }
  
  .carousel-btn i {
    font-size: 10px;
  }
  
  .carousel-indicators {
    bottom: 10px;
    gap: 6px;
  }
  
  .carousel-indicators button {
    width: 6px;
    height: 6px;
  }
}
</style>