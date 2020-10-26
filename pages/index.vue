<template>
  <div>
    <div class="layout">
      <div class="sidebar">
        <div class="profile-image-container">
          <img class="profile-image" src="/profile.jpeg" v-on:click="changeLink('Profile')">
          <h2>John Trocchi</h2>
        </div>
        <div id="Profile" class="sidebar-link" v-on:click="changeLink('Profile')">
          <div>
            <font-awesome-icon icon="user-circle"/> Profile
          </div>
        </div>
        <div id="Portfolio" class="sidebar-link" v-on:click="changeLink('Portfolio')">
          <div>
            <font-awesome-icon icon="book"/> Portfolio
          </div>
        </div>
        <div id="Resume" class="sidebar-link" v-on:click="changeLink('Resume')">
          <div>
            <font-awesome-icon icon="file"/> Resume
          </div>
        </div>
      </div>
      <div>
        <div>
          {{content}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data() {
    return {
      activeLink: 'Profile'
    }
  },
  computed: {
    ...mapState(['content']) 
  },
  methods: {
    ...mapMutations(['changeLink'])
  }
}
</script>

<style>
.layout {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}

.sidebar {
  display: flex;
  flex-direction: column;
  width: 260px;
  background-color: #6db0dd;
}

.sidebar-link {
  display: flex;
  flex-direction: column;
  height: 65px;
  width: 100%;
  padding: 20px;
  justify-content: center;
}

.sidebar-link:hover {
  cursor: pointer;
  background-color: #509ACD;
}

.profile-image {
  height: 120px;
  width: 120px;
  border-radius: 60px;
  overflow: hidden;
}

.profile-image-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.profile-image:hover {
  opacity: 0.9;
  cursor: pointer;
}
</style>
