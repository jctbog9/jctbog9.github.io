<template>
  <div>
    <div class="layout">
      <div class="sidebar">
        <div>
          John Trocchi - Web Developer
        </div>
        <div class="sidebar-link" v-on:click="changeLink('Sidebar 1')">
          Sidebar 1
        </div>
        <div class="sidebar-link" v-on:click="changeLink('Sidebar 2')">
          Sidebar 2
        </div>
        <div class="sidebar-link" v-on:click="changeLink('Sidebar 3')">
          Sidebar 3
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
  background-color: #509ACD;
}

.sidebar-link {
  display: flex;
  flex-direction: column;
  height: 65px;
  width: 100%;
  padding: 10px;
  justify-content: center;
}

.sidebar-link:hover {
  cursor: pointer;
  background-color: #3a81b1;
}
</style>
