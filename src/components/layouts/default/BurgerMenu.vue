<template>
  <g-link :class="[
    'menu-wrapper',
    { 'menu-animate--to-home': animateToHome === true },
    { 'menu-animate--from-home': animateFromHome === true }
  ]" to="/">
    <div class="menu">
      <div class="menu__line"></div>
      <div class="menu__line"></div>
      <div class="menu__line"></div>
    </div>
  </g-link>
</template>


<script>
export default {
  props: ['pageTitle'],
  data() {
    return {
      animateToHome: false,
      animateFromHome: false,
    }
  },
  created(){
    // On initial navigation, if the visitor lands on a page other than
    // homepage, show the burgerMenu.
    if (this.pageTitle !== 'Home') this.animateFromHome = true
  },
  watch: {
    pageTitle(to, from) {
      if (from === 'Home') {
        this.animateToHome = false
        this.animateFromHome = true
      }

      if (to === 'Home') {
        this.animateFromHome = false
        this.animateToHome = true
      }
    },
  }
}

</script>
