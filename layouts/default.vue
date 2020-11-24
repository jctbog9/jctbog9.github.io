<template>
  <div>
    <div class="layout">
      <div v-if="!isWelcomePage">
        <sidebar/>
        <div class="content-section">
          <Nuxt />
        </div>
      </div>
      <div v-else class="page">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
export default {
  components: { Sidebar },
  computed: {
    isWelcomePage() {
      return this.$route.name === 'index'
    }
  }
}
</script>

<style>
.page {
  width: 100%;
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.layout {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100%;
}

.content-section {
  margin-left: 260px;
  width: 100%;
}

.page-title {
  font-size: 28px;
  font-weight: 800;
  text-align: center;
}

button {
  padding: 10px 20px;
  border-radius: 2px;
  border: none;
  background-color: #f08ce2;
}

button:hover {
  cursor: pointer;
  background-color: #aaa8a8;
}
</style>
