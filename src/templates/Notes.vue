<template>
  <Layout>
    <div class="note">
      <div class="container note-container">
        <div class="note-header">
          <h1 v-html="$page.post.title" class="note-title"/>
          <div class="note-meta">
            <div class="note-author">
              <span class="label">Author</span>
              <span class="author-name" v-text="$page.post.author"/>
            </div>
            <div class="note-date">
              <span class="label">Date</span>
              <div v-text="$page.post.date"/>
            </div>
            <div class="note-time">
              <span class="label">Time</span>
              <span>{{ $page.post.timeToRead }} min read</span>
            </div>
          </div>
        </div>
        <NoteContent :content="$page.post.content"/>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Notes ($path: String!) {
post: notes (path: $path) {
title
author
date (format: "D. MMM YYYY")
timeToRead
content
}
}
</page-query>

<script>
import NoteContent from "@/components/NoteContent"

export default {
  components: {
    NoteContent
  },
  metaInfo() {

    return {
      title: this.$page.post.title
    }
  }
}
</script>

<style scoped>
.note-container {
  max-width: 840px;
}

.note-header {
  padding: 2rem 0 4rem 0;
}

.note-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}

.note-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}

.note-meta > div {
  margin-right: 4rem;
}

.note-meta > div:last-of-type {
  margin: 0;
}
</style>
