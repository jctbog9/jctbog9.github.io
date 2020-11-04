<template>
  <div class="contact-card-container">
    <img :src="image" class="contact-card">
    {{title}}
    <div class="CTA-options">
      <button>Code</button>
      <button>View Example</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactCard',
  props: {
    title: '',
    image: ''
  }
}
</script>

<style>
.contact-card {
  width: 420px;
  margin: 50px;
  border: 1px solid #000000;
  overflow: hidden;
}

.contact-card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}
</style>