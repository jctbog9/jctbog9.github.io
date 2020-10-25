<template>
  <div>
    <div class="layout">
      <div class="sidebar">
        <div>
          John Trocchi - Web Developer
        </div>
        <div class="sidebar-link">
          Sidebar
        </div>
        <div class="sidebar-link">
          Sidebar
        </div>
        <div class="sidebar-link">
          Sidebar
        </div>
      </div>
      <div>
        This is the layout
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
