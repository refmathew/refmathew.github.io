<template>
  <div :class="['links-wrapper', { 'links-wrapper--inactive': pageTitle !== undefined }]">
    <g-link :class="[
      'link-wrapper',
      { 'link-wrapper--no-click': pageTitle !== undefined },
      { 'link-wrapper--home-page--animate': pageTitle === undefined },
      { 'link-wrapper--current-page--animate': pageTitle === link.node.name && pageTitle !== undefined },
      { 'link-wrapper--non-current-page--animate': pageTitle !== link.node.name && pageTitle !== undefined },
    ]" v-for="link in links.edges" :key="link.node.name" :to="`/${link.node.link}`">
      <span :class="[
        'link',
        { 'link--animate--to-home': pageTitle === undefined },
        { 'link--animate--from-home': pageTitle !== undefined },
      ]">
        {{ link.node.name }}
      </span>
    </g-link>
  </div>
</template>


<script>
export default {
  props: ['animate', 'pageTitle', 'links'],
}
</script>
