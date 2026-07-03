import { defineStore } from 'pinia'
import api from '@/api/api'

export const useCompanyStore = defineStore('company', {
  state: () => ({
    name: null,
    token: null,
    data: null,
    loading: false,
    error: null,
  }),
  actions: {
    setCompany(name) {
      this.name = name
    },
    setToken(token) {
      this.token = token
    },
    async fetchData() {
      if (!this.token) return
      this.loading = true
      this.error = null
      try {
        const response = await api.get('companies/me/', {
          headers: { Authorization: `Bearer ${this.token}` },
        })
        this.data = response.data
        this.name = response.data.trade_name || response.data.name
      } catch (error) {
        this.error = error.message
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    clearCompany() {
      this.name = null
      this.token = null
      this.data = null
    },
  },
})
