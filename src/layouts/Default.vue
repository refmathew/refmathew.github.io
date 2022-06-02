<template>
  <div class="layout-default">
    <logo :animate="animate" />
    <page-title :page-title="getPageTitle()" />
    <burger-menu :page-title="getPageTitle()" :animate="animate" />
    <socials :animate="animate" />
    <index :links="this.$static.links" :page-title="getPageTitle()" :animate="animate" />
    <slot />
    <who-i-am />
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
import Socials from '~/components/Socials'
import Index from '~/views/Index'
import WhoIAm from '~/views/WhoIAm'

export default {
  components: {
    Logo,
    PageTitle,
    BurgerMenu,
    Socials,
    Index,
    WhoIAm,
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

      if (!pageTitle) return 'Home'

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
