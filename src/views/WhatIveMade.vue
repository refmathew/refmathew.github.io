<template>
  <div class="page page--what-ive-made" v-show="pageTitle === 'What I\'ve Made'">
    <custom-section class="section--works" :isLastCustomSection="false" section-heading="Works"
      :showcase-items="this.$static.works.edges" showcase-item-type="work" />
    <custom-section class="section--projects" :isLastCustomSection="true" section-heading="Personal Projects"
      :showcase-items="this.$static.projects.edges" showcase-item-type="project" />
  </div>
</template>


<static-query>
query{ 
  works: allWork{
    edges {
      node{ 
        name
        desc
        img
        stack
        link
        completed
      }
    } 
  }
  projects: allProject(order: ASC){
    edges {
      node{ 
        name
        desc
        img
        stack
        link
        completed
      }
    } 
  }
}
</static-query>


<script>
import CustomSection from '../components/views/whatIveMade/CustomSection.vue'

export default {
  components: { CustomSection, },
  props: ['pageTitle',],
}
</script>
