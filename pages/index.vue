<template>
  <div class="splash-page-container">
    <div class="top-bar">
      <div class="top-left">John Trocchi</div>
      <div class="top-right">Web Developer/ Entreprenuer</div>
    </div>
    <div class="drop-container">
      <img src="/profile.jpeg" alt="" class="drop">
      <button class="margin">
        <nuxt-link to='/portfolio'>Go to portfolio</nuxt-link>
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
}
</script>

<style>
.top-left,
.top-right {
  display: flex;
  height: 60px;
  margin: 20px 40px;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}

.top-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  opacity: 0;
  width: 100%;
  height: 100px;
  z-index: 999;
  animation: appear 2.5s 3s forwards;
}

.margin {
  position: absolute;
  opacity: 0;
  top: 200px;
  margin: 40px;
  animation: appear 2.5s 3s forwards;
  background-color: #ffffff;
}

.portfolio-photo {
  width: 300px;
  height: 300px;
  border-radius: 150px;
  overflow: hidden;
}

.splash-page-container {
  display: flex;
  width: 100%;
  height: 100%;
  background-image:url('https://wallpapercave.com/wp/wp6446391.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

/* Test */

.drop-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 200px;
  width: 200px;
}


.drop {
  position: absolute;
  top: -40%;
  width: 100%;
  height: 100%;
  border-radius: 100% 5% 100% 100%;
  transform: rotate(-30deg);
  margin: 0px;
  background: deepskyblue;
  animation: drip 1.8s forwards;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.drop-container:before,
.drop-container:after {
  content: '';
  position: absolute;
  top: 55%;
  right: 50%;
  transform: translate(50%) rotateX(75deg);
  border-radius: 100%;
  opacity: 0;
  width: 75%;
  height: 75%;
  border: 5px solid #ffffff;
  animation: dripple 1s ease-out 1s;
}

.drop-container:after {
  animation: dripple 1.5s ease-out 1.7s;
}

@keyframes drip {
  45% {
    top: 0;
    border-radius: 100% 5% 100% 100%;
    transform: rotate(-30deg);
  }
  100% {
    top: 0;
    transform: rotate(0deg);
    border-radius: 100%;
  }
}

@keyframes dripple {
  0% {
    width: 150px;
    height: 150px;
  }
  25% {
    opacity: 1;
  }
  100% {
    width: 500px;
    height: 500px;
    top: -20%;
    opacity: 0;
  }
}
</style>
