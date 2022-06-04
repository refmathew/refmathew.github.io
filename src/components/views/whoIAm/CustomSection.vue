<template>
  <custom-section :is-last-custom-section='isLastCustomSection' :section-name="sectionName"
    :section-heading="sectionHeading">
    <div class="custom-section__logos">
      <img v-for="logo in sectionLogos" :src="require(`~/assets/img/${sectionName}-${logo}.svg`)" :alt="logo">
    </div>
  </custom-section>
</template>

<script>
import CustomSection from '~/components/CustomSection';

export default {
  components: { CustomSection },
  props: ['isLastCustomSection', 'sectionHeading', 'sectionLogos', 'sectionName',],
}
</script>
