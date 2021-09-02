<template>
  <footer class="footer">
    <div class="container">
      <span v-html="settings.footer"/>
      <nav class="social-icons">
        <a rel="nofollow noreferrer noopener" target="_blank" href="https://www.github.com/jezemery/">Github</a>
        <a rel="nofollow noreferrer noopener" target="_blank" href="https://www.twitter.com/sausajez/">Twitter</a>
        <a rel="nofollow noreferrer noopener" target="_blank" href="https://stackoverflow.com/users/1970773/jez-emery">StackOverflow</a>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json")
    }
  }
}
</script>

<style scoped>
.footer {
  font-size: 0.8rem;
  padding: 6rem 0;
}

.footer .container {
  display: flex;
  justify-content: space-between;
}

.social-icons a {
  padding: 10px 20px;
}
</style>
