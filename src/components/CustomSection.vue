<template>
  <section class="custom-section">
    <section-heading :sectionHeading="sectionHeading" />
    <slot />
    <section-divider v-if="isLastCustomSection === true" />
  </section>
</template>

<script>
import SectionDivider from '~/components/SectionDivider';
import SectionHeading from '~/components/SectionHeading';

export default {
  name: 'CustomSection',
  components: {
    SectionDivider,
    SectionHeading,
  },
  props: ['isLastCustomSection', 'sectionName', 'sectionHeading',],
}
</script>
