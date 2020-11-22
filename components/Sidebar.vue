<template>
  <div class="sidebar">
    <div>
      <div class="profile-image-container">
        <nuxt-link to="/profile">
          <img class="profile-image" src="/profile.jpeg">
        </nuxt-link>
        <h2>John Trocchi</h2>
      </div>
      <nuxt-link to="/profile" class="sidebar-link">
        <div>
          <font-awesome-icon icon="user-circle"/> Profile
        </div>
      </nuxt-link>
      <nuxt-link to="/portfolio" class="sidebar-link">
        <div>
          <font-awesome-icon icon="book"/> Portfolio
        </div>
      </nuxt-link>
      <nuxt-link to="/resume" class="sidebar-link">
        <div>
          <font-awesome-icon icon="file"/> Resume
        </div>
      </nuxt-link>
    </div>
    <div class="sidebar-link">
      <div>
        <font-awesome-icon icon="envelope"/> Contact
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style>
.sidebar {
  position: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  background-color: #2c8bca;
  font-size: 22px;
  color: #000000;
}

.profile-image:hover {
  opacity: 0.9;
  cursor: pointer;
}
</style>