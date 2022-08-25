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
