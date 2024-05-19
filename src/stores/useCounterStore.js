import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () =>
    set((state) => {
      if (state.count > 0) {
        return { count: state.count - 1 };
      } else {
        return { count: state.count }; // No cambia si count es 0
      }
    }),
  reset: () => set({ count: 0 }),
  autoIncrement: (interval) => {
    let intervalId = setInterval(() => {
      set((state) => ({ count: state.count + 1 }));
    }, interval);

    return () => clearInterval(intervalId);
  },
}));

export default useCounterStore;
