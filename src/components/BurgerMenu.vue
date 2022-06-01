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
  watch: {
    pageTitle(to, from) {
      // from home
      if (from === undefined) {
        this.animateFromHome = false
        this.animateToHome = false
        this.animateFromHome = true
      }

      // to home
      if (to === undefined) {
        this.animateFromHome = false
        this.animateToHome = false
        this.animateToHome = true
      }
    },
  }
}

</script>
