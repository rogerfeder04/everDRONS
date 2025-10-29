import { defineStore } from "pinia";
import { ref } from "vue";

export const useStoreUsuarios = defineStore("usuarios", () => {
  const token = ref("");
  const usuario = ref(null);
  const rol = ref("");

  const setToken = (newToken) => {
    token.value = newToken;
  };

  const setUsuario = (newUsuario) => {
    usuario.value = newUsuario;
    if (newUsuario) {
      rol.value = newUsuario.rol || "";
    }
  };

  const logout = () => {
    token.value = "";
    usuario.value = null;
    rol.value = "";
  };

  const login = async (credentials) => {
    // Simulación de login para el proyecto de drones
    try {
      // En un proyecto real, aquí harías la petición a tu API
      console.log("Login attempt:", credentials);
      
      // Simulación de respuesta exitosa
      const mockUser = {
        id: 1,
        nombre: "Usuario Demo",
        email: credentials.email,
        rol: "administrador"
      };
      
      const mockToken = "demo-token-" + Date.now();
      
      setToken(mockToken);
      setUsuario(mockUser);
      
      return { success: true, user: mockUser, token: mockToken };
    } catch (error) {
      console.error("Error en login:", error);
      return { success: false, error: "Error de autenticación" };
    }
  };

  return {
    token,
    usuario,
    rol,
    setToken,
    setUsuario,
    logout,
    login
  };
}, {
  persist: true // Permite persistir el estado en localStorage
});