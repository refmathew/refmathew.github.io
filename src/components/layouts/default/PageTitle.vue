<template>
  <g-link :class="[
    'page-title-wrapper',
    { 'page-title-animate--from-home': pageTitle !== 'Home' },
    { 'page-title-animate--to-home': pageTitle === 'Home' },
  ]" to="/">
    <div class="page-title">
      <div class="page-title__line"></div>
      <div class="page-title__itself">{{ pageTitleNew }}</div>
    </div>
  </g-link>
</template>


<static-query>
</static-query>


<script>
export default {
  props: ['pageTitle'],
  data() {
    return {
      pageTitleNew: this.pageTitle,
    }
  },
  watch: {
    pageTitle(to, from) {
      setTimeout(() => {
        this.pageTitleNew = to
      }, 800)
    },
  }
}
</script>
