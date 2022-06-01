<template>
  <transition name="index-page">
    <div class="home-page">
      <links :animate="animate" page="home" />
    </div>
  </transition>
</template>


<page-query>
  query{
    links: allLink(order: ASC){
      edges{
        node{
          name
          link
        }
      }
    } 
  }
</page-query>


<script>
import Links from '../components/Links'

export default {
  props: ['animate'],
  components: {
    Links,
  },
  metaInfo: {
    title: 'rmathew'
  }
}
</script>
