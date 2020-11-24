<template>
  <div class="splash-page-container">
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
.margin {
  position: absolute;
  opacity: 0;
  top: 200px;
  margin: 40px;
  animation: appear 3s 3.5s forwards;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #6db0dd;
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
