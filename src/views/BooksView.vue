<template>
  <div class="main-container">
    <AppNavigation />
    <h1>Books</h1>
    <BookSearch :value="bookStore.searchQuery" @updateSearch="handleSearch" />
    <div class="books-container">
      <BookCard v-for="book in filteredBooks" :key="book.title" :book="book" />
    </div>
  </div>
</template>

<script>
import AppNavigation from '@/components/AppNavigation.vue'
import BookCard from '@/components/BookCard.vue'
import BookSearch from '@/components/BookSearch.vue'
import { useBookStore } from '@/store/bookStore'

export default {
  name: 'BooksView',
  components: {
    AppNavigation,
    BookCard,
    BookSearch
  },
  computed: {
    bookStore() {
      return useBookStore()
    },
    filteredBooks() {
      return this.bookStore.filteredBooks
    }
  },
  methods: {
    handleSearch(query) {
      this.bookStore.setSearchQuery(query)
    }
  },
  mounted() {
    this.bookStore.fetchBooks()
  }
}
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  margin: auto;
}
</style>
