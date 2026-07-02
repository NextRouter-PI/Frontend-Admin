import { defineStore } from 'pinia'

export const useCompanyStore = defineStore('company', {
  state: () => ({
    name: null,
  }),
  actions: {
    setCompany(name) {
      this.name = name
    },
    clearCompany() {
      this.name = null
    },
  },
})
