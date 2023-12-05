<script setup>
const props = defineProps({
  content: Object,
})

onMounted(() => {})
</script>

<template>
  <div class="news-card">
    <div>
      <h3>{{ content.title }}</h3>
      <p>
        {{ content.content }}
      </p>
    </div>
    <div>
      <Button class="btn">Enterate</Button>
    </div>
  </div>
</template>
