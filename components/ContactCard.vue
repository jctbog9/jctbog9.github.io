<template>
  <div class="contact-card-container">
    <div class="project-title">{{title}}</div>
    <div class="contact-card-border">
      <img :src="image" class="contact-card">
    </div>
    <div class="CTA-options">
      <a :href="codeURL" target="_blank">
        <button>Code</button>
      </a>
      <a v-if="projectURL" :href="projectURL" target="_blank">
        <button>View Example</button>
      </a>   
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactCard',
  props: {
    title: '',
    image: '',
    codeURL: '',
    projectURL: ''
  }
}
</script>

<style>
.contact-card {
  width: 420px;
  overflow: hidden;
}

.contact-card-border {
  display: flex;
  height: 370px;
  overflow: hidden;
  align-items: center;
  margin: 20px 50px;
}

.contact-card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  margin-top: 10px;
}

.project-title {
  font-size: 20px;
  font-weight: 800px;
  text-decoration: underline;
}
</style>