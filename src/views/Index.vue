<template>
  <nav :class="[
    'links-wrapper',
    { 'links-wrapper--inactive': pageTitle !== 'Home' }
  ]">
    <g-link :class="[
      'link-wrapper',
      { 'link-wrapper--no-click': pageTitle !== 'Home' },
      { 'link-wrapper--to-home--animate': pageTitle === 'Home' },
      { 'link-wrapper--from-home--animate': pageTitle !== 'Home' },
    ]" v-for="link in links.edges" :key="link.node.name" :to="`/${link.node.link}`">
      <span :class="[
        'link',
        { 'link--animate--to-home': pageTitle === 'Home' },
        { 'link--animate--from-home': pageTitle !== 'Home' },
      ]">
        {{ link.node.name }}
      </span>
    </g-link>
  </nav>
</template>


<script>
export default {
  props: ['animate', 'pageTitle', 'links'],
  watch: {
    pageTitle(to, from) {
      console.log(to, from)
    }
  }
}
</script>
