<template>
  <Layout>
    <g-link
        :to="item.node.path"
        v-for="item in $page.notes.edges"
        :key="item.node.id"
        class="note-post"
    >
      <div class="container note">
        <h2 class="note-title">{{ item.node.title }}</h2>
        <p class="note-excerpt">{{ item.node.excerpt }}</p>
      </div>
    </g-link>
  </Layout>
</template>
<page-query>
query Note {
notes: allNotes {
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

<script>
export default {}
</script>


<style scoped>
.container.note {
  max-width: 720px;
}

.note-post {
  display: block;
  padding: 2rem 0;
  text-decoration: none;
  transition: background 0.5s ease;
}

.note-post > * {
  transition: transform 0.5s ease;
}

.note-post:hover {
  background-color: var(--color-base-1);
}

.note-post:hover > * {
  transform: translateX(4rem);
}

.note-post h1,
.note-post h2 {
  margin: 0;
  padding: 0;
}

.note-title {
  font-size: 2rem;
  color: var(--color-contrast);
}

.note-excerpt {
  color: var(--color-contrast-1);
}

@media (min-width: 560px) {
  .note-post {
    padding: 3rem 0;
  }
}

@media (min-width: 860px) {
  .note-post {
    padding: 5rem 0;
  }
}
</style>
