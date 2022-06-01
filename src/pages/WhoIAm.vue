<template>
  <div>
    <links page="who-i-am" :animate="animate" />
  </div>
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
}
</script>
