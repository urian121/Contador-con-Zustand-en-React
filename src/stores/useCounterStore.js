import { create } from "zustand";

// Crear el store con Zustand
const useCounterStore = create((set) => ({
  // Estado inicial del contador
  count: 0,

  // Acción para incrementar el contador
  increment: () => set((state) => ({ count: state.count + 1 })),

  // Acción para decrementar el contador, solo si el valor es mayor a 0
  decrement: () =>
    set((state) => {
      if (state.count > 0) {
        return { count: state.count - 1 };
      } else {
        return { count: state.count }; // No cambia si count es 0
      }
    }),

  // Acción para reiniciar el contador
  reset: () => set({ count: 0 }),
}));

export default useCounterStore;
