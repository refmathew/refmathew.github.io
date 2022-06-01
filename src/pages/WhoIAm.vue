<template>
  <div class="page page--who-i-am">
    <main>
      Helllooo
    </main>
    <section>theeerere</section>
    <section>whoooo</section>
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
