<template>
  <div class="resume">
    <embed src="resume.pdf" width="800px" height="1150px" />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
}
</script>

<style>
.resume {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #515659;
}
</style>
