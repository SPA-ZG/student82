<template>
  <input type="text" v-model="searchQuery" placeholder="Search books..." />
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    }
  },
  watch: {
    searchQuery(newQuery) {
      this.$emit('updateSearch', newQuery)
    }
  }
}
</script>
