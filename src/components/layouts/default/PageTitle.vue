<template>
  <g-link :class="[
    'page-title-wrapper',
    { 'page-title-animate--from-home': pageTitle !== 'Home' && pageTitleNew !== null },
    { 'page-title-animate--to-home': pageTitle === 'Home' && pageTitleNew !== null },
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
      pageTitleNew: null,
    }
  },
  created() {
    // On initial navigation to the site, if the visitor initially lands on
    // the homepage, the pageTitle remains null (there won't be any
    // animation executed, see classes in template). Otherwise, (if
    // the visitor initially lands on a page other than the homepage) there
    // would be animation(see pageTitle.scss for more info).
    if (this.pageTitle !== 'Home') this.pageTitleNew = this.pageTitle
  },
  watch: {
    // this ensures that the pageTitle displayed does not change until
    // it's invisible
    pageTitle(to, from) {
      setTimeout(() => {
        this.pageTitleNew = to
      }, 800)
    },
  }
}
</script>
