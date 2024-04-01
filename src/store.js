import { defineStore } from 'pinia';

export const useDataStore = defineStore({
  id: 'data',
  state: () => ({
    // Define your state variables here
    data: null,
  }),
  actions: {
    // Define your actions to manipulate the state here
    setData(data) {
      this.data = data;
    },
    clearData() {
      this.data = null;
    },
  },
});
