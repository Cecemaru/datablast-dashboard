import { defineStore } from 'pinia'
import axios from 'axios'
const base = import.meta.env.VITE_BASE_URL

interface MyStoreState {
  response: {
    'Content-Length': string
    'Content-Type': string
    freeform: string
  }
  isLoading: boolean
}

export const useStore = defineStore('credential', {
  state: (): MyStoreState => {
    const storedData = localStorage.getItem('allData')
    const initialState = storedData
      ? JSON.parse(storedData)
      : {
          'Content-Length': '',
          'Content-Type': '',
          freeform: ''
        }

    return {
      response: initialState,
      isLoading: false
    }
  },
  actions: {
    async freeFormChange(value: string) {
      try {
        this.isLoading = true

        const { data } = await axios.post(`${base}/response-headers?freeform=${value}`)

        this.response = data

        localStorage.setItem('allData', JSON.stringify(data))

        this.isLoading = false
      } catch (error) {
        console.error('Wrong fetch error', error)
      }
    }
  }
})
