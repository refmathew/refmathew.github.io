<template>
  <g-link 
    :class="[ 
      'page-title-wrapper',
      { 'page-title-animate--from-home': animateFromHome === true },
      { 'page-title-animate--to-home': animateToHome === true },
    ]"
    to="/"
  >
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
  props: ['pageTitle', 'animate'],
  data(){
    return {
      pageTitleNew : '',
      animateFromHome: false,
      animateToHome: false,
    }
  },
  watch: {
    pageTitle(to, from){
      setTimeout(()=>{
        this.pageTitleNew = to
      }, 800)


      // from home
      if(from === undefined){
        this.animateFromHome = false
        this.animateToHome = false
        this.animateFromHome = true
      }

      // to home
      if(to === undefined){
        this.animateFromHome = false
        this.animateToHome = false
        this.animateToHome = true
      }
    },
  }
}
</script>
