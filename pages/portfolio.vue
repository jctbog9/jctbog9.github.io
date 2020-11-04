<template>
  <div>
    <div class="page-title">
      Portfolio
    </div>
    <div class="section-title">
      Featured Projects
    </div>
    <div class="project-card-section">
      <contact-card 
        title="Pizza Roma"
        :image="images[0]"
      />
      <contact-card 
        title="Chess"
        :image="images[1]"
      />
    </div>
    <div class="section-title">
      Other Projects
    </div>
    <div class="project-card-section">
      <contact-card 
        title="Calendar Application"
        :image="images[2]"
      />
    </div>
  </div>
</template>

<script>
import ContactCard from '../components/ContactCard'
import PizzaRoma from '../static/roma_preview.png'
import Chess from '../static/chess.png'
import Calendar from '../static/calendar.png'

export default {
  components: { ContactCard },
  data() {
    return {
      images: [ PizzaRoma, Chess, Calendar ]
    }
  }
}
</script>

<style>
.page-title {
  display: flex;
  justify-content: center;
  height: 60px;
  align-items: center;
  background-color: #87c9f5;
}

.project-card-section {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
}

.section-title {
  display: flex;
  justify-content: center;
  height: 40px;
  background-color: #cddfe9;
  font-size: 22px;
  font-weight: 650;
  align-items: center;
}
</style>
