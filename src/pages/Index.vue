<template>
  <Layout>
    <div class="container">
      <Hero/>
      <LatestJournals :journals="$page.posts.edges"/>
    </div>
  </Layout>
</template>

<script>
import Hero from "@/components/Hero"
import LatestJournals from "../components/LatestJournals";

export default {
  components: {
    Hero,
    LatestJournals
  }
}
</script>
<page-query>
query Journal {
posts: allJournalPost(limit:3) {
edges {
node {
id
path
title
excerpt
}
}
}
}
</page-query>