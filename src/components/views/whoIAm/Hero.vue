<template>
  <main class="hero">
    <h1 class="hero__text--top">Hi there! I’m <span>Mathew</span></h1>
    <p class="hero__text--middle">I <span>create</span> beautiful <span>websites</span></p>
    <p class="hero__text--bottom">
      I am a web developer who especially likes working on the front-end.
      <br />
      Making things look as close to <span>perfection</span> as they could be is what I am good at.
    </p>
    <g-link class="hero__cta" to="/what-ive-made">Portfolio</g-link>
    <div class="hero__guide"> </div>
    <section-divider />
  </main>
</template>

<script>
import SectionDivider from '~/components/SectionDivider';
export default {
  components: {
    SectionDivider,
  },
}
</script>
