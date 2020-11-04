<template>
  <div>
    <div class="layout">
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
      <div class="content-section">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<style>
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
}

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
  background-color: #e069d0;
}
</style>
