<template>
  <div class="links-wrapper">
    <g-link v-for="link in $page.links.edges" :key="link.node.name" :class="[
      'link-wrapper',
      { 'link-wrapper--no-click': page !== 'home' },
      { 'link-wrapper--current-page-animate--from-home': page === link.node.link },
    ]" :to="`/${link.node.link}`">
      <span :class="[
        'link',
        { 'link-animate--to-home': page === 'home' },
        { 'link-animate--from-home': page !== 'home' },
      ]">
        {{ link.node.name }}
      </span>
    </g-link>
  </div>
</template>


<script>
export default {
  props: ['animate', 'page'],
}
</script>
