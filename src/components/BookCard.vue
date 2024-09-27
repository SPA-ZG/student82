<template>
  <div class="book-card">
    <img :src="book.image" :alt="book.title" />
    <div>
      <h2>{{ book.title }}</h2>
      <p>{{ book.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: {
    book: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.book-card {
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  max-width: 70vw;
  min-width: 370px;
}
.book-card img {
  max-height: 300px;
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-right: 20px;
}
</style>
