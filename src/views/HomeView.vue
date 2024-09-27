<script>
import AppNavigation from '@/components/AppNavigation.vue'

export default {
  name: 'HomeView',
  components: {
    AppNavigation
  }
}
</script>

<template>
  <div class="main-container">
    <AppNavigation />
    <div>
      <h1>Welcome to the World of Terry Pratchett</h1>
      <p>
        Sir Terry Pratchett was a British author, best known for his humorous and satirical fantasy
        series "Discworld". Born in 1948, Pratchett became one of the UK's best-selling authors,
        with his works translated into numerous languages worldwide. His unique style of writing,
        which combined sharp satire with fantastical narratives, garnered a wide fanbase and
        established him as a key voice in modern fantasy.
      </p>
      <img
        src="https://media.npr.org/assets/img/2015/03/12/prat_9780385538305_jkt_ap1_r2_wide-cc6aa7afaad0a21e0ae4d25eb1f028a42817e309-s1100-c50.jpg"
        alt="Terry Prachett"
      />
      <p>
        "Discworld" is a series set in a fictional, flat world resting on the backs of four
        elephants, which in turn stand on the back of a gigantic turtle. This fantastical world
        serves as the stage for Pratchett's satire on human society, politics, religion, and
        literature. Characterized by unusual and compelling characters, from wizards and witches to
        a death who speaks in ALL CAPS, Discworld offers a rich tapestry of stories that entertain,
        provoke, and inspire readers of all ages.
      </p>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  margin: auto;
  max-width: 70vw;
  min-width: 370px;
}

.main-container img {
  max-width: 60%;
  height: auto;
  margin: 20px 0;
}
</style>
