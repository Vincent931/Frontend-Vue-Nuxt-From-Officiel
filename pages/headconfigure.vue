<template>
    <section>
      <div>
        <h1>Welcome to headconfigure page</h1>
      </div>
      <p>Displayed at the /headconfigure route</p>
      <p class="puseseometa">ADD TO YOUR COMPONENT or PAGE.VUE<br><br>
      <-script setup lang="ts"-><br>
      useSeoMeta({<br>
      &nbsp;&nbsp;&nbsp;title: 'Title',<br>
      &nbsp;&nbsp;&nbsp;ogTitle: 'TitleOG',<br>
      &nbsp;&nbsp;&nbsp;description: 'Descrriippttiioonn',<br>
      &nbsp;&nbsp;&nbsp;ogDescription: 'OGDescrriippttiioonn',<br>
      &nbsp;&nbsp;&nbsp;ogImage: 'https://example.com/image.png',<br>
      &nbsp;&nbsp;&nbsp;twitterCard: 'summary_large_image',<br>
      })<-/script-></p>
    </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Title',
  ogTitle: 'TitleOG',
  description: 'Descrriippttiioonn',
  ogDescription: 'OGDescrriippttiioonn',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
<style>
.puseseometa{
  width:450px;
  text-align:left;
  margin:auto;
}
</style>