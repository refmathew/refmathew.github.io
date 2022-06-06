<template>
  <div :class="['page', 'page--who-i-am', 'page--who-i-am--to',]" v-show="pageTitle === 'Who I Am'">
    <hero />
    <custom-section class="section--tech" :is-last-custom-section='false' section-name="tech"
      section-heading="Technologies I've used" :section-logos="technologies" />
    <custom-section class="section--tools" :is-last-custom-section='true' section-name="tool"
      section-heading="Tools in my workflow" :section-logos="tools" />
  </div>
</template>

<script>
import Hero from '../components/views/whoIAm/Hero'
import CustomSection from '../components/views/whoIAm/CustomSection'

export default {
  components: {
    Hero,
    CustomSection,
  },
  data() {
    return {
      technologies: [
        'html',
        'css',
        'javascript',
        'sass',
        'mongodb',
        'express',
        'vue',
        'nodejs',
        'php',
      ],
      tools: [
        'linux',
        'neovim',
        'postman',
        'figma',
        'git',
      ]
    }
  },
  props: ['pageTitle'],
}
</script>
