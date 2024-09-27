import { defineStore } from 'pinia'

export const useBookStore = defineStore('bookStore', {
  state: () => ({
    books: [],
    searchQuery: ''
  }),
  getters: {
    filteredBooks: (state) => {
      if (!state.searchQuery) return state.books
      return state.books.filter((book) =>
        book.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      )
    }
  },
  actions: {
    async fetchBooks() {
      try {
        const response = await fetch('https://run.mocky.io/v3/f5ae9987-a2cb-4e61-a644-56a5397856e1')
        const data = await response.json()
        this.books = data.books
      } catch (error) {
        console.error('Error fetching books:', error)
      }
    },
    setSearchQuery(query) {
      this.searchQuery = query
    }
  }
})
