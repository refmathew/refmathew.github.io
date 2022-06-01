<template>
  <div class="layout-default">
    <logo :animate="animate" />
    <page-title :page-title="getPageTitle()" :animate="animate" />
    <burger-menu :page-title="getPageTitle()" :animate="animate" />
    <socials :animate="animate" />
    <slot />
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
    }

    links: allLink(order: ASC){
      edges{
        node{
          name
          link
        }
      }
    } 
  }
</static-query>

<script>
import Logo from '~/components/Logo'
import PageTitle from '~/components/PageTitle'
import BurgerMenu from '~/components/BurgerMenu'
import Socials from '../components/Socials'

export default {
  components: {
    Logo,
    PageTitle,
    BurgerMenu,
    Socials,
  },
  data() {
    return {
      animate: false,
      animationDur: 1600,
    }
  },
  methods: {
    toggleAnimate() {
      this.animate = true

      setTimeout(() => {
        this.animate = false
      }, this.animationDur)
    },
    getPageTitle() {
      const path = this.$route.path

      let pageTitle = this.$static.links.edges.find(
        link => link.node.link === path.slice(1)
      )

      if (!pageTitle) return pageTitle

      pageTitle = pageTitle.node.name
      return pageTitle
    },
  },
  watch: {
    $route(to, from) {
      this.toggleAnimate()
    }
  }
}
</script>
